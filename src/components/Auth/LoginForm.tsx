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

const loginFormSchema = z.object({
  email: z.string().email({ message: "Email is not valid." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .max(30),
});

const LoginForm = () => {
  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    try {
      console.log(values);
      // Clerk logic
    } catch (error) {
      throw error;
    }
  }

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 1 }}
      className="flex flex-col items-center"
    >
      <Form {...loginForm}>
        <form
          className="flex flex-col items-center gap-4"
          onSubmit={loginForm.handleSubmit(onSubmit)}
        >
          <FormField
            control={loginForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white tracking-[6px]">
                  EMAIL
                </FormLabel>
                <FormControl>
                  <Input className="min-w-[360px]" type="text" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={loginForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel className="text-white tracking-[6px]">
                    PASSWORD
                  </FormLabel>
                  <button
                    tabIndex={-1}
                    type="button"
                    className="text-cp-cyan text-xs"
                  >
                    DON'T REMEMBER?
                  </button>
                </div>
                <FormControl>
                  <Input className="min-w-[360px]" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button
            type="submit"
            className="btn btn-cyan hover:btn-red hover:bg-cp-red/30"
          >
            Log in
          </button>
          <div className="relative border w-full flex items-center justify-center mt-3">
            <span className="absolute -top-2 backdrop-blur-sm text-cp-yellow uppercase text-xs">
              Are you new here?
            </span>
          </div>
          <Link href="/signup">
            <button type="button" className="btn btn-yellow hover:bg-black">
              Create account
            </button>
          </Link>
        </form>
      </Form>
    </motion.div>
  );
};

export default LoginForm;
