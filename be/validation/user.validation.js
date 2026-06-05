const { z } = require("zod");

const userSchema = z.object({
    fullName: z.string(),
    userName: z.string(),
    email: z.string().email(),
    password: z.string(),

})


const loginSchema = userSchema.partial().extend({
    email: z.string().email(),
    password: z.string()
});

module.exports = {
    userSchema,
    loginSchema
}