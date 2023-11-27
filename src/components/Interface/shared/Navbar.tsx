"use client";

import Image from "next/image";
import Link from "next/link";
import { GiPowerButton } from "react-icons/gi";
import { arcade } from "@/src/fonts";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="w-full h-20 flex items-center justify-between px-4 border-b border-cp-red/20">
      <Link
        href="/"
        className="flex items-center gap-2 hover:scale-105 transition-all duration-200"
      >
        <Image
          src="/assets/images/logo.png"
          alt="Gamepad Logo"
          width={50}
          height={50}
        />
        <h1 className={`${arcade.className} text-cp-red`}>LiaG</h1>
      </Link>
      <div className="text-white flex items-center gap-20">
        <Link
          href="/"
          className="hover:text-cp-cyan hover:scale-125 transition-all duration-200"
        >
          Home
        </Link>
        <Link
          href="/missions"
          className="hover:text-cp-cyan hover:scale-125 transition-all duration-200"
        >
          Missions
        </Link>
        <Link
          href="/achievements"
          className="hover:text-cp-cyan hover:scale-125 transition-all duration-200"
        >
          Achievements
        </Link>
        <Link
          href="/profile"
          className="hover:text-cp-cyan hover:scale-125 transition-all duration-200"
        >
          Profile
        </Link>
      </div>
      <div className="flex">
        <GiPowerButton
          onClick={() => router.push("/login")}
          className="text-cp-red text-2xl hover:text-cp-red-hover cursor-pointer transition-all duration-200"
        />
      </div>
    </nav>
  );
};

export default Navbar;
