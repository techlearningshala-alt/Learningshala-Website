import React from "react";

const CourseContentHeading = (props) => {
  return <h2 className={`font-bold text-2xl mb-4 ${props.className}`}>{props.title}</h2>;
};

export default CourseContentHeading;
