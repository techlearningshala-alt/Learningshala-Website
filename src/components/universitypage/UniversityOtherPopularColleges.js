import React from "react";
import UniversityContentHeading from "./UniversityContentHeading";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";

const UniversityOtherPopularColleges = ({
  id,
  title,
  props,
  universitiesList,
  universityData
}) => {  

  const otherUniversitiesList = universitiesList.filter((university) => university.university_slug !== universityData.university_slug);
  // console.log(otherUniversitiesList, "otherUniversitiesList");

  return (
    <div id={id} className="content_card">
      <UniversityContentHeading title={title} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        {otherUniversitiesList.map((university) => (
          <Card
            className="text-center px-2 relative group overflow-hidden"
            key={university.university_slug}
          >
            <CardHeader className="px-1">
              <CardTitle>
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${university.university_logo}`}
                  alt={university.university_name || "University Logo"}
                  width={100}
                  height={100}
                  className="mb-3 mx-auto"
                  style={{ objectFit: "contain", aspectRatio: "2/1" }}
                />
                <p className="text-gray-500 text-xs line-clamp-2 font-black mb-0">
                  {university.university_name}
                </p>
              </CardTitle>
            </CardHeader>
            <Link
              className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-secondary text-white w-full py-1 font-semibold flex items-center justify-center gap-2"
              href={`/university/${university.university_slug}`}
            >
              Apply <MoveRight className="w-4 h-4" />
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UniversityOtherPopularColleges;
