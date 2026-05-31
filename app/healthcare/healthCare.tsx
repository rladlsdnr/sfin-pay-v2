"use client";
import IndustryTemplate from "../../components/detail/IndustryTemplate";
import { INDUSTRIES } from "../../components/detail/industryData";

export default function HealthCare(): JSX.Element {
  return <IndustryTemplate data={INDUSTRIES["healthcare"]} />;
}
