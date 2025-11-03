import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Search from "../shared/search/Search";
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Info from "../shared/Info";
const Banner = ({screenSize}) => {
  const results = [
    {
      name: "Online MBA",
      img: "/images/test/course1.png",
    },
    {
      name: "Online BBA",
      img: "/images/test/course2.png",
    },
    {
      name: "Bcom",
      img: "/images/test/course1.png",
    },
    {
      name: "AI-powered Learning",
      img: "/images/test/course4.png",
    },
    {
      name: "Development",
      img: "/images/test/course5.png",
    },
    {
      name: "Bca",
      img: "/images/test/course1.png",
    },
    {
      name: "Business",
      img: "/images/test/course7.png",
    },
    {
      name: "Tech Career",
      img: "/images/test/course1.png",
    },
    {
      name: "Free Certificates",
      img: "/images/test/course1.png",
    },
    {
      name: "Bcom",
      img: "/images/test/course2.png",
    },
    {
      name: "Google",
      img: "/images/test/course1.png",
    },


  ]
  return (
    <div className="sec_mb">
      <div className="container">
        <div className="grid grid-cols-12 gap-4 bg-[#faf9f7] px-5 md:px-10 rounded-4xl">
          <div className="col-span-12 lg:col-span-6">
            <div className="mx-auto flex flex-col  py-8 lg:py-16">
              <h1 className="font-extrabold text-2xl lg:text-4xl mb-4 md:mb-8">
            Your Single Point-of-Contact for a
                <span className="text-primary"> Hassle-Free Online Degree </span>
              </h1>

              <Search trigger={<div className="relative w-full mb-2 overflow-hidden" style={{ boxShadow: "0 2px 12px 2px #e2e2e2", borderRadius: "60px" }}>
                <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 " />
                <Input
                  className="h-14 md:h-16 pl-13 md:pl-15 border-0 outline-0 bg-white placeholder:text-[14px] md:placeholder:text-[17px] placeholder:font-medium"
                  placeholder="Search 25,000 Course, University ..."
                />
              </div>} />
              {screenSize && screenSize.width > 991 ? <p className="mb-4 md:mb-10 flex flex-wrap justify-between px-2">
                <span className="text-sm">Or browse by Courses or university</span><span className="font-bold text-sm flex items-center gap-1 underline">
                  <Info trigger="Learn More" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" default="true" /></span>
              </p> : null }
              

              <p className="font-bold mb-4">Trending Courses</p>
              <p className="flex flex-wrap gap-3">

                {results.map((data, index) => (
                  <Badge key={index} asChild className="bg-[#f9fafc] text-black border-gray-200 text-[11px] md:text-[12px] ps-1 pe-3" style={{ borderRadius: "15px" }}>
                    <Link href="/"><Image src={data.img} width={22} height={22} className="rounded-full" alt="icon" /> {data.name}</Link>
                  </Badge>
                ))}
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 flex justify-end lg:p-15">
            <Image src="/images/homepage/banner/banner2.png" layout="responsive" width={400} height={200} alt="banner" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;
