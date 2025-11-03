import { Link } from "react-scroll";
import React from "react";
import { List } from "lucide-react";

const Toc = ({ sections }) => {
  // Filter out sections with no content or only whitespace
  // const validSections = sections?.filter((sec) => sec?.content?.trim() !== "");
  // If no valid sections, don't render the TOC at all
  // if (!validSections?.length) return null;
  return (
    <nav className="content_card sticky top-0 z-10">
      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
        <List className="w-4 h-4" /> Table of Contents
      </h3>
      <ol
        className="space-y-2"
        style={{ listStyleType: "none", paddingLeft: "0px" }}
      >
        {sections?.map((sec) => (
          <li
            key={sec.id}
            className={`!mb-2 ${
              sec.props?.content?.trim() == "" ? "hidden" : "block"
            }`}
          >
            <Link
              duration={10}
              to={sec.id}
              spy={true}
              smooth={true}
              className={`font-bold hover:underline cursor-pointer`}
              activeClass="font-bold text-primary"
            >
              {sec.title}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Toc;
