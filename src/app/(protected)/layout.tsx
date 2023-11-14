"use client";

import appwriteService from "@/src/appwrite/config";
import { AuthProvider } from "@/src/context/authContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const [authStatus, setAuthStatus] = useState(false);

  useEffect(() => {
    appwriteService.isLoggedIn().then(setAuthStatus);
  }, []);

  return (
    <AuthProvider value={{ authStatus, setAuthStatus }}>
      {children}
    </AuthProvider>
  );
};

export default ProtectedLayout;
