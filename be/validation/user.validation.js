const { z } = require("zod");

const userSchema = z.object({
    fullName: z.string(),
    userName: z.string(),
    email: z.string().email(),
    password: z.string(),
    role: z.enum(["Admin", "Lead", "Employee"])
})


const partialUserSchema = userSchema.partial();
module.exports = {
    userSchema,
    partialUserSchema
}