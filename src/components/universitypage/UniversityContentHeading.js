import React from "react";

const UniversityContentHeading = (props) => {
  return <h2 className={`font-bold text-xl mb-3 ${props.className}`}>{props.title}</h2>;
};

export default UniversityContentHeading;
