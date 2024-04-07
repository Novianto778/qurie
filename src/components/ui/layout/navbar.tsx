"use client";
import { navMenuList } from "@/config/constant";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../button";
import Logo from "../logo";
import NavItem from "./nav-item";

type Props = {};

const Navbar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white border-gray-200 container">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Logo />
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <MenuIcon className="w-6 h-6" />
        </button>
        <div
          className={cn(
            "w-full md:block md:w-auto",
            isMenuOpen ? "block" : "hidden"
          )}
        >
          <ul
            className={cn(
              "font-medium items-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white",
              isMenuOpen ? "max-md:items-start" : "max-md:items-center"
            )}
          >
            {navMenuList.map((item, index) => (
              <NavItem
                key={index}
                href={item.href}
                isActive={item.href === pathname}
              >
                {item.label}
              </NavItem>
            ))}
            <li>
              <Button variant="secondary" size="sm" asChild className="px-6">
                <Link href="login">Login</Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
