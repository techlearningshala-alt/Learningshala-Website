import React from "react";
import UniversityContentHeading from "./UniversityContentHeading";
import VideoModal from "../custom/shared/modal/VideoModal";

const UniversityDesc = ({ id, title, props }) => {
  return (
    <>
      {props.content && (
        <div id={id} className="content_card">
          <div className="flex items-center mb-4 gap-3">
            <UniversityContentHeading className="!m-0" title={title} />
            {props.videoID && (
              <VideoModal videoID={props.videoID} title={props.videoTitle} />
            )}
          </div>
          <div dangerouslySetInnerHTML={{ __html: props.content }} />
        </div>
      )}
    </>
  );
};

export default UniversityDesc;
