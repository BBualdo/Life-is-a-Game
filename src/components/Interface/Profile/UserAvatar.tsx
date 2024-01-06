import Image from "next/image";

const UserAvatar = () => {
  return (
    <div className="relative border border-white xs:h-[200px] xs:w-[200px] lg:h-[300px] lg:w-[300px]">
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
