"use client";
import IndustryTemplate from "../../components/detail/IndustryTemplate";
import { INDUSTRIES } from "../../components/detail/industryData";

export default function QRPay(): JSX.Element {
  return <IndustryTemplate data={INDUSTRIES["qr-pay"]} />;
}
