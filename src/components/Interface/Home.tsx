"use client";

import appwriteService from "@/src/appwrite/config";
import useAuth from "@/src/hooks/useAuth";
import { Models } from "appwrite";

import { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
    null
  );

  useEffect(() => {
    (async () => {
      const userData = await appwriteService.getCurrentUser();
      if (userData) {
        setUser(userData);
      }
    })();
  }, []);

  return (
    user && (
      <main
        className={`flex flex-col gap-8 items-center justify-center min-h-screen`}
      >
        <div className="text-white text-2xl">
          Signed in successfully! Welcome
          <span className="text-cp-cyan"> {user.name}</span>!
        </div>
      </main>
    )
  );
};

export default Home;
