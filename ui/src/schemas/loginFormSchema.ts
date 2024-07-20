import * as z from "zod";
import {
  digitValidator,
  specialCharacterValidator,
  uppercaseValidator,
} from "@/src/utils/passwordValidators";

const loginFormSchema = z.object({
  email: z.string().email({ message: "Email is not valid." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." })
    .max(32, { message: "Password is too long." })
    .regex(digitValidator, {
      message: "Password must contain at least one digit.",
    })
    .regex(specialCharacterValidator, {
      message: "Password must contain at least one special character.",
    })
    .regex(uppercaseValidator, {
      message: "Password must contain at least one uppercase.",
    }),
});

export default loginFormSchema;
