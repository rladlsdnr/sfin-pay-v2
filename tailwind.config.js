/** @type {import('tailwindcss').Config} */

// 네이비 램프 — 구 emerald/green/teal 클래스를 자동 전환하기 위한 대체 팔레트.
// (text-emerald-700, bg-emerald-100 등 기존 클래스가 파일 수정 없이 네이비로 바뀜)
const navyRamp = {
  50: "#f2f6fb",
  100: "#e1e9f2",
  200: "#c3d2e3",
  300: "#9db3cc",
  400: "#5c7da3",
  500: "#2b5180",
  600: "#1a3f6b",
  700: "#003366",
  800: "#002247",
  900: "#001a33",
  950: "#000a1a",
};

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ===== 시맨틱 색상 토큰 — 테마 변경 시 이 블록만 수정 ===== */
        paper: "#fbfcfd",
        surface: {
          DEFAULT: "#ffffff",
          2: "#f2f6fb",
        },
        mist: "#d6e2ee",
        navy: {
          DEFAULT: "#003366",
          700: "#002b57",
          800: "#001a33",
          900: "#000a1a",
        },
        gold: {
          DEFAULT: "#ffb800",
          light: "#ffd24a",
          dark: "#e89a00",
          deep: "#c88500",
        },
        ink: {
          DEFAULT: "#003366",
          muted: "#475569",
          soft: "#64748b",
        },

        /* ===== 구 테마 클래스 호환 — emerald/green/teal → 네이비 ===== */
        emerald: navyRamp,
        green: navyRamp,
        teal: navyRamp,

        /* 구 brand.mint → 네이비 토큰으로 흡수 */
        brand: {
          mint: "#003366",
          mintLight: "#f2f6fb",
          mintDark: "#001a33",
        },
      },
      backgroundImage: {
        "mint-gradient":
          "linear-gradient(to bottom right, #fbfcfd, #f2f6fb, #e1e9f2)",
      },
    },
  },
  plugins: [],
};
