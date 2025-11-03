import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  ChevronRight,
  ClockIcon,
  Dot,
  Flame,
  Grip,
  Megaphone,
  ScrollText,
  UserRound,
} from "lucide-react";
import MainHeading from "@/components/custom/shared/MainHeading";
import Link from "next/link";
import ContentModal from "@/components/custom/shared/modal/ContentModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ContentDrawer from "@/components/custom/shared/drawer/ContentDrawer";
import SecondaryButton from "@/components/custom/shared/SecondaryButton";
import PrimaryButton from "@/components/custom/shared/PrimaryButton";
import BlogMobileStickyFooter from "@/components/blog/BlogMobileStickyFooter";

const blog = ({screenSize}) => {
  const allArticles = [
    {
      img: "/images/university/amity.jpg",
      title:
        "On the other hand, we denounce with righteous indignation and dislike",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      link: "",
    },
    {
      img: "/images/university/amity1.webp",
      title:
        "On the other hand, we denounce with righteous indignation and dislike",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      link: "",
    },
    {
      img: "/images/university/amity.jpg",
      title:
        "On the other hand, we denounce with righteous indignation and dislike",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      link: "",
    },
    {
      img: "/images/university/amity1.webp",
      title:
        "On the other hand, we denounce with righteous indignation and dislike",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      link: "",
    },
    {
      img: "/images/university/amity.jpg",
      title:
        "On the other hand, we denounce with righteous indignation and dislike",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      link: "",
    },
    {
      img: "/images/university/amity1.webp",
      title:
        "On the other hand, we denounce with righteous indignation and dislike",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      link: "",
    },
  ];

  const allCategories = [
    {
      name: "Technology",
      count: 23,
    },
    {
      name: "Business",
      count: 39,
    },
    {
      name: "Health",
      count: 45,
    },
    {
      name: "Education",
      count: 62,
    },
  ];

  return (
   <> <div className="container">
   <div className="bg-[#faf9f7] py-8 px-6 rounded-2xl mb-6 flex flex-col items-center justify-center">
     {" "}
     <MainHeading
       className="!mb-4"
       title={
         <>
           LearningShala <span className="text-primary">Blogs</span>
         </>
       }
     />
     <p className="text-center">
       Explore insights, tips, and articles written by experts in a range of
       professional domains.
     </p>
   </div>
   <div className="grid grid-cols-12 gap-6">
     <div className="col-span-12 lg:col-span-8">
       <div className="grid grid-cols-1 gap-6 mb-10">
         {allArticles.map((data, index) => (
           <Card
             className="grid grid-cols-12 gap-4 overflow-hidden px-4 py-4 sm:py-8"
             key={index}
           >
             <div className="col-span-12 sm:col-span-4">
               <Image
                 width={400}
                 height={200}
                 src={data.img}
                 alt=""
                 className="h-full w-full object-cover object-center rounded-2xl"
               />
             </div>
             <div className="col-span-12 sm:col-span-8 px-0 md:px-6">
               <CardHeader className="p-0">
                 <p className="flex items-center gap-3 mb-2">
                   <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none font-semibold">
                     Technology
                   </Badge>

                   <span className="text-[12px] text-muted-foreground items-center gap-2 hidden md:flex">
                     <ClockIcon className="h-4 w-4" />8 min read
                   </span>
                   <span className="text-[12px] text-muted-foreground flex items-center gap-2">
                     <Calendar className="h-4 w-4" /> Nov 20, 2024
                   </span>
                 </p>
                 <h3 className="text-lg font-bold md:text-xl line-clamp-2 mb-3">
                   <a href={"/blog/blog1"}>{data.title}</a>
                 </h3>
               </CardHeader>
               <CardContent className="mb-4 p-0">
                 <p className="text-muted-foreground line-clamp-3 text-sm">
                   {data.desc}
                 </p>
               </CardContent>
               <CardFooter className="flex justify-between items-center p-0">
                 <Link
                   className="flex items-center text-primary font-bold text-sm"
                   href={"/blog/blog1"}
                 >
                   {" "}
                   Continue Reading
                   <ArrowRight className="ml-2 size-4" />
                 </Link>
               </CardFooter>
             </div>
           </Card>
         ))}
       </div>
     </div>
     <div className="col-span-12 lg:col-span-4">
       <div className="card_content mb-6">
         <Card className="p-4">
           <p>
             <span className="bg-gray-100 px-4 py-2 rounded-sm text-[12px] font-semibold inline-flex gap-1 items-center">
               <Flame className="text-primary" /> Trending Post
             </span>
           </p>
           <ul>
             <li>
               <p className="flex items-center gap-1 mb-2">
                 <span className="text-[12px] font-semibold bg-gray-100 capitalize px-3 py-1 rounded-2xl">
                   Data Science
                 </span>
                 <span className="text-[12px] text-muted-foreground flex items-center">
                   <Dot />8 min read
                 </span>
               </p>
               <Link
                 href={"/"}
                 target="_blank"
                 className="text-sm transition-all font-bold text-foreground line-clamp-2 mb-2 hover:text-primary"
               >
                 On the other hand, we denounce with righteous indignation
                 and dislike denounce with righteous indignation
               </Link>
               <p>
                 <span className="text-[12px] flex items-center font-semibold">
                   Posted by <Dot /> chandan Singh
                 </span>
               </p>
             </li>
             <hr className="my-4" />
             <ContentModal
               ContentClassName="md:max-w-3xl"
               trigger={
                 <li className="bg-[#7B61C9] p-4 rounded-2xl text-left">
                   <p className="text-white text-sm mb-2 flex items-center gap-1 text-[12px] font-semibold">
                     <Megaphone className="w-4 h-4" />
                     Announcement <span className="text-yellow-400 font-bold"> - 24 October 2025</span>
                   </p>
                   <p className="text-white text-sm font-semibold mb-4">
                     Stay tuned for more updates on our latest courses and
                     events.
                   </p>
                   <p className="text-yellow-400 text-sm font-extrabold flex items-center gap-1">
                     Read More <ChevronRight className="w-4 h-4" />
                   </p>
                 </li>
               }
               content={
                 <>
                   <p className="text-sm mb-2 flex items-center gap-1 text-[12px] font-semibold text-primary">
                     <Megaphone className="w-4 h-4" />
                     Announcement - 24 October 2025
                   </p>
                   <h3 className="text-lg font-bold md:text-xl line-clamp-2 mb-3">
                     UGC approves 101 universities for online & distance
                     learning in 2025: Full list here
                   </h3>
                   <Image
                     width={400}
                     height={200}
                     src="/images/blog/news-img.jpeg"
                     alt=""
                     className="object-cover object-center rounded-2xl my-3 w-full"
                   />
                   <p className="mb-3">
                     In a push towards digital education, the commission has
                     also authorised 113 universities to conduct online
                     courses. Additionally, 13 institutions have received
                     clearance to launch specialised online learning (OL)
                     programmes. The Commission has announced October 15 as
                     the final date for student admissions into recognised
                     ODL and online programmes.
                   </p>
                   <h3 className="text-lg font-bold md:text-xl line-clamp-2 mb-3">
                     UGC calls for eligible HEIs for ODL programmes
                   </h3>
                   <p>
                     The development follows the UGC’s call for applications
                     from eligible Higher Educational Institutions (HEIs)
                     under the UGC (Open and Distance Learning Programmes and
                     Online Programmes) Regulations, 2020, along with its
                     subsequent amendments. Institutions that successfully
                     meet the regulatory and quality benchmarks have been
                     approved to offer ODL and online programmes.
                   </p>
                 </>
               }
             />
             <hr className="my-4" />
             <li>
               <p className="flex items-center gap-1 mb-2">
                 <span className="text-[12px] font-semibold bg-gray-100 capitalize px-3 py-1 rounded-2xl">
                   Data Science
                 </span>
                 <span className="text-[12px] text-muted-foreground flex items-center">
                   <Dot />8 min read
                 </span>
               </p>
               <Link
                 href={"/"}
                 target="_blank"
                 className="text-sm transition-all font-bold text-foreground line-clamp-2 mb-2 hover:text-primary"
               >
                 On the other hand, we denounce with righteous indignation
                 and dislike denounce with righteous indignation
               </Link>
               <p>
                 <span className="text-[12px] flex items-center font-semibold">
                   Posted by <Dot /> chandan Singh
                 </span>
               </p>
             </li>
             <hr className="my-4" />
             <li>
               <p className="flex items-center gap-1 mb-2">
                 <span className="text-[12px] font-semibold bg-gray-100 capitalize px-3 py-1 rounded-2xl">
                   Data Science
                 </span>
                 <span className="text-[12px] text-muted-foreground flex items-center">
                   <Dot />8 min read
                 </span>
               </p>
               <Link
                 href={"/"}
                 target="_blank"
                 className="text-sm transition-all font-bold text-foreground line-clamp-2 mb-2 hover:text-primary"
               >
                 On the other hand, we denounce with righteous indignation
                 and dislike denounce with righteous indignation
               </Link>
               <p>
                 <span className="text-[12px] flex items-center font-semibold">
                   Posted by <Dot /> chandan Singh
                 </span>
               </p>
             </li>
           </ul>
         </Card>
       </div>
       {screenSize && screenSize.width > 768 && (
       <div className="card_content">
         <Card className="p-4">
           <p>
             <span className="bg-gray-100 px-4 py-2 rounded-sm text-[12px] font-semibold inline-flex gap-1 items-center">
               <ScrollText className="text-primary" /> Blog Categories
             </span>
           </p>
           <ul>
             {allCategories.map((category) => (
               <li
                 key={category.name}
                 className="bg-gray-100 mb-3 py-3 px-4 rounded-2xl"
               >
                 <Link
                   href={"/"}
                   target="_blank"
                   className="text-sm transition-all font-bold text-foreground  hover:text-primary flex items-center gap-4 justify-between"
                 >
                   <span className="line-clamp-1"> {category.name}</span>
                   <Badge className="px-1.5 rounded-full bg-foreground/7 text-foreground">
                     {category.count}
                   </Badge>
                 </Link>
               </li>
             ))}
           </ul>
         </Card>
       </div>
       )}
     </div>
   </div>
 </div>
 
 <BlogMobileStickyFooter screenSize={screenSize} allCategories={allCategories} />
</>
  );
};

export default blog;
