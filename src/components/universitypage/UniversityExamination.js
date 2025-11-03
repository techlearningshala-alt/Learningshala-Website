import React from "react";
import UniversityContentHeading from "./UniversityContentHeading";

const UniversityExamination = ({ id, title, props }) => {
  return (
    <>
      {props.content && (
        <div id={id} className="content_card">
          <div className="flex items-center flex-wrap justify-between mb-4">
            <UniversityContentHeading title={title} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: props.content }} />
        </div>
      )}
    </>
  );
};

export default UniversityExamination;
