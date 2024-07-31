"use client";

import Loading from "@/src/app/loading";
import { useRouter, useSearchParams } from "next/navigation";

import AuthService from "@/src/services/AuthService";
import { useEffect } from "react";
import { toast } from "sonner";
import { PiWarningCircleFill } from "react-icons/pi";
import useUser from "@/src/utils/hooks/useUser";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/src/redux/store";
import { setUserProviderId } from "@/src/redux/slices/userSlice";

const FacebookCallback = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const code = searchParams.get("code");
  const { user } = useUser();

  useEffect(() => {
    if (!code) {
      if (user) {
        router.replace("/profile");
      } else {
        router.replace("/login");
      }
      return;
    }

    if (!user) {
      AuthService.handleFacebookCallback(code)
        .then(() => {
          router.replace("/");
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
            toast.error("Facebook login failed!", {
              description:
                "Server error occurred. Please try again later or contact customer support.",
              icon: <PiWarningCircleFill />,
            });
          }

          router.replace("/login");
        });
    } else {
      AuthService.linkAccount(code, user.id, "Facebook")
        .then(() => {
          dispatch(setUserProviderId("Facebook"));
          router.replace("/profile");
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
            toast.error("Facebook login failed!", {
              description:
                "Server error occurred. Please try again later or contact customer support.",
              icon: <PiWarningCircleFill />,
            });
          }

          router.replace("/login");
        });
    }
  }, [code, router]);

  return <Loading text="Hacking with Facebook..." />;
};

export default FacebookCallback;
