"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ChevronDown, ChevronRight, Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";
import SocialShare from "./SocialShare";
import { globalStore } from "@/lib/store";

const MobileHeader = () => {
  const { email,phone,location } = globalStore;
  const [openMenus, setOpenMenus] = useState({}); // Track which parent menus are open
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const toggleMenu = (key) => {
    setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const closeSheet = () => setIsSheetOpen(false);
  const menuItems = [

    {
      title: "Explore Menu",
      subItems: [
        // { title: "Web Development", url: "/web" },
        // { title: "Mobile Apps", url: "/mobile" },
        {
          title: "UG Course",
          subItems: [
            { title: "BBA", url: "/bba" },
            { title: "BCA", url: "/bca" },
          ],
        },
        {
          title: "PG Course",
          subItems: [
            { title: "MBA", url: "/mba" },
            { title: "MCA", url: "/mca" },
          ],
        },

      ],
    },
      {
      title: "All Universities",
      subItems: [
        { title: "Amity University Online", url: "/amity" },
        { title: "Lovely Professional University", url: "/lovely" },
        { title: "Manipal University", url: "/manipal" },
        { title: "Other Universities", url: "/other" },
      ],
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Contact Us",
      url: "/contact-us",
    },
  ];

  const renderMenu = (items, parentKey = "") => {
    return (
      <ul className="space-y-1">
        {items.map((item, index) => {
          const key = parentKey + index;
          if (item.subItems) {
            return (
              <li key={key}>
                <button
                  className="flex justify-between w-full items-center py-2 px-3 rounded hover:bg-gray-100"
                  onClick={() => toggleMenu(key)}
                >
                  <span>{item.title}</span>
                  {openMenus[key] ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
                {openMenus[key] && (
                  <div className="pl-4">{renderMenu(item.subItems, key + "-")}</div>
                )}
              </li>
            );
          }
          return (
            <li key={key}>
              <Link
                href={item.url}
                className="block py-2 px-3 rounded hover:bg-gray-100"
                onClick={closeSheet}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between px-4 py-4">
        <Logo />
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <button className="p-2 rounded-md hover:bg-gray-100">
              <Menu />
            </button>
          </SheetTrigger>

          <SheetContent side="left" className="p-0 max-w-xs">
            <SheetHeader className="p-4 border-b">
              <SheetTitle><Logo /></SheetTitle>
            </SheetHeader>

            <div className="overflow-y-auto h-[calc(100vh-64px)] p-4">
              {renderMenu(menuItems)}
              <div className="flex gap-4 ps-2 mt-2">
                <Link href={`tel:${phone.get()}`} className="flex justify-center items-center flex-col"><Phone className="mb-1 text-primary w-10 h-10 border border-primary rounded-md p-2" />
                  <span className="text-[12px]">Toll Free</span></Link>
                <Link href={`mailto:${email.get()}`} className="flex justify-center items-center flex-col"><Mail className="mb-1 text-primary w-10 h-10 border border-primary rounded-md p-2" />
                  <span className="text-[12px]">Email</span></Link>
                <Link href={location.get()} className="flex justify-center items-center flex-col"><MapPin className="mb-1 text-primary w-10 h-10 border border-primary rounded-md p-2" />    
                  <span className="text-[12px]">Visit Us</span></Link>
              </div>
            </div>
            <div className="p-4"> <p className="mb-3">On Social Media :</p>
              <SocialShare /></div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileHeader;
