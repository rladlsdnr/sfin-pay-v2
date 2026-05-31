"use client";
import IndustryTemplate from "../../components/detail/IndustryTemplate";
import { INDUSTRIES } from "../../components/detail/industryData";

export default function Device(): JSX.Element {
  return <IndustryTemplate data={INDUSTRIES["device"]} />;
}
