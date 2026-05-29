
const { z } = require("zod");

const teamSchema = z.object({
    name: z.string(),
    description: z.string(),
    teamLead: z.string()
})

module.exports = teamSchema;