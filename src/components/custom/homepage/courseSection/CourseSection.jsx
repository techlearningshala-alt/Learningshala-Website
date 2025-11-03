"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PrimaryButton from "../../shared/PrimaryButton";
import CourseCard from "./CourseCard";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, CircleChevronRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"


const CourseSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const tabs = [
    {
      heading: "PG Courses",
      value: "PG Courses",
      subHeading: "After Graduation",
      courseData: [
        {
          id: 1,
          title: "Online MBA (Global)",
          description: "Online MBA",
          image: "/images/homepage/courses/icon1.png",
          link: "/courses/online-mba",
          compare: "37",
          tag: "Trending",
        },
        {
          id: 2,
          title: "Online BBA",
          description: "Online BBA",
          image: "/images/homepage/courses/icon2.png",
          link: "/courses/online-mba", 
          compare: "37",
          tag: "100% ROI",
        },
        {
          id: 3,
          title: "Online BBA",
          description: "Online BBA",
          image: "/images/homepage/courses/icon3.png",
          link: "/online-mba",
          compare: "37",
          tag: "Global",
        },
        {
          id: 4,
          title: "Online BBA",
          description: "Online BBA",
          image: "/images/homepage/courses/icon1.png",
          link: "/online-mba",
          compare: "37",
          tag: "2 Years",
        },
        {
          id: 5,
          title: "Online BBA",
          description: "Online BBA",
          image: "/images/homepage/courses/icon1.png",
          link: "/online-mba",
          compare: "37",
          tag: "3 Years",
        },
        {
          id: 6,
          title: "Online BBA",
          description: "Online BBA",
          image: "/images/homepage/courses/icon1.png",
          link: "/online-mba",
          compare: "37",
          tag: "4 Years",
        },

      ],
    },
    {
      heading: "Executive Education",
      value: "Executive Education",
      subHeading: "After Graduation",
      courseData: [
        {
          id: 1,
          title: "Executive MBA",
          description: "Online MBA",
          image: "/images/homepage/courses/icon1.png",
          link: "/online-mba",
          compare: "37",
          tag: "1 Year",
        },
        {
          id: 2,
          title: "Online BBA",
          description: "Online BBA",
          image: "/images/homepage/courses/icon1.png",
          link: "/online-mba",
          compare: "37",
          tag: "2 Years",
        },
      ],
    },
    {
      heading: "Doctorate/PhD",
      value: "Doctorate/PhD",
      subHeading: "After Graduation",
      courseData: [
        {
          id: 1,
          title: "Online MBA",
          description: "Online MBA",
          image: "/images/homepage/courses/icon1.png",
          link: "/online-mba",
          compare: "37",
          tag: "3 Years",
        },
        {
          id: 2,
          title: "Online BBA",
          description: "Online BBA",
          image: "/images/homepage/courses/icon1.png",
          link: "/online-mba",
          compare: "37",
          tag: "4 Years",
        },
      ],
    },
    {
      heading: "UG Courses",
      value: "UG Courses",
      subHeading: "After Graduation",
      courseData: [
        {
          id: 1,
          title: "Online MBA",
          description: "Online MBA",
          image: "/images/homepage/courses/icon1.png",
          link: "/online-mba",
          compare: "37",
          tag: "5 Years",
        },
        {
          id: 2,
          title: "Online BBA",
          description: "Online BBA",
          image: "/images/homepage/courses/icon1.png",
          link: "/online-mba",
          compare: "37",
          tag: "6 Years",
        },
      ],
    },
  ];
  return (
    <section className="sec_mb">
      <div className="container mx-auto">

        <div className="rounded-2xl pt-10 pb-4 px-10 relative" style={{ border: "1px solid#ccc" }}>
          <div className="grid grid-cols-12 mb-4" >
            <div className="col-span-3">
              <p className="font-bold text-xl">PG Courses</p>
            </div>
            <div className="col-span-9">
              <div className="grid grid-cols-6 gap-6">
                <Link href="/courses/online-mba">
                  <Card className="flex-1 relative bg-white py-0 gap-0 mb-3 overflow-hidden" style={{ border: "1px solid#ccc" }}>
                    <CardHeader className="py-6 m-0 gap-0 flex items-center justify-center relative">

                      <Image
                        src={"/images/homepage/courses/icon1.png"}
                        alt="Online MBA"
                        width={50}
                        height={50}
                      />
                    </CardHeader>
                    <CardContent className="px-4 m-0">


                    </CardContent>
                    <CardFooter className="py-0 justify-between px-4">

                    </CardFooter>
                  </Card>
                  <p className=" font-bold text-sm mt-2 line-clamp-2 mb-3 text-center">Online MBA</p>
                </Link>
                <Link href="/courses/online-bba">
                  <Card className="flex-1 relative bg-white py-0 gap-0 mb-3 overflow-hidden" style={{ border: "1px solid#ccc" }}>
                    <CardHeader className="py-6 m-0 gap-0 flex items-center justify-center relative">

                      <Image
                        src={"/images/homepage/courses/icon2.png"}
                        alt="Online MBA"
                        width={50}
                        height={50}
                      />
                    </CardHeader>
                    <CardContent className="px-4 m-0">


                    </CardContent>
                    <CardFooter className="py-0 justify-between px-4">

                    </CardFooter>
                  </Card>
                  <p className=" font-bold text-sm mt-2 line-clamp-2 mb-3 text-center">Online MBA</p>
                </Link>
                <Link href="/courses/online-bba">
                  <Card className="flex-1 relative bg-white py-0 gap-0 mb-3 overflow-hidden" style={{ border: "1px solid#ccc" }}>
                    <CardHeader className="py-6 m-0 gap-0 flex items-center justify-center relative">

                      <Image
                        src={"/images/homepage/courses/icon3.png"}
                        alt="Online MBA"
                        width={50}
                        height={50}
                      />
                    </CardHeader>
                    <CardContent className="px-4 m-0">


                    </CardContent>
                    <CardFooter className="py-0 justify-between px-4">

                    </CardFooter>
                  </Card>
                  <p className=" font-bold text-sm mt-2 line-clamp-2 mb-3 text-center">Online MBA</p>
                </Link>
                <Link href="/courses/online-bba">
                  <Card className="flex-1 relative bg-white py-0 gap-0 mb-3 overflow-hidden" style={{ border: "1px solid#ccc" }}>
                    <CardHeader className="py-6 m-0 gap-0 flex items-center justify-center relative">

                      <Image
                        src={"/images/homepage/courses/icon1.png"}
                        alt="Online MBA"
                        width={50}
                        height={50}
                      />
                    </CardHeader>
                    <CardContent className="px-4 m-0">


                    </CardContent>
                    <CardFooter className="py-0 justify-between px-4">

                    </CardFooter>
                  </Card>
                  <p className=" font-bold text-sm mt-2 line-clamp-2 mb-3 text-center">Online MBA</p>
                </Link>
                <Link href="/">
                  <Card className="flex-1 relative bg-white py-0 gap-0 mb-3 overflow-hidden" style={{ border: "1px solid#ccc" }}>
                    <CardHeader className="py-6 m-0 gap-0 flex items-center justify-center relative">

                      <Image
                        src={"/images/homepage/courses/icon2.png"}
                        alt="Online MBA"
                        width={50}
                        height={50}
                      />
                    </CardHeader>
                    <CardContent className="px-4 m-0">


                    </CardContent>
                    <CardFooter className="py-0 justify-between px-4">

                    </CardFooter>
                  </Card>
                  <p className=" font-bold text-sm mt-2 line-clamp-2 mb-3 text-center">Online MBA</p>
                </Link>
                <Link href="/" onClick={() => setIsOpen(true)}>
                  <Card className="flex-1 bg-[#faf9f7] relative py-0 gap-0 mb-3 overflow-hidden" style={{ border: "1px solid#ccc" }}>
                    <CardHeader className="py-6 m-0 gap-0 flex items-center justify-center relative">

                      <CircleChevronRight className="w-12 h-12 text-primary" />
                    </CardHeader>
                    <CardContent className="px-4 m-0">


                    </CardContent>
                    <CardFooter className="py-0 justify-between px-4">

                    </CardFooter>
                  </Card>

                  <p className=" font-bold text-sm mt-2 line-clamp-2 mb-3 text-center">View all</p>
                </Link>
              </div>
            </div>
          </div>
          <hr className="my-6" />
          <div className="grid grid-cols-12" >
            <div className="col-span-3">
              <p className="font-bold text-xl">UG Courses</p>
            </div>
            <div className="col-span-9">
              <div className="grid grid-cols-6 gap-6">
                <Link href="/">
                  <Card className="flex-1 relative bg-white py-0 gap-0 mb-3 overflow-hidden" style={{ border: "1px solid#ccc" }}>
                    <CardHeader className="py-6 m-0 gap-0 flex items-center justify-center relative">

                      <Image
                        src={"/images/homepage/courses/course1.webp"}
                        alt="Online MBA"
                        width={50}
                        height={50}
                      />
                    </CardHeader>
                    <CardContent className="px-4 m-0">


                    </CardContent>
                    <CardFooter className="py-0 justify-between px-4">

                    </CardFooter>
                  </Card>
                  <p className=" font-bold text-sm mt-2 line-clamp-2 mb-3 text-center">Online MBA</p>
                </Link>
                <Link href="/">
                  <Card className="flex-1 relative bg-white py-0 gap-0 mb-3 overflow-hidden" style={{ border: "1px solid#ccc" }}>
                    <CardHeader className="py-6 m-0 gap-0 flex items-center justify-center relative">

                      <Image
                        src={"/images/homepage/courses/course2.webp"}
                        alt="Online MBA"
                        width={50}
                        height={50}
                      />
                    </CardHeader>
                    <CardContent className="px-4 m-0">


                    </CardContent>
                    <CardFooter className="py-0 justify-between px-4">

                    </CardFooter>
                  </Card>
                  <p className=" font-bold text-sm mt-2 line-clamp-2 mb-3 text-center">Online MBA</p>
                </Link>
                <Link href="/">
                  <Card className="flex-1 relative bg-white py-0 gap-0 mb-3 overflow-hidden" style={{ border: "1px solid#ccc" }}>
                    <CardHeader className="py-6 m-0 gap-0 flex items-center justify-center relative">

                      <Image
                        src={"/images/homepage/courses/course3.webp"}
                        alt="Online MBA"
                        width={50}
                        height={50}
                      />
                    </CardHeader>
                    <CardContent className="px-4 m-0">


                    </CardContent>
                    <CardFooter className="py-0 justify-between px-4">

                    </CardFooter>
                  </Card>
                  <p className=" font-bold text-sm mt-2 line-clamp-2 mb-3 text-center">Online MBA</p>
                </Link>
                <Link href="/">
                  <Card className="flex-1 relative bg-white py-0 gap-0 mb-3 overflow-hidden" style={{ border: "1px solid#ccc" }}>
                    <CardHeader className="py-6 m-0 gap-0 flex items-center justify-center relative">

                      <Image
                        src={"/images/homepage/courses/course4.webp"}
                        alt="Online MBA"
                        width={50}
                        height={50}
                      />
                    </CardHeader>
                    <CardContent className="px-4 m-0">


                    </CardContent>
                    <CardFooter className="py-0 justify-between px-4">

                    </CardFooter>
                  </Card>
                  <p className=" font-bold text-sm mt-2 line-clamp-2 mb-3 text-center">Online MBA</p>
                </Link>
                <Link href="/">
                  <Card className="flex-1 relative bg-white py-0 gap-0 mb-3 overflow-hidden" style={{ border: "1px solid#ccc" }}>
                    <CardHeader className="py-6 m-0 gap-0 flex items-center justify-center relative">

                      <Image
                          src={"/images/homepage/courses/course5.webp"}
                        alt="Online MBA"
                        width={50}
                        height={50}
                      />
                    </CardHeader>
                    <CardContent className="px-4 m-0">


                    </CardContent>
                    <CardFooter className="py-0 justify-between px-4">

                    </CardFooter>
                  </Card>
                  <p className=" font-bold text-sm mt-2 line-clamp-2 mb-3 text-center">Online MBA</p>
                </Link>
                <Link href="/">
                  <Card className="flex-1 bg-[#faf9f7] relative py-0 gap-0 mb-3 overflow-hidden" style={{ border: "1px solid#ccc" }}>
                    <CardHeader className="py-6 m-0 gap-0 flex items-center justify-center relative">

                      <CircleChevronRight className="w-12 h-12 text-primary" />
                    </CardHeader>
                    <CardContent className="px-4 m-0">


                    </CardContent>
                    <CardFooter className="py-0 justify-between px-4">

                    </CardFooter>
                  </Card>
                  <p className=" font-bold text-sm mt-2 line-clamp-2 mb-3 text-center">View all</p>
                </Link>
              </div>
            </div>
          </div>
          {/* <hr className="my-6" />

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -mb-7 cursor-pointer border-6 border-white"><PrimaryButton title="View All" /></div> */}

        </div>
      </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>All PG Courses</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default CourseSection;
