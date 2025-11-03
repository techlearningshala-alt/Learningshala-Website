"use client";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../../shared/PrimaryButton";
import ContentDrawer from "../../shared/drawer/ContentDrawer";
import UniversityCardSkeleton from "./UniversityCardSkeleton";

const AllUniversitySection = ({ universitiesList, loading }) => {

  // const universityList = [
  //   {
  //     name: "Amity Online University",
  //     image: "/images/university_list/1_amity-online-university-logo.jpg",
  //     courseCount: "23",
  //     category: "top-ranked",
  //     link: "/university/amity-online-university",
  //   },
  //   {
  //     name: "Chandigarh Distance University",
  //     image:
  //       "/images/university_list/2_chandigarh-distance-university-logo.jpg",
  //     courseCount: "23",
  //     category: "distance-learning",
  //     link: "/university/chandigarh-distance-university",
  //   },
  //   {
  //     name: "Chandigarh Online University",
  //     image: "/images/university_list/3_chandigarh-online-university-logo.jpg",
  //     courseCount: "23",
  //     category: "online",
  //     link: "/university/chandigarh-online-university",
  //   },
  //   {
  //     name: "Datta Meghe Institute of Higher Education",
  //     image:
  //       "/images/university_list/4_datta-meghe-institute-of-higher-education-online-logo.webp",
  //     courseCount: "23",
  //     category: "top-ranked",
  //     link: "/university/datta-meghe-institute-of-higher-education",
  //   },
  //   {
  //     name: "Dy Patil Vidyapeeth University",
  //     image:
  //       "/images/university_list/5_dy-patil-vidyapeeth-university-online.jpg",
  //     courseCount: "23",
  //     category: "medical",
  //     link: "/university/dy-patil-vidyapeeth-university",
  //   },
  //   {
  //     name: "GLA University",
  //     image: "/images/university_list/6_GLA-University-Online-logo.jpg",
  //     courseCount: "23",
  //     category: "engineering",
  //     link: "/university/gla-university",
  //   },
  //   {
  //     name: "Dy Patil Vidyapeeth University",
  //     image:
  //       "/images/university_list/5_dy-patil-vidyapeeth-university-online.jpg",
  //     courseCount: "23",
  //     category: "medical",
  //     link: "/university/dy-patil-vidyapeeth-university",
  //   },
  //   {
  //     name: "GLA University",
  //     image: "/images/university_list/6_GLA-University-Online-logo.jpg",
  //     courseCount: "23",
  //     category: "engineering",
  //     link: "/university/gla-university",
  //   },
  //    {
  //     name: "Dy Patil Vidyapeeth University",
  //     image:
  //       "/images/university_list/5_dy-patil-vidyapeeth-university-online.jpg",
  //     courseCount: "23",
  //     category: "medical",
  //     link: "/university/dy-patil-vidyapeeth-university",
  //   },
  //   {
  //     name: "GLA University",
  //     image: "/images/university_list/6_GLA-University-Online-logo.jpg",
  //     courseCount: "23",
  //     category: "engineering",
  //     link: "/university/gla-university",
  //   },

  // ];

  return (
    <div className="mb-15">
      <div className="container mx-auto">
        <div className="bg-[#9886fe] p-5 md:p-10 rounded-4xl relative">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12 lg:col-span-6 flex items-center">
              <div>
                {" "}
                <h3
                  className={`font-semibold text-xl md:text-4xl mb-5 md:mb-10 text-white`}
                >
                  Stop Guessing Your Career, Start Comparing on Facts
                </h3>
                <p className="text-white mb-5 md:mb-10">
                  Choosing a university is a life-changing decision. Don't leave
                  it to chance or marketing hype. We put the power back in your
                  hands by letting you compare 100+ universities & their degree
                  programs on 30+ factors that actually matter—from placement
                  stats and real-world salary ROI to student-faculty ratios and
                  alumni ratings. Everything on your fingertips.
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-10">
                {loading
                  ? Array.from({ length: 6 }).map((_, i) => (
                    <div className="text-center px-2 relative group" key={i}>
                      <UniversityCardSkeleton />
                    </div>
                    ))
                  : universitiesList.slice(0, 6).map((university, index) => (
                      <Card className="text-center px-2 relative group" key={index}>
                        <CardHeader className="px-1">
                          <CardTitle>
                            <Image src={`${process.env.NEXT_PUBLIC_BASE_URL}${university.university_logo}`} alt="university" width={100} height={100} className="mb-3 mx-auto" style={{ objectFit: "contain", aspectRatio: "2/1" }} />
                            <p className="text-gray-500 text-xs line-clamp-2 font-black mb-0">{university.university_name}</p>
                          </CardTitle>
                        </CardHeader>
                        <Link className="absolute inset-0" href={`/university/${university.university_slug}`}></Link>
                      </Card>
                    ))}
                
              </div>

              <ContentDrawer
                trigger={<PrimaryButton title="Explore Universities" />}
                title="All Universities"
                description="Discover 100+ universities & their degree programs"
                content={
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-4">
                    {universitiesList.map((university, index) => (
                      <Card
                        className="text-center px-2 relative group"
                        key={index}
                      >
                        <CardHeader className="px-1">
                          <CardTitle>
                            <Image
                              src={`${process.env.NEXT_PUBLIC_BASE_URL}${university.university_logo}`}
                              alt="university"
                              width={100}
                              height={100}
                              className="mb-3 mx-auto"
                              style={{
                                objectFit: "contain",
                                aspectRatio: "2/1",
                              }}
                            />
                            <p className="text-gray-500 text-xs line-clamp-2 font-black mb-0">
                              {university.university_name}
                            </p>
                          </CardTitle>
                        </CardHeader>
                        <Link
                          className="absolute inset-0"
                          href={`/university/${university.university_slug}`}
                        ></Link>
                      </Card>
                    ))}
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUniversitySection;
