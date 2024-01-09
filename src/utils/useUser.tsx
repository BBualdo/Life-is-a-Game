"use client";

import { useRouter } from "next/navigation";
import { useAppSelector } from "../redux/store";
import { useEffect } from "react";

const useUser = () => {
  const user = useAppSelector((state) => state.userReducer);
  const router = useRouter();

  useEffect(() => {
    if (user.id) {
      router.replace("/");
    } else {
      router.replace("/get-started");
    }
  }, [user.id, router]);
};

export default useUser;
