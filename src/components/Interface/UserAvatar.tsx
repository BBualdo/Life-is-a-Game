import Image from "next/image";

const UserAvatar = () => {
  return (
    <div className="relative h-[300px] w-[300px] border border-white">
      <Image
        alt="User Avatar"
        src="/assets/images/bbualdo-avatar.jpg"
        fill
        priority
      />
    </div>
  );
};

export default UserAvatar;
