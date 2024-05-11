"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({link}) => {
    const pathName = usePathname();
  return (
    <Link className="" href={link.url}>{link.title}</Link>
  )
}

export default Navlink

