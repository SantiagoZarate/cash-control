import { z } from "zod";

const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

// export const LogInSchema = z.object({
//   username: z
//     .string()
//     .trim()
//     .min(6, "name must have at least 5 letters")
//     .max(12, "name must have less than 12 characters"),
//   email: z
//     .string()
//     .email("invalid email format")
//     .refine(
//       (email) => email.endsWith("@gmail.com"),
//       "email must use a gmail domain"
//     ),
// });

// export const signUpSchema = z.object({
//   username: z
//     .string()
//     .trim()
//     .min(6, "name must have at least 5 letters")
//     .max(12, "name must have less than 12 characters"),
//   email: z
//     .string()
//     .email("invalid email format")
//     .refine(
//       (email) => email.endsWith("@gmail.com"),
//       "email must use a gmail domain"
//     ),
//   password: z
//     .string()
//     .min(5, "Password must have at least 5 letter")
//     .regex(
//       passwordRegex,
//       "Password must contain at least one number and one symbol"
//     ),
// });

const commonUserSchema = z.object({
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

export const LogInSchema = commonUserSchema;

export const signUpSchema = commonUserSchema.extend({
  password: z
    .string()
    .min(5, "Password must have at least 5 letter")
    .regex(
      passwordRegex,
      "Password must contain at least one number and one symbol"
    ),
});

export type SignUpType = z.infer<typeof signUpSchema>;
export type LogInType = z.infer<typeof LogInSchema>;
