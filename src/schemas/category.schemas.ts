import { z } from 'zod'

const returnCategorySchema = z.object({
    id: z.number(),
    name: z.string().max(45)
})

const createCategorySchema = returnCategorySchema.omit({ id: true })

const returnMultiCategorySchema = returnCategorySchema.array()

export {
    returnCategorySchema,
    createCategorySchema,
    returnMultiCategorySchema
}