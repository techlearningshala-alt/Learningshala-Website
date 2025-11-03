import Image from "next/image";
import React from "react";

const ReelCard = ({ item }) => {
  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.thumbnail}`}
      className="rounded-lg"
      alt="testimonial"
      width={256}
      height={383}
      style={{ width: "100%", height: "auto" }}
    />
  );
};

export default ReelCard;
