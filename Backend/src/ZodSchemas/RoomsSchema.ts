import { z } from "zod"

export const roomsSchema = z.object({
    r1: z.int().min(0),
    r2: z.int().min(0),
    r3: z.int().min(0),
    r4: z.int().min(0),
    r5: z.int().min(0),
    r6: z.int().min(0),
    r7: z.int().min(0),
    r8: z.int().min(0),
    r9: z.int().min(0),
    r10: z.int().min(0),
    r11: z.int().min(0),
    r12: z.int().min(0),
    r13: z.int().min(0),
})
