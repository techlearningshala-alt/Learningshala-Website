import React from "react";
import UniversityContentHeading from "./UniversityContentHeading";
import Image from "next/image";
import PrimaryButton from "../custom/shared/PrimaryButton";

const UniversityAdmissionProcess = ({ id, title, props }) => {
  return (
    <div id={id} className="content_card">
      <UniversityContentHeading title={title} />
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
      {props.image ? (
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${props.image}`}
          className="w-full"
          width={500}
          height={300}
          alt="admission process"
        />
      ) : (
        <Image
          src="/"
          className="w-full"
          width={500}
          height={300}
          alt="admission process"
        />
      )}

   
      <div className="content_card !bg-[#f4f2ea] flex flex-wrap gap-2 justify-between items-center">
        <div>
          <p className="font-bold !mb-0 text-red-700">
            Limited seats available
          </p>
          <p className="!mb-0">Apply today and get best offer</p>
        </div>
        <div>
          <PrimaryButton title="Apply Now" />
        </div>
      </div>
    </div>
  );
};

export default UniversityAdmissionProcess;
