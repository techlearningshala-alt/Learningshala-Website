import React from "react";
import UniversityContentHeading from "./UniversityContentHeading";

const UniversityScholarship = ({id,title,props}) => {
  return (
    <div id={id} className="content_card">
      <UniversityContentHeading title={title} />
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
  );
};

export default UniversityScholarship;
