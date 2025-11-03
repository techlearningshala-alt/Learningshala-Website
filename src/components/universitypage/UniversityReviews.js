import React from "react";
import UniversityContentHeading from "./UniversityContentHeading";
import { Star, ThumbsDown, ThumbsUp } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Progress } from "../ui/progress";
import ReviewCard from "./review/ReviewCard";
import PrimaryButton from "../custom/shared/PrimaryButton";
import ContentModal from "../custom/shared/modal/ContentModal";

const UniversityReviews = ({ id, title, props }) => {
  const { allReviews } = props;
  return (
    <div id={id} className="content_card">
      <UniversityContentHeading title={title} />
      <div className="grid grid-cols-12 gap-6 mb-6 hidden">
        <div className="col-span-12 lg:col-span-6 bg-[#f0ffff] p-6 rounded-2xl">
          <p className="flex items-center gap-2 font-bold text-green-600">
            <ThumbsUp className="w-4 h-4" /> Likes
          </p>
          <ul>
            <li>
              The hostel facility is good and the college provides the hostel
              and the college hostel are good and the food is also good in the
              hostel the security is strict.
            </li>
            <li>
              The best thing of this college is having good faculty and they way
              the explsin the things is to good
            </li>
            <li>
              There are almost every festival celebrated here with great
              happiness and people take parts in those.
            </li>
          </ul>
        </div>
        <div className="col-span-12 lg:col-span-6 bg-[#fff6eb] p-6 rounded-2xl">
          <p className="flex items-center gap-2 font-bold text-red-600">
            <ThumbsDown className="w-4 h-4" /> Dislikes
          </p>
          <ul>
            <li>
              I didnt like the food of the mess and canteen of few departments
            </li>
            <li>
              On sunday hostel meals are not good as compared to other days
            </li>
            <li>
              There are no such tuition fees in online distance learning courses
              the complete cost of course is around 2lac that is 45000 per sem
              there is no such scholarship there is no such campus employment in
              distance learning
            </li>
          </ul>
        </div>
      </div>
<div>  <p>
        <span className="font-bold text-md">Overall Rating</span>
      </p>
      <p className="mb-5">
        <span className="font-bold text-xl">
          {parseFloat(allReviews.reduce((acc, review) => acc + review.value, 0) / allReviews.length || 0).toFixed(1)}/5 (Total {allReviews.length} Reviews)
        </span>
      </p>
      <div className="flex items-center gap-2 mb-2 mt-5">
       <div className="w-[80px] flex items-center gap-2"> <Star className="text-primary w-4 h-4" />
        <span className="flex gap-2 items-center no-wrap w-[50px]">
          5 Star{" "}
        </span></div>
        
        <Progress value={allReviews.filter((review) => review.value === 5).length / allReviews.length * 100} />
       
      </div>
      <div className="flex items-center gap-2 mb-2">
       <div className="w-[80px] flex items-center gap-2"> <Star className="text-primary w-4 h-4" />
        <span className="flex gap-2 items-center no-wrap w-[50px]">
          4 Star{" "}
        </span></div>
        <Progress value={allReviews.filter((review) => review.value === 4).length / allReviews.length * 100} />
      </div>
      <div className="flex items-center gap-2 mb-2">
      <div className="w-[80px] flex items-center gap-2">  <Star className="text-primary w-4 h-4" />
        <span className="flex gap-2 items-center no-wrap w-[50px]">
          3 Star{" "}
        </span></div>
        <Progress value={allReviews.filter((review) => review.value === 3).length / allReviews.length * 100} />
      </div>
      <div className="flex items-center gap-2 mb-2">
       <div className="w-[80px] flex items-center gap-2"> <Star className="text-primary w-4 h-4" />
        <span className="flex gap-2 items-center no-wrap w-[50px]">
          2 Star{" "}
        </span></div>
        <Progress value={allReviews.filter((review) => review.value === 2).length / allReviews.length * 100} />
      </div>
      <div className="flex items-center gap-2 mb-10">
       <div className="w-[80px] flex items-center gap-2"> <Star className="text-primary w-4 h-4" />
        <span className="flex gap-2 items-center no-wrap w-[50px]">
          1 Star{" "}
        </span></div>
        <Progress value={allReviews.filter((review) => review.value === 1).length / allReviews.length * 100} />
      </div></div>


      {allReviews.slice(0,3).map((data, index) => (
        <div key={index}>
          <ReviewCard
            name={data.name}
            value={data.value}
            content={data.reviewContent}
          />
          <hr className="my-5" />
        </div>
      ))}

      <div>
        <ContentModal
          ContentClassName="sm:max-w-3xl"
          trigger={<PrimaryButton title="All Reviews" />}
          triggerClassName={"w-full"}
          content={<>
          <Image className="object-contain mb-3" src="/images/university_list/1_amity-online-university-logo.jpg" width={100} height={40} alt="amity university" />
          <h3 className="font-bold">Amity University Online</h3>
          <div>  <p>
        <span className="font-bold text-md">Overall Rating</span>
      </p>
      <p className="mb-5">
        <span className="font-bold text-lg">
          {parseFloat(allReviews.reduce((acc, review) => acc + review.value, 0) / allReviews.length || 0).toFixed(1)}/5  (Total {allReviews.length} Reviews)
        </span>
      </p>
      <div className="flex items-center gap-2 mb-2">
       <div className="w-[80px] flex items-center gap-2"> <Star className="text-primary w-4 h-4" />
        <span className="flex gap-2 items-center no-wrap w-[50px]">
          5 Star{" "}
        </span></div>
        <Progress value={allReviews.filter((review) => review.value === 5).length / allReviews.length * 100} />
      </div>
      <div className="flex items-center gap-2 mb-2">
       <div className="w-[80px] flex items-center gap-2"> <Star className="text-primary w-4 h-4" />
        <span className="flex gap-2 items-center no-wrap w-[50px]">
          4 Star{" "}
        </span></div>
        <Progress value={allReviews.filter((review) => review.value === 4).length / allReviews.length * 100} />
      </div>
      <div className="flex items-center gap-2 mb-2">
      <div className="w-[80px] flex items-center gap-2">  <Star className="text-primary w-4 h-4" />
        <span className="flex gap-2 items-center no-wrap w-[50px]">
          3 Star{" "}
        </span></div>
        <Progress value={allReviews.filter((review) => review.value === 3).length / allReviews.length * 100} />
      </div>
      <div className="flex items-center gap-2 mb-2">
      <div className="w-[80px] flex items-center gap-2">  <Star className="text-primary w-4 h-4" />
        <span className="flex gap-2 items-center no-wrap w-[50px]">
          2 Star{" "}
        </span></div>
        <Progress value={allReviews.filter((review) => review.value === 2).length / allReviews.length * 100} />
      </div>
      <div className="flex items-center gap-2 mb-10">
       <div className="w-[80px] flex items-center gap-2"> <Star className="text-primary w-4 h-4" />
        <span className="flex gap-2 items-center no-wrap w-[50px]">
          1 Star{" "}
        </span></div>
        <Progress value={allReviews.filter((review) => review.value === 1).length / allReviews.length * 100} />
      </div></div>
          {allReviews.map((data, index) => (
            <div key={index}>
              <ReviewCard
                name={data.name}
                value={data.value}
                content={data.reviewContent}
              />
              <hr className="my-5" />
            </div>
          ))}</>}
        />
      </div>
    </div>
  );
};

export default UniversityReviews;
