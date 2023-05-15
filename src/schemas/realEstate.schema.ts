import { z } from 'zod'


const createAddressSchema = z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().max(7).optional(),
    city: z.string().max(20),
    state: z.string().max(2)
})

const returnAdrressSchema = createAddressSchema.extend({
    id: z.number()
})

const returnRealEstateSchema = z.object({
    id: z.number(),
    sold: z.boolean().default(false),
    value: z.number() || z.string(),
    size: z.number().int(),
    address: returnAdrressSchema,
    createdAt: z.string(),
    updatedAt: z.string()
})

const createRealEstateSchema = z.object({
    value: z.number().or(z.string()),
    size: z.number().int().positive(),
    address: createAddressSchema,
    categoryId: z.number()
})

const returnMultRealEstateSchema = returnRealEstateSchema.array()


export {
    createRealEstateSchema,
    returnRealEstateSchema,
    createAddressSchema,
    returnAdrressSchema,
    returnMultRealEstateSchema
}
