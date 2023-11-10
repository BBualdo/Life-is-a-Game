"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import appwriteService from "../appwrite/config";

const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const isAuthenticated = await appwriteService.isLoggedIn();

        if (!isAuthenticated) {
          router.push("/login");
        }
      } catch (error) {
        console.error("Authentication error " + error);
      }
    };

    checkAuth();
  }, [router]);
};

export default useAuth;
