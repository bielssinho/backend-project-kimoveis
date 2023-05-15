import { Router } from 'express'
import { createRealEstateController, readRealEstateController } from '../controllers/realEstate.controller'
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware'
import isAdminMiddleware from '../middlewares/ensureIsAdmin.middleware'
import ensureTokensIsValidMiddleware from '../middlewares/ensureTokenIsValid.middleware'
import { createRealEstateSchema } from '../schemas/realEstate.schema'

const realEstateRouter: Router = Router()

realEstateRouter.post('', ensureDataIsValidMiddleware(createRealEstateSchema), ensureTokensIsValidMiddleware, isAdminMiddleware, createRealEstateController)
realEstateRouter.get('', readRealEstateController)


export default realEstateRouter
