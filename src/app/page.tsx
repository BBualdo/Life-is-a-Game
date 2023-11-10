"use client";

import { useRouter } from "next/navigation";
import Home from "../components/Home/Home";

export default function Dashboard() {
  const router = useRouter();
  router.push("/login");
  return <Home />;
}
