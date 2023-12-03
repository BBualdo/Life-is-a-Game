import LastestAchievements from "@/src/components/Interface/LastestAchievements";
import UserAvatar from "@/src/components/Interface/UserAvatar";
import UserInfo from "@/src/components/Interface/UserInfo";
import UserLevel from "@/src/components/Interface/UserLevel";
import Link from "next/link";
import { LuArrowBigLeftDash } from "react-icons/lu";

export default function Profile() {
  return (
    <main className="gradient-cp flex min-h-screen flex-col items-center justify-center py-20">
      <div className="w-3/5">
        <Link href="/">
          <button className="text-4xl text-cp-red transition-all duration-200 hover:text-cp-red/50">
            <LuArrowBigLeftDash />
          </button>
        </Link>
      </div>
      <div className="mt-4 flex h-[12px] w-3/5">
        <div className="light-silver-shadow w-[80px] bg-light-silver"></div>
        <div className="light-silver-shadow ml-2 w-[100px] bg-light-silver"></div>
        <div className="light-silver-shadow ml-[2px] w-[10px] bg-light-silver"></div>
        <div className="light-silver-shadow ml-2 w-[200px] bg-light-silver"></div>
        <div className="light-silver-shadow ml-1 w-[300px] bg-light-silver"></div>
        <div className="light-silver-shadow ml-2 flex-1 bg-light-silver"></div>
        <div className="light-silver-shadow ml-2 flex w-[80px] gap-[2px] bg-light-silver"></div>
        <div className="light-silver-shadow ml-2 flex w-[200px] gap-[2px]">
          <div className="flex-1 bg-light-silver"></div>
          <div className="flex-1 bg-light-silver"></div>
          <div className="flex-1 bg-light-silver"></div>
          <div className="flex-1 bg-light-silver"></div>
          <div className="flex-1 bg-light-silver"></div>
          <div className="flex-1 bg-light-silver"></div>
          <div className="flex-1 bg-light-silver"></div>
          <div className="flex-1 bg-light-silver"></div>
          <div className="flex-1 bg-light-silver"></div>
          <div className="flex-1 bg-light-silver"></div>
          <div className="flex-1 bg-light-silver"></div>
          <div className="flex-1 bg-light-silver"></div>
          <div className="flex-1 bg-light-silver"></div>
          <div className="flex-1 bg-light-silver"></div>
          <div className="flex-1 bg-light-silver"></div>
          <div className="flex-1 bg-light-silver"></div>
          <div className="flex-1 bg-light-silver"></div>
          <div className="flex-1 bg-light-silver"></div>
          <div className="flex-1 bg-light-silver"></div>
          <div className="flex-1 bg-light-silver"></div>
        </div>
      </div>
      <section className="w-3/5">
        <div className="flex border-b border-white py-2">
          <UserAvatar />
          <div className="flex flex-1 flex-col items-end justify-between">
            <button className="btn btn-red items-end hover:bg-cp-red/30">
              Edit Profile
            </button>
            <UserLevel />
          </div>
        </div>
        <UserInfo />
        <LastestAchievements />
      </section>
    </main>
  );
}
