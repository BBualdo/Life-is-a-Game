"use client";

import { usePathname, useRouter } from "next/navigation";
import { useAppSelector } from "../redux/store";
import { useEffect } from "react";

const useUser = () => {
  const user = useAppSelector((state) => state.userReducer);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (user.id && pathname === "/get-started") {
      router.replace("/");
    } else if (!user.id) {
      router.replace("/get-started");
    }
  }, [user.id, router]);
};

export default useUser;
