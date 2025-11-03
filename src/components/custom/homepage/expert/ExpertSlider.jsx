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
import MainHeading from "../../shared/MainHeading";
import ExpertCard from "./ExpertCard";
import PrimaryButton from "../../shared/PrimaryButton";
import ExpertCardSkeleton from "./ExpertCardSkeleton";

const ExpertSlider = ({mentorData, loading}) => {
 
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
      image: "/images/homepage/experts/m1.webp",
      topRated: "Top rated",
    },
    {
      id: 2,
      title: "Maisha Khatoon",
      views: 5000,
      image: "/images/homepage/experts/m2.webp",
      topRated: "Popular",
    },
    {
      id: 3,
      title: "Shivanshu Sharma",
      views: 1000,
      image: "/images/homepage/experts/m3.webp",
      topRated: "",
    },
    {
      id: 4,
      title: "Riya",
      views: 1000,
      image: "/images/homepage/experts/m4.webp",
      topRated: "",
    },
    {
      id: 5,
      title: "Shri Lakshmi",
      views: 1000,
      image: "/images/homepage/experts/m1.webp",
      topRated: "",
    },
    {
      id: 6,
      title: "Reel 6",
      views: 1000,
      image: "/images/homepage/experts/m2.webp",
      topRated: "",
    },
    {
      id: 7,
      title: "Reel 7",
      views: 1000,
      image: "/images/homepage/experts/m3.webp",
      topRated: "",
    },
    {
      id: 8,
      title: "Reel 8",
      views: 1000,
      image: "/images/homepage/experts/m4.webp",
      topRated: "",
    },
  ];

  return (
    <div className="sec_mb">
      <div className="container mx-auto mb-20">
        <MainHeading title="Guidance From Those" className="!mb-1" />
        <MainHeading title={<>Who've Been There,
          <span className="text-orange-400">Done That.</span></>} />
        <Carousel setApi={setApi} className="mb-10 w-full" opts={{
          align: "start",
          loop: true,
        }}>
        
          {/* <CarouselContent className="-ml-4">
            {mentorData.map((item, index) => (
              <CarouselItem key={index} className="basis-1/1 sm:basis-1/2 md:basis-1/3 xl:basis-1/4">
                <Card
                  className={cn(
                    "border-1 p-2 shadow-none transition-transform duration-500 bg-white",

                  )}
                >
                  <CardContent className="relative p-0">
                    <ExpertCard item={item} />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent> */}
          <CarouselContent className="-ml-4">
  {loading
    ? Array.from({ length: 6 }).map((_, i) => (
        <CarouselItem
          key={i}
          className="basis-1/1 sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
        >
          <ExpertCardSkeleton />
        </CarouselItem>
      ))
    : mentorData.map((item, index) => (
        <CarouselItem
          key={index}
          className="basis-1/1 sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
        >
          <Card className="border-1 p-2 shadow-none bg-white">
            <CardContent className="relative p-0">
              <ExpertCard item={item} />
            </CardContent>
          </Card>
        </CarouselItem>
      ))}
</CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* <div className="text-center"> <PrimaryButton className="max-w-max" title="Explore Mentors 
"  /></div> */}

      </div>
    </div>

  );
};

export default ExpertSlider;
