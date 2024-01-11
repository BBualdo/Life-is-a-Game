import { User } from "@/src/utils/types";
import Image from "next/image";
import UserDefaultAvatar from "../shared/UserDefaultAvatar";

const UserAvatar = ({ user }: { user: User }) => {
  return (
    <div className="relative border border-white bg-black xs:h-[200px] xs:w-[200px] lg:h-[300px] lg:w-[300px]">
      {user.avatar ? (
        <Image alt="User Avatar" src={user.avatar} fill priority />
      ) : (
        <UserDefaultAvatar user={user} variant="large" />
      )}
    </div>
  );
};

export default UserAvatar;
