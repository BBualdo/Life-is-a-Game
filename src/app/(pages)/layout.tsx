"use client";

import appwriteService from "@/src/appwrite/config";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../loading";
import { AuthProvider } from "@/src/context/authContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [authStatus, setAuthStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    appwriteService
      .isLoggedIn()
      .then(setAuthStatus)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <AuthProvider value={{ authStatus, setAuthStatus }}>
      {children}
    </AuthProvider>
  );
}
