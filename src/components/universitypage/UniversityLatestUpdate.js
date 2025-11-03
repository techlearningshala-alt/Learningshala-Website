import React from "react";
import UniversityContentHeading from "./UniversityContentHeading";
import { BellRing, ChevronRight } from "lucide-react";
import SpanButton from "./SpanButton";

const UniversityLatestUpdate = ({ id, title, props }) => {
  return (
    <>
      {props.content &&
        <div id={id} className="content_card">
          <div className="flex items-center flex-wrap justify-between mb-4">
            <UniversityContentHeading title={<span className="flex items-center gap-2"><BellRing className="bg-gray-200 p-2 w-10 h-10 rounded-md " /> {title}</span>} />
            <SpanButton title="Get Latest Updates" icon={<ChevronRight className="w-4 h-4" />} /></div>
          <div
            dangerouslySetInnerHTML={{ __html: props.content }}
            className="rich_text"
          />
        </div>}
    </>
  );
};

export default UniversityLatestUpdate;
