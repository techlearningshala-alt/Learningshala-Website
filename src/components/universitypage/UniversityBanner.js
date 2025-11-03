import {
  ChevronRight,
  Download,
  FlipHorizontal2,
  MapPin,
  Star,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import PrimaryButton from "../custom/shared/PrimaryButton";
import SecondaryButton from "../custom/shared/SecondaryButton";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import VideoModal from "../custom/shared/modal/VideoModal";
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
import { Card } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const UniversityBanner = ({ universityDetailData, screenSize }) => {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div>
      <div className="container sec_mb">
        <Breadcrumb className="mb-3">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {universityDetailData?.university_slug
                ?.replace(/-/g, " ")
                .toUpperCase()}
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div
          className="grid grid-cols-12 overflow-hidden rounded-xl"
          style={{
            boxShadow:
              "0 0 #0000,0 0 #0000,0px 16px 32px -2px rgba(36,7,70,.06),0px -8px 20px 0px rgba(36,7,70,.02)",
          }}
        >
          <div className="col-span-12 lg:col-span-6 flex items-center px-4 md:px-10 py-6 order-2 md:order-1">
            <div>
              {" "}
              <h1 className="font-bold text-2xl md:text-4xl mb-4">
                {universityDetailData.university_name}
                {/* {universityDetailData.basicInfo.universityCourseName &&
                  `${" "} ${universityDetailData.basicInfo.universityCourseName}`} */}
              </h1>
              <p className="flex gap-4 mb-4 text-[12px] md:text-sm">
                <span className="flex items-center gap-1 bg-[#f4f2ea] px-3 py-1 rounded-xl">
                  <MapPin className="w-4 h-4" />
                  {universityDetailData.university_location}
                </span>
                <span className="flex items-center gap-1 bg-[#f4f2ea] px-3 py-1 rounded-xl">
                  <Star className="w-4 h-4 text-yellow-400" />
                  {universityDetailData?.reviews?.length > 0 ? `${universityDetailData?.reviews?.reduce((acc, review) => acc + review.value, 0) / universityDetailData?.reviews?.length || 0}.0/5 Reviews` : "0.0/5 Reviews"}
                </span>
              </p>{" "}
              <p className="font-bold mb-4">Approvals : </p>
              <ContentDrawer
                title={
                  <div className="flex justify-center flex-col items-center gap-2">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${universityDetailData.university_logo}`}
                      width={120}
                      height={45}
                      alt={universityDetailData?.university_name || "University Logo"}
                      className="mb-4 rounded-sm object-contain"
                      style={{ width: "auto", height: "auto" }}
                    />
                    <h3 className="text-lg font-bold">
                      {universityDetailData.university_name} Approvals
                    </h3>
                  </div>
                }
                trigger={
                  <span className="flex gap-4">
                    {universityDetailData?.approvals
                      ?.slice(0, 4)
                      .map((data, index) => (
                        <span key={index} className="w-[50px] h-[50px]">
                          <Image
                            className="rounded-sm object-contain"
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${data.logo}`}
                            width={50}
                            height={50}
                            alt={data?.title}
                            priority
                          />
                         
                        </span>
                      ))}
                  </span>
                }
                content={
                  <div className="p-4 max-w-4xl mx-auto">
                    <Timeline>
                      {universityDetailData?.approvals?.map((item) => (
                        <TimelineItem
                          key={item.id}
                          step={item.id}
                          className="group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-8"
                        >
                          <TimelineHeader>
                            <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
                            <TimelineTitle className="mt-1.5 text-lg font-bold uppercase">
                              {item?.title || "Approval Logo"}
                            </TimelineTitle>
                            <TimelineIndicator className="bg-primary/10 group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-10 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7">
                              <Image
                                width={40}
                                height={40}
                                src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.logo}`}
                                alt={item?.title || "Approval Logo"}
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
              <div className="flex gap-3 my-6">
                <PrimaryButton
                  title="Add to Compare"
                  icon={<FlipHorizontal2 className="w-5 h-5" />}
                  // iconPos="left"
                />
                <SecondaryButton
                  title="Apply to University"
                  icon={<ChevronRight className="w-5 h-5" />}
                  // iconPos="left"
                />
              </div>
              <p className="text-sm inline-flex flex-wrap gap-2 mb-4">
                <span className="font-bold">Still Confused? </span>Get a free
                consultation from our experts{" "}
              </p>
              <p className="flex gap-2 mb-3">
                <Link
                  href="/contact"
                  className="bg-secondary inline-flex text-nowrap flex-1 justify-center gap-2 text-white border-2 border-secondary items-center font-bold rounded-3xl text-[12px] sm:text-sm px-3 py-2"
                >
                  <span className="flex md:-space-x-[0.60rem]">
                    <Image
                      className="ring-background rounded-full ring-1"
                      src="/images/university/avatar/a1.jpg"
                      width={24}
                      height={24}
                      alt="Avatar 01"
                    />
                    <Image
                      className="ring-background rounded-full ring-1"
                      src="/images/university/avatar/a2.jpg"
                      width={24}
                      height={24}
                      alt="Avatar 02"
                    />
                    <Image
                      className="ring-background rounded-full ring-1 hidden sm:block"
                      src="/images/university/avatar/a3.jpg"
                      width={24}
                      height={24}
                      alt="Avatar 03"
                    />
                  </span>
                  Connect <ChevronRight className="w-5 h-5" />
                </Link>
                <Link
                  download={true}
                  target="_blank"
                  href={`${process.env.NEXT_PUBLIC_BASE_URL}${universityDetailData.university_brochure}`}
                  className="bg-white gap-2 inline-flex text-nowrap flex-1 justify-center text-secondary border-2 border-secondary items-center font-bold rounded-3xl text-[12px] sm:text-sm px-4 py-2"
                >
                  <span className="hidden sm:inline">Download</span> Brochure{" "}
                  <Download className="w-5 h-5" />
                </Link>
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 order-1 md:order-2 p-4">
            <Carousel
              setApi={setApi}
              className="w-full px-0 md:px-4"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-4">
                {universityDetailData?.banners?.map((content, index) => (
                  <CarouselItem
                    key={index}
                    className={("basis-1/1 sm:basis-1/2 relative", {})}
                  >
                    <Card
                      className="py-0 gap-4 overflow-hidden relative"
                      key={index}
                    >
                      <span className="absolute top-0 left-0 mt-4 ml-4">
                        <Image
                          alt={universityDetailData.university_name || "University Logo"}
                          className="bg-white rounded-sm mb-4 object-contain p-2 shadow-md"
                          src={`${process.env.NEXT_PUBLIC_BASE_URL}${universityDetailData?.university_logo}`}
                          width={120}
                          height={45}
                        />
                      </span>
                      <Image
                        width={400}
                        height={200}
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${content.banner_image}`}
                        alt={`${universityDetailData?.university_name} Banner` || "University Banner"}
                        className="h-full w-full object-cover object-center"
                      />
                      {content.video_id && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <VideoModal
                            title={content.video_title}
                            videoID={content.video_id}
                          />
                        </div>
                      )}
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {screenSize && screenSize.width > 991 && universityDetailData?.banners?.length > 1 && (
                <>
                  <CarouselPrevious />
                  <CarouselNext />
                </>
              )}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityBanner;
