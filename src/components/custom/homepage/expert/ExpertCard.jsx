import { BadgeCheck, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import SecondaryButton from "../../shared/SecondaryButton";

const ExpertCard = ({ item }) => {
  return (
    <>
      {item.label && <span className="absolute text-sm top-0 left-0 bg-white ms-2 mt-2 border rounded-md text-[12px] px-3 py-1 font-medium flex items-center gap-1 shadow-2xl capitalize"><Star className="w-4 h-4 text-primary" />{item.label}</span>}
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.thumbnail}`}
        className="rounded-lg object-cover"
        alt="testimonial"
        width={356}
        height={354}
        priority={true}
        style={{ width: "100%", height: "250px" }}

      />
      <div>
        <p className="font-bold my-3 flex items-center justify-center gap-2">{item.name} {item.verified === 1 && <BadgeCheck className="w-5 h-5 text-green-600" />}  </p>
        <div className="flex w-full justify-between bg-[#fafafa] p-2 rounded-md mb-2"><p className="flex flex-col "><span className="text-[11px] text-gray-600">Experience</span><span className="text-[13px] font-bold">{item.experience} Years</span></p>
          <p className="flex flex-col "><span className="text-[11px] text-gray-600">Students Mentored</span><span className="text-[13px] font-bold">{item.assist_student}</span></p></div>

        <SecondaryButton title="Get Advice Now" iconPos="right" className="w-full" />


      </div></>
  );
};

export default ExpertCard;
