import React from "react";
import UniversityContentHeading from "./UniversityContentHeading";
import Image from "next/image";
import PrimaryButton from "../custom/shared/PrimaryButton";
import SecondaryButton from "../custom/shared/SecondaryButton";
import { Phone, Wallet } from "lucide-react";
import { cleanHTML } from "@/lib/cleanHTML";

const UniversityEmi = ({ id, title, props,universityData }) => {
  return (
    <div id={id} className="content_card">
      <UniversityContentHeading title={title} />
      <div dangerouslySetInnerHTML={{ __html: cleanHTML(props.content) }} />
      <div className="flex items-center gap-3 my-8 justify-between">
        <UniversityContentHeading className="!m-0" title={"Emi Partners"} />
      </div>
      <div className="flex flex-wrap gap-4 items-center placement_partner mb-8">
        {universityData?.emi_partners?.map((item, index) => (
          <span key={index}>
       
            <Image
              className="border py-2 px-3 rounded-xl bg-white"
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.logo}`}
              width="100"
              height="40"
              alt={item.name}
              style={{ objectFit: "contain" }}
            />
          </span>
        ))}
      </div>
      <div className="content_card !bg-gray-900">
        <p className="font-bold text-xl mb-3 text-white">Take the next step</p>
        <p className="text-gray-100">
          Apply to the program now or schedule a call with a program advisor
        </p>
        <div className="grid grid-cols-12 gap-4 mt-4">
          <div className="col-span-12 lg:col-span-6 content_card bg-gray-100 font-bold flex justify-center flex-col items-center">
            <Wallet className="w-8 h-8" />
            <p className="mt-2">Unlock exclusive EMI offer </p>
            <PrimaryButton title="Apply for Loan" />
          </div>
          <div className="col-span-12 lg:col-span-6 content_card bg-gray-100 font-bold flex justify-center flex-col items-center">
            <Phone className="w-8 h-8" />
            <p className="mt-2">
              Talk to our advisor for offers & course details
            </p>
            <SecondaryButton title="Schedule a call" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityEmi;
