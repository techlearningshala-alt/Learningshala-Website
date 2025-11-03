
import { ChevronRight } from "lucide-react";
const PrimaryButton = (props) => {
  return (
    <span
      // asChild
      className={`px-2 sm:px-6 py-2 sm:py-4 bg-gradient-to-r from-[#fbde66] to-[#f7c948] text-[12px] sm:text-sm gap-1 sm:gap-2 w-full cursor-pointer text-nowrap text-black transition-colors duration-300 hover:bg-[#e4b408] rounded-md font-bold inline-flex items-center justify-center ${props.className}`}
      // style={{ padding: "14px 16px" }}
    >
      {props.iconPos === "left" ? (
        <>
          {" "}
          {props.icon || <ChevronRight />} {props.title || "button"}
        </>
      ) : (
        <>
          {props.title || "button"} {props.icon || <ChevronRight />}{" "}
        </>
      )}
    </span>
  );
};

export default PrimaryButton;
