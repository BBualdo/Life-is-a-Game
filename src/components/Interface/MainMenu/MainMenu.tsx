"use client";

import Link from "next/link";
import MenuLogo from "../shared/MenuLogo";
import links from "@/src/data/nav-links";
import UserMenu from "./UserMenu";
import { useRouter } from "next/navigation";
import { GiPowerButton } from "react-icons/gi";

const navLinks = links.map((link) => (
  <Link
    className="text-2xl text-white hover:text-cp-cyan transition-all duration-200"
    key={link.key}
    href={link.href}
  >
    {link.title}
  </Link>
));

const MainMenu = () => {
  const router = useRouter();

  return (
    <section>
      <MenuLogo />
      <UserMenu />
      <div className="text-white flex flex-col items-center gap-4 mt-10">
        {navLinks}
        <button
          className="text-cp-red text-2xl hover:text-cp-red-hover cursor-pointer transition-all duration-200 flex items-center gap-2"
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
