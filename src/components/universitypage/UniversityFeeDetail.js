import React from "react";
import UniversityContentHeading from "./UniversityContentHeading";
import SpanButton from "./SpanButton";
import { Banknote } from "lucide-react";

const UniversityFeeDetail = ({ id, title, props }) => {
  return (
    <div id={id} className="content_card">
      <div className="flex flex-wrap items-center justify-between mb-4"><UniversityContentHeading className="!m-0" title={title} />
        <SpanButton title="Apply for loan" icon={<Banknote className="w-5 h-5" />} /></div>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
  );
};

export default UniversityFeeDetail;
