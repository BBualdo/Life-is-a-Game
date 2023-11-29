"use client";

import Image from "next/image";
import Link from "next/link";
import { GiPowerButton } from "react-icons/gi";
import { arcade } from "@/src/fonts";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex h-20 w-full items-center justify-between border-b border-cp-red/20 px-4">
      <Link
        href="/"
        className="flex items-center gap-2 transition-all duration-200 hover:scale-105"
      >
        <Image
          src="/assets/images/logo.png"
          alt="Gamepad Logo"
          width={50}
          height={50}
        />
        <h1 className={`${arcade.className} text-cp-red`}>LiaG</h1>
      </Link>
      <div className="flex items-center gap-20 text-white">
        <Link
          href="/"
          className="transition-all duration-200 hover:scale-125 hover:text-cp-cyan"
        >
          Home
        </Link>
        <Link
          href="/missions"
          className="transition-all duration-200 hover:scale-125 hover:text-cp-cyan"
        >
          Missions
        </Link>
        <Link
          href="/achievements"
          className="transition-all duration-200 hover:scale-125 hover:text-cp-cyan"
        >
          Achievements
        </Link>
        <Link
          href="/profile"
          className="transition-all duration-200 hover:scale-125 hover:text-cp-cyan"
        >
          Profile
        </Link>
      </div>
      <div className="flex">
        <GiPowerButton
          onClick={() => router.push("/login")}
          className="cursor-pointer text-2xl text-cp-red transition-all duration-200 hover:text-cp-red-hover"
        />
      </div>
    </nav>
  );
};

export default Navbar;
