import { z } from 'zod';

export const envSchema = z.object({
  MONGODB_URL: z.string().url(),
  PORT: z.coerce.number().optional().default(3000),
  CACHE_TTL: z.coerce.number().optional().default(5),
  CACHE_MAX: z.coerce.number().optional().default(10),
  CHECKOUT_SUCCESS_URL: z.coerce.string(),
  ALPHABET: z.string(),
});

export type Env = z.infer<typeof envSchema>;
