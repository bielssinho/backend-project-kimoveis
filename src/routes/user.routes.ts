import { Router } from 'express'
import { createUserController, deleteUserController, readUsersController, updateUserController } from '../controllers/users.controllers'
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware'
import ensureTokensIsValidMiddleware from '../middlewares/ensureTokenIsValid.middleware'
import ensureUserExistsMiddleware from '../middlewares/ensureUserExists.middleware'
import isAdminOrNotMiddleware from '../middlewares/ensureIsAdminOrNot.middleware'
import { userCreateSchema, userUpdateSchema } from '../schemas/users.schemas'
import isAdminMiddleware from '../middlewares/ensureIsAdmin.middleware'

const userRoutes: Router = Router()

userRoutes.post('', ensureDataIsValidMiddleware(userCreateSchema), createUserController)
userRoutes.get('', ensureTokensIsValidMiddleware, isAdminMiddleware, readUsersController)
userRoutes.patch('/:id', ensureDataIsValidMiddleware(userUpdateSchema), ensureTokensIsValidMiddleware, ensureUserExistsMiddleware, isAdminOrNotMiddleware, updateUserController)
userRoutes.delete('/:id', ensureTokensIsValidMiddleware, ensureUserExistsMiddleware, isAdminOrNotMiddleware, deleteUserController)

export default userRoutes