import { z } from 'zod'
import { createSchedulesSchema, returnSchedulesSchema } from '../schemas/schedules.schemas'

type ICreateSchedule = z.infer<typeof createSchedulesSchema>
type ISchedule = z.infer<typeof returnSchedulesSchema>

export {
    ICreateSchedule,
    ISchedule
}