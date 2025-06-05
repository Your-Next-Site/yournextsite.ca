"use client";
import { PagesInfo } from "../../types/pages";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const pathname = usePathname();

  const [previousPage, setPreviousPage] = useState<string | null>(null);

  useEffect(() => {
    const storedPath = sessionStorage.getItem("previousPage");
    if (storedPath) setPreviousPage(storedPath);

    sessionStorage.setItem("previousPage", pathname);
  }, [pathname]);

  return (
    <div className="flex flex-row justify-evenly text-[var(--surface)] font-bold bg-primary">
      <div className="grow"></div>
      {PagesInfo.map((page) => (
        <Link
        key={page.order}
        href={page.url}
        className={`
          hover:bg-[var(--primary-selected)]
          ${
            page.url == pathname
            ? "fade-border-in bg-[var(--primary-selected)]" 
            : ""
            }
            
            ${page.url == previousPage && page.url != pathname ? " fade-border-out ":""}
            
            
            grow px-4 py-2 min-w-[120px] select-none hover:cursor-pointer text-center
            border-b-[var(--primary)]
            `}
            >
          {page.name}
        </Link>
      ))}
      <div className="grow"></div>
    </div>
  );
}
