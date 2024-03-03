import { z } from "zod";

export const signUpSchema = z.object({
  username: z
    .string()
    .trim()
    .min(6, "name must have at least 5 letters")
    .max(12, "name must have less than 12 characters"),
  email: z
    .string()
    .email("invalid email format")
    .refine(
      (email) => email.endsWith("@gmail.com"),
      "email must use a gmail domain"
    ),
});

export type SignUpType = z.infer<typeof signUpSchema>;
