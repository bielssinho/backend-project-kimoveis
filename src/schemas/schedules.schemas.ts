import { z } from  'zod'

const returnSchedulesSchema = z.object({
    id: z.number(),
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number().int(),
    userId: z.number()
})

const createSchedulesSchema = returnSchedulesSchema.omit({
    id: true,
    userId: true
})


export {
    returnSchedulesSchema,
    createSchedulesSchema
}