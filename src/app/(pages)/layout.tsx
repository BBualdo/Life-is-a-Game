"use client";

import appwriteService from "@/src/appwrite/config";
import { useEffect, useState } from "react";
import { AuthProvider } from "@/src/context/authContext";
import { Models } from "appwrite";
import { UserProvider } from "@/src/context/userContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [authStatus, setAuthStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
    null
  );

  useEffect(() => {
    appwriteService
      .isLoggedIn()
      .then(setAuthStatus)
      .then(() =>
        appwriteService.getCurrentUser().then((userData) => {
          if (userData) {
            setUser(userData);
          }
        })
      )
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <AuthProvider value={{ authStatus, setAuthStatus }}>
      <UserProvider value={{ user, setUser }}>{children}</UserProvider>
    </AuthProvider>
  );
}
