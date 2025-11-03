"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CourseSectionMobile = ({ screenSize }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState(null);
    const scrollRef = useRef(null);

    const tabs = [
        {
            heading: "PG Courses",
            value: "PG Courses",
            subHeading: "After Graduation",
            courseData: [
                { id: 1, title: "Online MBA (Global)", image: "/images/homepage/courses/icon1.png", tag: "Trending" },
                { id: 2, title: "Online BBA", image: "/images/homepage/courses/icon2.png", tag: "100% ROI" },
                { id: 3, title: "Online BCA", image: "/images/homepage/courses/icon3.png", tag: "Global" },
                { id: 4, title: "Online MCA", image: "/images/homepage/courses/icon1.png", tag: "2 Years" },
                { id: 5, title: "Online M.Com", image: "/images/homepage/courses/icon2.png", tag: "3 Years" },
                { id: 6, title: "Online MA", image: "/images/homepage/courses/icon3.png", tag: "4 Years" },
                { id: 7, title: "Online M.Sc", image: "/images/homepage/courses/icon1.png", tag: "5 Years" },
                { id: 8, title: "Online M.Sc (AI)", image: "/images/homepage/courses/icon2.png", tag: "6 Years" },
                { id: 9, title: "Online M.Sc (Data Science)", image: "/images/homepage/courses/icon3.png", tag: "7 Years" },
                { id: 10, title: "Online M.Sc (Business Analytics)", image: "/images/homepage/courses/icon1.png", tag: "8 Years" },
                { id: 11, title: "Online M.Sc (Business Management)", image: "/images/homepage/courses/icon2.png", tag: "9 Years" },
                { id: 12, title: "Online M.Sc (Marketing)", image: "/images/homepage/courses/icon3.png", tag: "10 Years" },
                { id: 13, title: "Online M.Sc (Finance)", image: "/images/homepage/courses/icon1.png", tag: "11 Years" },
                { id: 14, title: "Online M.Sc (Human Resources)", image: "/images/homepage/courses/icon2.png", tag: "12 Years" },
                { id: 15, title: "Online M.Sc (Data Analytics)", image: "/images/homepage/courses/icon3.png", tag: "13 Years" },
                { id: 16, title: "Online M.Sc (Business Intelligence)", image: "/images/homepage/courses/icon1.png", tag: "14 Years" },
                { id: 17, title: "Online M.Sc (Data Analytics)", image: "/images/homepage/courses/icon2.png", tag: "15 Years" },
                { id: 18, title: "Online M.Sc (Marketing)", image: "/images/homepage/courses/icon3.png", tag: "16 Years" },
                { id: 19, title: "Online M.Sc (Finance)", image: "/images/homepage/courses/icon1.png", tag: "17 Years" },
                { id: 20, title: "Online M.Sc (Human Resources)", image: "/images/homepage/courses/icon2.png", tag: "18 Years" },
            ],
        },
        {
            heading: "Executive Education",
            value: "Executive Education",
            subHeading: "After Graduation",
            courseData: [
                { id: 1, title: "Executive MBA", image: "/images/homepage/courses/icon1.png", tag: "1 Year" },
                { id: 2, title: "Business Analytics", image: "/images/homepage/courses/icon2.png", tag: "6 Months" },
                { id: 3, title: "Business Management", image: "/images/homepage/courses/icon3.png", tag: "1 Year" },
                { id: 4, title: "Marketing", image: "/images/homepage/courses/icon1.png", tag: "1 Year" },
                { id: 5, title: "Finance", image: "/images/homepage/courses/icon2.png", tag: "1 Year" },
                { id: 6, title: "Human Resources", image: "/images/homepage/courses/icon3.png", tag: "1 Year" },
                { id: 7, title: "Data Science", image: "/images/homepage/courses/icon1.png", tag: "3 Years" },
                { id: 8, title: "Business Intelligence", image: "/images/homepage/courses/icon2.png", tag: "3 Years" },
                { id: 9, title: "Data Analytics", image: "/images/homepage/courses/icon3.png", tag: "3 Years" },

            ],
        },
        {
            heading: "Doctorate/PhD",
            value: "Doctorate/PhD",
            subHeading: "After Graduation",
            courseData: [
                { id: 1, title: "PhD in Management", image: "/images/homepage/courses/icon1.png", tag: "3 Years" },
                { id: 2, title: "PhD in AI", image: "/images/homepage/courses/icon2.png", tag: "4 Years" },
            ],
        },
        {
            heading: "UG Courses",
            value: "UG Courses",
            subHeading: "After 12th",
            courseData: [
                { id: 1, title: "Online BBA", image: "/images/homepage/courses/icon1.png", tag: "3 Years" },
                { id: 2, title: "Online BCA", image: "/images/homepage/courses/icon2.png", tag: "3 Years" },
            ],
        },
    ];

    const handleOpenDrawer = (tab) => {
        setSelectedTab(tab);
        setIsOpen(true);
    };

    const scrollTabs = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 200;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "auto",
            });
        }
    };

    return (
        <section className="sec_mb">
            <div className="container mx-auto">
                <div className="relative">
                    <Tabs defaultValue={tabs[0].value} className="w-full">
                        {/* Left/Right arrows */}
                        <button
                            onClick={() => scrollTabs("left")}
                            className="absolute -left-3 top-0 bg-white shadow-md rounded-full p-2 z-10"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>


                        {/* Scrollable tab triggers */}
                        <div ref={scrollRef} className="overflow-x-auto no-scrollbar">
                            <TabsList className="flex min-w-max gap-2 px-6">
                                {tabs.map((tab) => (
                                    <TabsTrigger key={tab.value} value={tab.value}>
                                        {tab.heading}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>

                        <button
                            onClick={() => scrollTabs("right")}
                            className="absolute -right-3 top-0 bg-white shadow-md rounded-full p-2 z-10"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>

                        {/* Dynamic Tab Content */}
                        {tabs.map((tab) => {
                            const visibleCourses = tab.courseData.slice(0, 6);
                            const hiddenCourses = tab.courseData.slice(6);
                            return (
                                <TabsContent key={tab.value} value={tab.value} className="mt-0 px-1 pb-2">
                                    <div className="grid grid-cols-3 gap-2">
                                        {visibleCourses.map((course) => (
                                            <Card key={course.id} className="p-2 rounded-xl min-h-[110px] flex flex-col items-center justify-center">
                                                <CardContent className="flex flex-col items-center justify-center text-center gap-2 px-1">
                                                    <Image src={course.image} alt={course.title} width={35} height={35} />
                                                    <h4 className="font-medium text-[12px] line-clamp-2">{course.title}</h4>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>

                                    {hiddenCourses.length > 0 && (
                                        <div className="flex justify-center">
                                            <button
                                                onClick={() => handleOpenDrawer(tab)}
                                                className="mt-4 flex items-center text-sm font-medium bg-primary font-semibold px-4 py-2 rounded-full"
                                            >
                                                View More <ChevronDown className="ml-1 h-4 w-4" />
                                            </button>
                                        </div>
                                    )}
                                </TabsContent>
                            );
                        })}
                    </Tabs>
                </div>
            </div>


            {/* Drawer for More Courses */}
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
                <DrawerContent className="max-w-full p-1 h-auto">
                    <DrawerHeader>
                        <DrawerTitle>{selectedTab?.heading}</DrawerTitle>
                    </DrawerHeader>
                    <div className="overflow-y-auto grid grid-cols-3 gap-2 mt-2 pb-6">
                        {selectedTab?.courseData?.slice(0).map((course) => (
                            <Card key={course.id} className="p-2 rounded-xl min-h-[110px] flex flex-col items-center justify-center">
                                <CardContent className="flex flex-col items-center justify-center text-center gap-2 px-2">
                                    <Image src={course.image} alt={course.title} width={35} height={35} />
                                    <h4 className="font-medium text-[12px] line-clamp-2">{course.title}</h4>
                                    {/* <p className="text-xs text-gray-500">{course.tag}</p> */}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </DrawerContent>
            </Drawer>
            
        </section>
    );
};

export default CourseSectionMobile;
