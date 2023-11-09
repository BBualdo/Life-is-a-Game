import { ID, account } from "@/appwrite/appwrite";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Creates new user
export async function signupUser(
  email: string,
  password: string,
  name: string
) {
  await account.create(ID.unique(), email, password, name);
}
