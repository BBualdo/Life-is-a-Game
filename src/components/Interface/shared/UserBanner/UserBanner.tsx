import Image from "next/image";
import UserXP from "./UserXP";

const UserBanner = () => {
  return (
    <div className="flex items-center gap-10">
      <UserXP />
      <div className="relative h-[50px] w-[50px] cursor-pointer overflow-hidden rounded-full border-2 border-cp-red transition-all duration-200 hover:border-white">
        <Image src="/assets/images/bbualdo-avatar.jpg" alt="" fill />
      </div>
    </div>
  );
};

export default UserBanner;
