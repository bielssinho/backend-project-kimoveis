import { DeepPartial } from 'typeorm'
import { z } from 'zod'
import {
    userCreateSchema, 
    returnUserSchema,
    userUpdateSchema
} from '../schemas/users.schemas'

type ICreateUser = z.infer<typeof userCreateSchema>
type IUser = z.infer<typeof returnUserSchema>
type IUpUser = z.infer<typeof userUpdateSchema>
type IUserUpdate = DeepPartial<ICreateUser>

export {
    ICreateUser,
    IUser,
    IUserUpdate
}