"use client";
import IndustryTemplate from "../../components/detail/IndustryTemplate";
import { INDUSTRIES } from "../../components/detail/industryData";

export default function Hospitality(): JSX.Element {
  return <IndustryTemplate data={INDUSTRIES["hospitality"]} />;
}
