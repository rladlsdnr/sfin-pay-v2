"use client";
import IndustryTemplate from "../../components/detail/IndustryTemplate";
import { INDUSTRIES } from "../../components/detail/industryData";

export default function B2B(): JSX.Element {
  return <IndustryTemplate data={INDUSTRIES["b2b"]} />;
}
