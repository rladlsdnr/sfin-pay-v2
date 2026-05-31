"use client";
import IndustryTemplate from "../../components/detail/IndustryTemplate";
import { INDUSTRIES } from "../../components/detail/industryData";

export default function Entertainment(): JSX.Element {
  return <IndustryTemplate data={INDUSTRIES["entertainment"]} />;
}
