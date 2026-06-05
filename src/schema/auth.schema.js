import { z } from "zod"

export const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(8),
})

export const signupSchema = z.object({
    fullName: z.string(),
    email: z.email(),
    userName: z.string(),
    password: z.string().min(8)
})

