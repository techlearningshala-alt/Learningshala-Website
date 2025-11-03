import React from "react";
import UniversityContentHeading from "./UniversityContentHeading";
import Image from "next/image";
import ContentModal from "../custom/shared/modal/ContentModal";
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import ContentDrawer from "../custom/shared/drawer/ContentDrawer";

const UniversityApprovalLogos = ({ id, title, props, universityData }) => {
  const logos = props.universityApprovals;
  //   {
  //     img: "/images/approvals/a1.jpg",
  //     name: "WES",
  //   },
  //   {
  //     img: "/images/approvals/a2.png",
  //     name: "AICTE",
  //   },
  //   {
  //     img: "/images/approvals/a3.webp",
  //     name: "NIRF",
  //   },
  //   {
  //     img: "/images/approvals/a4.jpg",
  //     name: "UGC DEB",
  //   },
  // ];
  return (
    <>
      <div id={id} className="content_card">
        <UniversityContentHeading title={title} />

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
          {universityData?.approvals?.map((data, index) => (
            <ContentDrawer
              key={index}
              title={
                <div className="flex justify-center flex-col items-center gap-2">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${universityData.university_logo}`}
                  width={120}
                  height={45}
                  alt={universityData.university_name || "University Logo"}
                  className="mb-4 rounded-sm object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
                <h3 className="text-lg font-bold">
                  {universityData.university_name} Approvals
                </h3>
              </div>
              }
              trigger={
                <span className="flex justify-center flex-col items-center border border-gray-200 rounded-md p-2 md:p-3 cursor-pointer">
                  <Image
                    className="rounded-sm object-contain mb-2"
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${data.logo}`}
                    width={40}
                    height={40}
                    alt={data.title}
                    priority
                  />
                  <span className="min-w-max font-medium text-center uppercase text-black !mb-0">
                    {data.title}
                  </span>
                </span>
              }
              content={
                <div className="p-4 max-w-4xl mx-auto">
                  <Timeline>
                    {universityData.approvals.map((item) => (
                      <TimelineItem
                        key={item.id}
                        step={item.id}
                        className="group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-8"
                      >
                        <TimelineHeader>
                          <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
                          <TimelineTitle className="mt-1.5 text-lg font-bold uppercase">
                            {item.title}
                          </TimelineTitle>
                          <TimelineIndicator className="bg-primary/10 group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-10 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7">
                            <Image
                              width={40}
                              height={40}
                              src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.logo}`}
                              alt={item.title || "Approval Logo"}
                              className="size-8 rounded-full"
                            />
                          </TimelineIndicator>
                        </TimelineHeader>
                        <TimelineContent className="text-foreground bg-[#f4f2ea] mt-2 rounded-lg p-5">
                        {item.description}
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </Timeline>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default UniversityApprovalLogos;
