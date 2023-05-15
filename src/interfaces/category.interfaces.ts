import { z } from 'zod'
import { createCategorySchema, returnCategorySchema } from '../schemas/category.schemas'

type ICreateCategory = z.infer<typeof createCategorySchema>
type ICategory = z.infer<typeof returnCategorySchema>

export {
    ICategory,
    ICreateCategory
}