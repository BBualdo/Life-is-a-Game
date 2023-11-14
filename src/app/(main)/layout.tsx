"use client";

import appwriteService from "@/src/appwrite/config";
import { AuthProvider } from "@/src/context/authContext";
import { useEffect, useState } from "react";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
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
};

export default ProtectedLayout;
