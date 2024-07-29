"use client";

import Loading from "@/src/app/loading";
import { useRouter, useSearchParams } from "next/navigation";

import AuthService from "@/src/services/AuthService";
import { useEffect } from "react";

const GithubCallback = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const code = searchParams.get("code");

  useEffect(() => {
    if (!code) {
      router.replace("/login");
      return;
    }

    AuthService.handleGithubCallback(code).then((res) => console.log(res));
  }, [code, router]);

  return <Loading text="Hacking with Github..." />;
};

export default GithubCallback;
