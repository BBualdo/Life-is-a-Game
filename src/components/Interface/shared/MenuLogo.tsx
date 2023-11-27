import { arcade } from "@/src/fonts";
import Image from "next/image";

const MenuLogo = () => {
  return (
    <div className="flex items-center gap-4">
      <Image
        src="/assets/images/logo.png"
        alt="Gamepad Logo"
        width={100}
        height={100}
        priority
      />
      <h1 className={`${arcade.className} text-cp-red text-3xl`}>LiaG</h1>
    </div>
  );
};

export default MenuLogo;
