"use client";

import useAuth from "@/src/hooks/useAuth";

const Home = () => {
  useAuth();

  return <div>Signed in successfully! Welcome user!</div>;
};

export default Home;
