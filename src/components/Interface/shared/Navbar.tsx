"use client";

import Image from "next/image";
import Link from "next/link";
import { GiPowerButton } from "react-icons/gi";
import { arcade } from "@/src/fonts";
import { usePathname, useRouter } from "next/navigation";
import links from "@/src/data/nav-links";
import clsx from "clsx";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = links.map((link) => (
    <Link key={link.key} href={link.href}>
      <button
        className={clsx(
          "border-b-2 px-4 py-4 text-xl transition-all duration-200 disabled:border-gray-500 disabled:text-gray-500",
          {
            "border-cp-cyan text-cp-cyan shadow-cp-cyan text-shadow-lg":
              link.href === pathname,
            "border-cp-red text-cp-red hover:border-cp-cyan/50 enabled:hover:text-cp-cyan/50":
              link.href !== pathname,
          },
        )}
        disabled={link.disabled}
      >
        {link.title}
      </button>
    </Link>
  ));

  return (
    <nav className="flex w-full items-center border-b border-cp-red/20 px-4">
      <div className="group flex-1 justify-start">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/images/logo.png"
            alt="Gamepad Logo"
            width={50}
            height={50}
            className="transition-all duration-200 group-hover:brightness-150"
          />
          <h1
            className={`${arcade.className} text-cp-red transition-all duration-200 group-hover:scale-110`}
          >
            LiaG
          </h1>
        </Link>
      </div>

      <div className="flex flex-1 items-center justify-center gap-1 text-white">
        {navLinks}
      </div>
      <div className="flex flex-1 justify-end">
        <GiPowerButton
          onClick={() => router.push("/login")}
          className="cursor-pointer text-2xl text-cp-red transition-all duration-200 hover:text-cp-cyan"
        />
      </div>
    </nav>
  );
};

export default Navbar;
