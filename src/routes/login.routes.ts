import { Router } from 'express'
import { createLoginController } from '../controllers/login.controllers'
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware'
import { createLoginSchema } from '../schemas/login.schemas'

const loginRouter: Router = Router()

loginRouter.post('', ensureDataIsValidMiddleware(createLoginSchema), createLoginController)

export default loginRouter