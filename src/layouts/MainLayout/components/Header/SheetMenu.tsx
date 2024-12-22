'use client';

import { MenuIcon } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV_BARS } from "@/constants/nav.const";
import Link from "next/link";
import InputSearch from "./InputSearch";
import SwitchMode from "./SwitchMode";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SheetMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLinkClick = (path: string) => {
    setIsOpen(false); // Đóng Sheet
    router.push(path); // Chuyển router
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">
          <MenuIcon className="text-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription>
          </SheetDescription>
        </SheetHeader>
        {NAV_BARS.map((nav, index) => {
          return (
            <Link
              key={index}
              href={nav.path}
              className="font-normal text-base text-text block py-2"
              onClick={() => handleLinkClick(nav.path)}
            >
              {nav.title}
            </Link>
          );
        })}
        <div className="mt-4">
          <InputSearch />
        </div>
        <div className="mt-6">
          <SwitchMode />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetMenu;
