import { NextFunction, Request, Response } from 'express'
import { AppError } from '../errors'

const isAdminOrNotMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const authenticateUser = req.user

    if(authenticateUser.admin !== true && authenticateUser.id !== +req.params.id){
        throw new AppError('Insufficient permission', 403)
    }

    return next()
}

export default isAdminOrNotMiddleware