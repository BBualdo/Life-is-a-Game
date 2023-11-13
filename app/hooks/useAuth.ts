"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import appwriteService from "@/app/appwrite/config";

const useAuth = () => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authStatus = await appwriteService.isLoggedIn();
        setIsAuth(authStatus);
        if (!authStatus) {
          router.push("/login");
        } else {
          router.push("/");
        }
      } catch (error) {
        console.error("Authentication error " + error);
      }
    };

    checkAuth();
  }, [router]);

  return isAuth;
};

export default useAuth;
