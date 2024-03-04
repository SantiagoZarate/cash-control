import { z } from "zod";

const commonUserSchema = z.object({
  username: z
    .string()
    .trim()
    .min(6, "name must have at least 5 letters")
    .max(12, "name must have less than 12 characters"),
  password: z
    .string()
    .min(5, "Password must have at least 5 letter")
    .regex(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
      "Password must contain at least one number and one symbol"
    ),
});

export const LogInSchema = commonUserSchema.extend({});

export const signUpSchema = commonUserSchema.extend({
  email: z
    .string()
    .email("invalid email format")
    .refine(
      (email) => email.endsWith("@gmail.com"),
      "email must use a gmail domain"
    ),
});

export type SignUpType = z.infer<typeof signUpSchema>;
export type LogInType = z.infer<typeof LogInSchema>;
