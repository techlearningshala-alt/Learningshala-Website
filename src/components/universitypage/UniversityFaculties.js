import React, { useState } from "react";
import UniversityContentHeading from "./UniversityContentHeading";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import ContentModal from "../custom/shared/modal/ContentModal";

const UniversityFaculties = ({ id, title, props }) => {
  const { faculties } = props;
  return (
    <div id={id} className="content_card !bg-gray-900">
      <UniversityContentHeading title={title} className="text-white" />
      <section>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 mt-5 flex-wrap gap-x-2 gap-y-8 ">
       
          {faculties.map((item, index) => (
            <ContentModal
              ContentClassName="w-md"
              key={index}
              title={""}
              trigger={
                <div>
                <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.img}`}
                    width={100} height={100}
                    alt={item?.name || "Faculty Image"}
                    className="w-28 h-28 mb-2 rounded-2xl object-cover mx-auto transition-all duration-500 border-2 border-solid border-transparent"
                  />
                <h4 className="text-md font-bold text-white text-center mb-1 transition-all duration-500 line-clamp-1">
                 {item.name}
                </h4>
                <p className="text-gray-400 !mb-1 text-center block transition-all duration-500 line-clamp-1 text-[12px]">
                {item?.designation || ""}
                </p>
                <span className="cursor-pointer text-primary inline-flex items-center text-center transition-all duration-500 font-bold text-[12px] sm:text-sm">
                  View  More <ChevronRight className="w-4 h-4" />
                </span>
              </div>
              }
              content={
                <div>
                     <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.img}`}
                    width={100} height={100}
                    alt={item?.name || "Faculty Image"}
                    className="w-28 h-28 rounded-2xl object-cover mx-auto ransition-all duration-500 border-2 border-solid border-transparent mb-4"
                  />
                  <p className="text-center font-bold mb-0 text-primary">   {item.name}</p>
                  <p className="text-center font-bold mb-3">    {item?.designation || ""}</p>
                 <p className="text-center">{item.desc}</p>
                </div>
              }
              div
            />
          ))}
        
        </div>
      </section>
    </div>
  );
};

export default UniversityFaculties;
