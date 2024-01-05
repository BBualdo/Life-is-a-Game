import UserXP from "./UserXP";
import UserAvatar from "./UserAvatar";

const UserBanner = () => {
  return (
    <div className="flex items-center gap-10">
      <UserXP />
      <UserAvatar />
    </div>
  );
};

export default UserBanner;
