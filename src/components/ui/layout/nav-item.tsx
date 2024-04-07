import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import React, { HTMLProps } from "react";

type Props = LinkProps &
  HTMLProps<HTMLAnchorElement> & {
    isActive?: boolean;
  };

const NavItem = ({ href, className, children, isActive, ...props }: Props) => {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 duration-300",
          isActive ? "text-primary" : "text-gray-900"
        )}
        {...props}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
