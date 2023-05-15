import { Router } from 'express'
import { createSchedulesController, readSchedulesController } from '../controllers/schedules.controllers'
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware'
import isAdminMiddleware from '../middlewares/ensureIsAdmin.middleware'
import ensureTokensIsValidMiddleware from '../middlewares/ensureTokenIsValid.middleware'
import { createSchedulesSchema } from '../schemas/schedules.schemas'

const schedulesRouter: Router = Router()

schedulesRouter.post('', ensureTokensIsValidMiddleware, ensureDataIsValidMiddleware(createSchedulesSchema), createSchedulesController)
schedulesRouter.get('/realEstate/:id', ensureTokensIsValidMiddleware, isAdminMiddleware, readSchedulesController)

export default schedulesRouter
