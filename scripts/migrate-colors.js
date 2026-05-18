/* eslint-disable */
/**
 * 색상 토큰 마이그레이션 스크립트 (구 그린/민트 → 네이비/골드 토큰)
 *
 * 처리 대상:
 *  1. Tailwind arbitrary 클래스   text-[#10b981]      → text-navy
 *  2. Tailwind arbitrary rgba     bg-[rgba(16,185,129,0.25)] → bg-navy/[0.25]
 *  3. style 객체 raw hex          color:'#10b981'     → color:'#003366'
 *  4. style 객체 raw rgba         rgba(16,185,129,..) → rgba(0,51,102,..)
 *
 * 실행:  node scripts/migrate-colors.js          (적용)
 *        node scripts/migrate-colors.js --dry    (미리보기)
 */
const fs = require("fs");
const path = require("path");

const DRY = process.argv.includes("--dry");
const ROOTS = ["app", "components"];

// 토큰: 클래스명 + raw hex 값
const TOKEN = {
  navy:        { cls: "navy",        hex: "#003366" },
  "navy-700":  { cls: "navy-700",    hex: "#002b57" },
  "navy-800":  { cls: "navy-800",    hex: "#001a33" },
  "navy-900":  { cls: "navy-900",    hex: "#000a1a" },
  mist:        { cls: "mist",        hex: "#d6e2ee" },
  paper:       { cls: "paper",       hex: "#fbfcfd" },
  "surface-2": { cls: "surface-2",   hex: "#f2f6fb" },
};

// 구 hex(소문자, # 제외) → 토큰
const HEX_TO_TOKEN = {};
const assign = (token, list) => list.forEach((h) => (HEX_TO_TOKEN[h] = token));

// 브랜드 그린 (밝은 톤) → navy
assign("navy", ["10b981","00b894","00c89b","00a884","00c8b4","00d8b8","00d0aa",
  "00c9a7","00b8a0","34d399","6ee7b7","2dd4bf","36ffc6","16a34a"]);
// 브랜드 그린 (깊은 톤) → navy-700  (그라데이션 깊이 유지)
assign("navy-700", ["059669","047857","006f4f","0f766e","008c73","007a65",
  "00997a","145c52","145c54","2e5c54","0b4d45"]);
// 다크 패널 그린 → navy-800
assign("navy-800", ["0f2b26","1e3a34","1f3b37","0c3c35","0b3c34","064e3b",
  "065f46","045a4d","004d3f"]);
// 최다크 그린 → navy-900
assign("navy-900", ["042f2e","0b2723","102a27","0f172a"]);
// 옅은 민트 틴트 (보더/라이트 액센트) → mist
assign("mist", ["a7f3d0","a5f3d8","a7ecdd","a6f2df","b7f3de","b2f5ea","99f6e4",
  "bbf7f0","c4f7ec","c8fff4","c5fff0","d1fae5","d2fbea"]);
// 거의 흰 배경 틴트 → paper
assign("paper", ["f0fdfa","ecfdf5","ecfdf3","ecfeff","e6fff9","e6fff8","e6fffa",
  "e8fff6","e8fdf8","e9fff6","effff9","effffa","f2fffb","f7fffb","f9fffe",
  "f3fffc","f8fffd","fafffd","f9fffd","f6fffb","f5fffd","f4fffc","f0fff9","f9fafb"]);
// 중립 라이트 그레이 → surface-2
assign("surface-2", ["e2e8f0"]);

// 브랜드 그린 rgb 트리플 (rgba 변형) → 네이비 채널
const GREEN_TRIPLES = new Set([
  "16,185,129","0,200,155","0,184,148","0,201,167",
  "10,206,177","63,255,222","50,245,210",
]);
const NAVY_TRIPLE = "0,51,102";

const isTsx = (f) => /\.(tsx|jsx)$/.test(f);
function walk(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (isTsx(e.name)) out.push(p);
  }
}

let totalFiles = 0, totalChanges = 0;
const files = [];
ROOTS.forEach((r) => fs.existsSync(r) && walk(r, files));

for (const file of files) {
  let src = fs.readFileSync(file, "utf8");
  const before = src;
  let n = 0;

  // 1) arbitrary rgba 클래스: [rgba(r,g,b,a)] → navy/[a]
  src = src.replace(
    /\[rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)\]/gi,
    (m, r, g, b, a) => {
      const triple = `${r},${g},${b}`;
      if (!GREEN_TRIPLES.has(triple)) return m;
      n++;
      return `navy/[${a}]`;
    }
  );

  // 2) arbitrary hex 클래스: [#rrggbb] → 토큰 클래스명
  src = src.replace(/\[#([0-9a-fA-F]{6})\]/g, (m, hex) => {
    const tok = HEX_TO_TOKEN[hex.toLowerCase()];
    if (!tok) return m;
    n++;
    return TOKEN[tok].cls;
  });

  // 3) raw rgba (브래킷 밖): rgba(green-triple,..) → rgba(navy-triple,..)
  src = src.replace(
    /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,/gi,
    (m, r, g, b) => {
      if (!GREEN_TRIPLES.has(`${r},${g},${b}`)) return m;
      n++;
      return `rgba(${NAVY_TRIPLE},`;
    }
  );

  // 4) raw hex (브래킷 밖): #rrggbb → 토큰 hex
  src = src.replace(/(?<!\[)#([0-9a-fA-F]{6})\b/g, (m, hex) => {
    const tok = HEX_TO_TOKEN[hex.toLowerCase()];
    if (!tok) return m;
    n++;
    return TOKEN[tok].hex;
  });

  if (src !== before) {
    totalFiles++;
    totalChanges += n;
    console.log(`  ${file}  (${n})`);
    if (!DRY) fs.writeFileSync(file, src, "utf8");
  }
}

console.log(
  `\n${DRY ? "[DRY] " : ""}${totalChanges} changes across ${totalFiles} files.`
);
