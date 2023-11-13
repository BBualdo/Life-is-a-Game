"use client";

import appwriteService from "@/src/appwrite/config";

import { useRouter } from "next/navigation";
import useAuth from "@/src/hooks/useAuth";
import Loading from "@/src/app/loading";

const Home = () => {
  const isAuth = useAuth();
  const router = useRouter();

  if (isAuth === null) {
    return <Loading type="bars" color="#c10021" />;
  }

  if (!isAuth) {
    null;
  }

  const logout = () => {
    appwriteService.logout();
    router.push("/login");
  };

  return (
    <main className="bg-black flex flex-col gap-8 items-center justify-center min-h-screen">
      <div className="text-white uppercase text-2xl">
        Signed in successfully! Welcome user!
      </div>
      <button onClick={logout} className="btn btn-red hover:bg-cp-red/30">
        Logout
      </button>
    </main>
  );
};

export default Home;
