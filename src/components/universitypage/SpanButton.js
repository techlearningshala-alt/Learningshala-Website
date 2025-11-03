import React from "react";

const SpanButton = (props) => {
  return (
    <span className="bg-amber-200 font-bold px-3 py-2 rounded-3xl cursor-pointer flex items-center gap-1">
      {props.title}{props.icon}
    </span>
  );
};

export default SpanButton;
