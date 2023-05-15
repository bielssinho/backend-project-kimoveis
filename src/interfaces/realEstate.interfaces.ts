import { z } from 'zod'
import { createAddressSchema, createRealEstateSchema, returnAdrressSchema, returnMultRealEstateSchema, returnRealEstateSchema } from '../schemas/realEstate.schema'

type ICreateRealEstate = z.infer<typeof createRealEstateSchema>
type IRealEstate = z.infer<typeof returnRealEstateSchema>
type ICreateAddress = z.infer<typeof  createAddressSchema>
type IAddress = z.infer<typeof returnAdrressSchema>
type IMultRealEstate = z.infer<typeof returnMultRealEstateSchema>

export {
    ICreateRealEstate,
    IRealEstate,
    ICreateAddress,
    IAddress,
    IMultRealEstate
}