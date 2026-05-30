const { z } = require("zod")

const issueSchema = z.object({
    title: z.string().max(100),
    description: z.string().max(1000),
    dueDate: z.string(),
    team: z.string(),
    assignedTo: z.string(),
    status: z.enum(["open", "in-progress", "closed"]),
    priority: z.enum(["High", "Medium", "Low"]),
    createdBy: z.string(),
})

const partialUserSchema = issueSchema.partial();

module.exports = { issueSchema, partialUserSchema }