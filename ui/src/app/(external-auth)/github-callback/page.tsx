"use client";

import Loading from "@/src/app/loading";
import { useRouter, useSearchParams } from "next/navigation";

import AuthService from "@/src/services/AuthService";
import { useEffect } from "react";
import { toast } from "sonner";
import { PiWarningCircleFill } from "react-icons/pi";

const GithubCallback = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const code = searchParams.get("code");

  useEffect(() => {
    if (!code) {
      router.replace("/login");
      return;
    }

    AuthService.handleGithubCallback(code)
      .then(() => {
        router.push("/");
      })
      .catch((error: any) => {
        if (error.response) {
          toast.error(error.response.data.message, {
            description: error.response.data.errors?.map(
              (e: string, index: number) => <p key={index}>{e}</p>,
            ),
            icon: <PiWarningCircleFill />,
          });
        } else {
          toast.error("Github login failed!", {
            description:
              "Server error occurred. Please try again later or contact customer support.",
            icon: <PiWarningCircleFill />,
          });
        }

        router.replace("/login");
      });
  }, [code, router]);

  return <Loading text="Hacking with Github..." />;
};

export default GithubCallback;
