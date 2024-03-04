import { z } from "zod";

console.log(import.meta.env);
const myEnvs = {
  URL: import.meta.env.VITE_BIN_URL,
  BIN_ID: import.meta.env.VITE_BIN_ID,
};

const envSchema = z.object({
  URL: z.string().url(),
  BIN_ID: z.string(),
});

export const envs = envSchema.parse(myEnvs);
