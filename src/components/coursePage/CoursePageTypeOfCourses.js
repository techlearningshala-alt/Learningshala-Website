import React, { useState } from "react";
import { Calculator, ChevronRight, Clock, Download, Eye, IndianRupee, List } from "lucide-react";
import Link from "next/link";
import PrimaryButton from "../custom/shared/PrimaryButton";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import MainHeading from "../custom/shared/MainHeading";
import CourseContentHeading from "./CourseContentHeading";
import SpanButton from "../universitypage/SpanButton";

const UniversityCourses = ({ id, title,universityData, coursesList }) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <><div id={id} className="content_card">
      <div className="flex items-center justify-between gap-3 mb-4"><CourseContentHeading className='!m-0' title={"Specializations"} />
        <Link href="/tools/roi-calculator"> <SpanButton title="ROI Calculator" icon={<Calculator className="w-4 h-4" />} /></Link>
      </div>
      <div className="grid grid-cols-12 gap-6 mb-6">
        {coursesList.slice(0, 6).map((data, index) => (
          <div key={index} className="col-span-4">
            {" "}
            <div className="border rounded-2xl p-4 relative">
              <div className="grid grid-cols-12"> <div className="col-span-9">
                <div>
                  {" "}
                  <span className="absolute left-0 top-0 bg-green-200 text-green-800 text-[12px] py-1 mt-3 ps-4 pe-3 rounded-e-xl">Trending</span>
                  <p className="font-bold mb-3 mt-8 text-lg">Online {data.name}</p>

                  <p className="flex items-center mb-3 gap-2">
                    {" "}
                    <IndianRupee className="w-5 h-5 bg-yellow-200 p-1 rounded-full" />{" "}
                    Fees : <span className="font-bold">{data.fees}</span>
                  </p>
                  <p className="flex items-center mb-3 gap-2">
                    {" "}
                    <Clock className="w-5 h-5 bg-yellow-200 p-1 rounded-full" />{" "}
                    Duration : <span className="font-bold">{data.duration}</span>
                  </p>
                  <p className="flex items-center mb-3 gap-2">
                    {" "}
                    <List className="w-5 h-5 bg-yellow-200 p-1 rounded-full" />
                    Specializations : <span className="font-bold">{data.numberOfSpecialization}+</span>
                  </p>

                </div></div>
                <div className="col-span-3">
                  <Image src={data.img} width={100} height={100} alt="profile" className="rounded-xl" />
                </div></div>

              <div>

                <p className="flex justify-between items-center bg-gray-100 py-3 px-4 rounded-xl">
                  <span>
                    Study Mode : <span className="font-bold">{data.mode}</span>
                  </span>

                  <Link
                    className="flex items-center font-semibold bg-primary text-black rounded-sm px-3 py-1"
                    href={``}
                  >
                    {" "}
                    Get Info <ChevronRight className="w-4 h-4" />
                  </Link>
                </p>
              </div>

            </div>

          </div>

        ))}
      </div>
      <div className="grid grid-cols-1 gap-8">

        <div onClick={() => setIsOpen(true)}><PrimaryButton iconPos="left" icon={<Eye />} title={`View All ${coursesList.length} Specializations`} /></div>

      </div>
    </div>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>

        <DrawerContent className="pt-4">
          <DrawerHeader>
            <MainHeading title="Popular Courses" className='!mb-0 !text-2xl' />
          </DrawerHeader>
          <ScrollArea className="h-[600px]"> <div className="container">
            <div className="grid grid-cols-12 gap-6 my-6 pb-20">
              {coursesList.map((data, index) => (
                <div key={index} className="col-span-4">
                  {" "}
                  <div className="border rounded-2xl p-4">
                    <div className="grid grid-cols-12"> <div className="col-span-9">
                      <div>
                        {" "}
                        <p className="font-bold mb-3">{data.name}</p>
                        <p className="flex items-center mb-3 gap-2">
                          {" "}
                          <List className="w-5 h-5 bg-yellow-200 p-1 rounded-full" />
                          {data.numberOfSpecialization}+ Specializations
                        </p>
                        <p className="flex items-center mb-3 gap-2">
                          {" "}
                          <IndianRupee className="w-5 h-5 bg-yellow-200 p-1 rounded-full" />{" "}
                          Fees : <span className="font-bold">{data.fees}</span>
                        </p>

                      </div></div>
                      <div className="col-span-3">
                        <Image src={data.img} width={100} height={100} alt="profile" />
                      </div></div>

                    <div>

                      <p className="flex justify-between items-center bg-gray-100 py-3 px-4 rounded-xl">
                        <span>
                          Study Mode : <span className="font-bold">{data.mode}</span>
                        </span>

                        <Link
                          className="flex items-center bg-primary text-black rounded-sm px-3 py-1"
                          href={"/"}
                        >
                          {" "}
                          Get Info <ChevronRight className="w-4 h-4" />
                        </Link>
                      </p>
                    </div>

                  </div>

                </div>

              ))}
            </div>
          </div></ScrollArea>

        </DrawerContent>
      </Drawer>

    </>
  );
};

export default UniversityCourses;
