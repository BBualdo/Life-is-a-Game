"use client";

import useUser from "@/src/hooks/useUser";

const Home = () => {
  const { user } = useUser();

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
