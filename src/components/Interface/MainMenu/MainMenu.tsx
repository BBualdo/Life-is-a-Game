"use client";

import Link from "next/link";
import MenuLogo from "../shared/MenuLogo";
import links from "@/src/data/nav-links";
import UserMenu from "./UserMenu";
import { useRouter } from "next/navigation";
import { GiPowerButton } from "react-icons/gi";

const navLinks = links.map((link) => (
  <Link
    className="btn-menu hover:text-cp-cyan hover:border-cp-cyan"
    key={link.key}
    href={link.href}
  >
    {link.title}
  </Link>
));

const MainMenu = () => {
  const router = useRouter();

  return (
    <section className="px-[120px]">
      <MenuLogo />
      <div className="text-white flex flex-col gap-4 mt-10">
        <button className="btn-menu hover:text-cp-cyan hover:border-cp-cyan">
          How to Play
        </button>
        {navLinks}
        <button className="btn-menu hover:text-cp-cyan hover:border-cp-cyan">
          Settings
        </button>
        <button
          className="btn-menu flex items-center gap-2 text-cp-red hover:text-cp-red-hover hover:border-cp-red"
          onClick={() => router.push("/login")}
        >
          <GiPowerButton />
          Logout
        </button>
      </div>
    </section>
  );
};

export default MainMenu;
