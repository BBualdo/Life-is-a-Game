"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/shadcn/ui/form";
import { Input } from "@/src/shadcn/ui/input";

import { motion } from "framer-motion";
import Link from "next/link";

import appwriteService from "@/src/appwrite/config";
import useAuth from "@/src/hooks/useAuth";
import { useRouter } from "next/navigation";

// Signup Zod Schema
const signupFormSchema = z
  .object({
    username: z
      .string()
      .min(4, { message: "Username must be at least 4 characters." })
      .max(50),
    email: z.string().email({ message: "Email must be valid." }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." })
      .max(30),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." })
      .max(30),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    { message: "Passwords must match!", path: ["confirmPassword"] }
  );

// Signup Component
const SignupForm = () => {
  const { authStatus, setAuthStatus } = useAuth();
  const router = useRouter();

  if (authStatus) {
    router.replace("/");
  }

  const signupForm = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit({
    email,
    password,
    username,
  }: z.infer<typeof signupFormSchema>) {
    try {
      const userData = await appwriteService.createUserAccount({
        email,
        password,
        username,
      });
      if (userData) {
        setAuthStatus(true);
        router.push("/");
      }
    } catch (error) {
      console.error("Failed to Signup: " + error);
    }
  }

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 1 }}
      className="flex flex-col items-center"
    >
      <Form {...signupForm}>
        <form
          className="flex flex-col items-center gap-4"
          onSubmit={signupForm.handleSubmit(onSubmit)}
        >
          <FormField
            control={signupForm.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white tracking-[6px]">
                  USERNAME
                </FormLabel>
                <FormControl>
                  <Input className="min-w-[360px]" type="text" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signupForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white tracking-[6px]">
                  EMAIL
                </FormLabel>
                <FormControl>
                  <Input className="min-w-[360px]" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signupForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white tracking-[6px]">
                  PASSWORD
                </FormLabel>
                <FormControl>
                  <Input className="min-w-[360px]" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signupForm.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white tracking-[6px]">
                  CONFIRM PASSWORD
                </FormLabel>
                <FormControl>
                  <Input className="min-w-[360px]" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button type="submit" className="btn btn-cyan hover:btn-red">
            Sign up
          </button>
          <div className="relative border w-full flex items-center justify-center mt-3">
            <span className="absolute -top-2 backdrop-blur-sm text-cp-yellow uppercase text-xs">
              Already have an account?
            </span>
          </div>
          <Link href="/login">
            <button type="button" className="btn btn-yellow hover:bg-black">
              Log in
            </button>
          </Link>
        </form>
      </Form>
    </motion.div>
  );
};

export default SignupForm;
