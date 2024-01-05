"use client";

import clsx from "clsx";
import UserAvatar from "./UserBanner/UserAvatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { GiOpenBook, GiTrophy } from "react-icons/gi";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 z-40 flex min-h-[60px] w-full items-center justify-between border-t-2 border-cp-cyan bg-black p-4 lg:hidden">
      <div className="flex flex-1 items-center gap-10">
        <Link href="/missions">
          <button
            className={clsx("text-2xl transition-all duration-200", {
              "text-cp-cyan": pathname === "/missions",
              "text-white hover:text-cp-cyan/50": pathname !== "/missions",
            })}
          >
            <GiOpenBook />
          </button>
        </Link>
        <Link href="/achievements">
          <button
            className={clsx("text-2xl transition-all duration-200", {
              "text-cp-cyan": pathname === "/achievements",
              "text-white hover:text-cp-cyan/50": pathname !== "/achievements",
            })}
          >
            <GiTrophy />
          </button>
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-end gap-10">
        <Link href="/profile">
          <button
            className={clsx("text-2xl transition-all duration-200", {
              "text-cp-cyan": pathname === "/profile",
              "text-white hover:text-cp-cyan/50": pathname !== "/profile",
            })}
          >
            <FaUser />
          </button>
        </Link>
        <UserAvatar />
      </div>
    </div>
  );
};

export default MobileNav;
