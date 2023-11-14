"use client";

import appwriteService from "@/src/appwrite/config";
import useAuth from "@/src/context/useAuth";
import { useRouter } from "next/navigation";

const Home = () => {
  const { setAuthStatus } = useAuth();
  const router = useRouter();
  const logout = async () => {
    await appwriteService.logout();
    setAuthStatus(false);
    router.push("login");
  };

  return (
    <main
      className={`flex flex-col gap-8 items-center justify-center min-h-screen`}
    >
      <div className="text-white text-2xl">
        Signed in successfully! Welcome
        <span className="text-cp-cyan"> Username</span>!
      </div>
      <button onClick={logout} className="btn btn-red hover:bg-cp-red/30">
        Logout
      </button>
    </main>
  );
};

export default Home;
