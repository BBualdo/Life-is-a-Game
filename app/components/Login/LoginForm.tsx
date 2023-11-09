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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { motion } from "framer-motion";

const loginFormSchema = z.object({
  username: z
    .string()
    .min(4, { message: "Username must be at least 4 characters." })
    .max(50),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." })
    .max(30),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    // Call database
    console.log(values);
  }

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", duration: 1 }}
    >
      <Form {...form}>
        <form
          className="flex flex-col items-center gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
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
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel className="text-white tracking-[6px]">
                    PASSWORD
                  </FormLabel>
                  <button type="button" className="text-cp-cyan text-xs">
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
          <button type="submit" className="btn btn-cyan hover:btn-red">
            Log in
          </button>
          <button type="button" className="btn btn-cyan hover:btn-red">
            Create account
          </button>
        </form>
      </Form>
    </motion.div>
  );
};

export default LoginForm;
