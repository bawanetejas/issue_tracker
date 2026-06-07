
import { z } from "zod";

export const teamSchema = z.object({
    name: z.string(),
    description: z.string(),
    teamLead: z.string()
})