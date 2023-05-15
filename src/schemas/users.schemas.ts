import { z } from 'zod'

const returnUserSchema = z.object({
    id: z.number(),
    name: z.string().min(3).max(45),
    email: z.string().email().max(45),
    admin: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable()
})

const userCreateSchema = returnUserSchema.omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true}).extend({
    password: z.string().min(4).max(120)
})

const userUpdateSchema = userCreateSchema.omit({ admin: true }).partial()

const returnMultUsersSchema = returnUserSchema.array()

export {
    returnUserSchema, 
    userCreateSchema,
    returnMultUsersSchema,
    userUpdateSchema
}