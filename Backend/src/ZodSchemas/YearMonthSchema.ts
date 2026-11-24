import { z } from "zod"

export const yearMonthSchema = z.object({
    yearMonth: z.string().regex(/^[1-9]\d{3}-(0[1-9]|1[0-2])$/)
})