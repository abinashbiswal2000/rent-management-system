import { z } from "zod"

export const loginSchema = z.object({
    userId: z.string().min(1),
    password: z.string().min(1),
    otp: z.string().length(6)
});