"use client";
import IndustryTemplate from "../../components/detail/IndustryTemplate";
import { INDUSTRIES } from "../../components/detail/industryData";

export default function FB(): JSX.Element {
  return <IndustryTemplate data={INDUSTRIES["fb"]} />;
}
