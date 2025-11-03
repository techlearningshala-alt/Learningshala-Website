"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import ReelCard from "./ReelCard";

import MainHeading from "../../shared/MainHeading";
import VideoModal from "../../shared/modal/VideoModal";
import ReelCardSkeleton from "./ReelCardSkeleton";

const ReelSlider = ({ testimonialData, loading }) => {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  // console.log("current :", current);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const reelsData = [
    {
      id: 1,
      title: "Shri Lakshmi",
      views: 2300,
      image: "/images/homepage/reel1.webp",
      videoID: "38a7IpbR6Ig",
    },
    {
      id: 2,
      title: "Maisha Khatoon",
      views: 5000,
      image: "/images/homepage/reel2.webp",
      videoID: "38a7IpbR6Ig",
    },
    {
      id: 3,
      title: "Shivanshu Sharma",
      views: 1000,
      image: "/images/homepage/reel3.webp",
      videoID: "38a7IpbR6Ig",
    },
    {
      id: 4,
      title: "Riya",
      views: 1000,
      image: "/images/homepage/reel4.webp",
      videoID: "38a7IpbR6Ig",
    },
    {
      id: 5,
      title: "Shri Lakshmi",
      views: 1000,
      image: "/images/homepage/reel1.webp",
      videoID: "38a7IpbR6Ig",
    },
    {
      id: 6,
      title: "Reel 6",
      views: 1000,
      image: "/images/homepage/reel2.webp",
      videoID: "38a7IpbR6Ig",
    },
    {
      id: 7,
      title: "Reel 7",
      views: 1000,
      image: "/images/homepage/reel3.webp",
      videoID: "38a7IpbR6Ig",
    },
    {
      id: 8,
      title: "Reel 8",
      views: 1000,
      image: "/images/homepage/reel4.webp",
      videoID: "38a7IpbR6Ig",
    },
  ];

  return (
    <div className="container mx-auto mb-20">
      <MainHeading
        title="From Confusion to Clarity. Their Journey in Their Words. "
        className="text-center"
      />
      <Carousel
        setApi={setApi}
        className="mb-10 w-full"
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent className="-ml-4">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <CarouselItem
                  key={i}
                  className="basis-1/1 sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
                >
                  <ReelCardSkeleton />
                </CarouselItem>
              ))
            : testimonialData.map((item, index) => (
                <CarouselItem
                  key={index}
                  className={cn(
                    "basis-1/1 sm:basis-1/2 md:basis-1/3 xl:basis-1/4",
                    {}
                  )}
                >
                  <Card
                    className={cn(
                      "border-2 border-solid border-gray-200 p-1 shadow-none transition-transform duration-500",
                      {
                        "scale-[0.9] opacity-30": index !== current - 1,
                      }
                    )}
                  >
                    <CardContent className="relative p-0">
                      <ReelCard item={item} />
                      {index === current - 1 && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          {" "}
                          <VideoModal
                            videoID={item.video_id}
                            title={item.video_title}
                          />
                        </span>
                      )}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ReelSlider;
