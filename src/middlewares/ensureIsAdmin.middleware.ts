import { NextFunction, Request, Response } from 'express'
import { AppError } from '../errors'

const isAdminMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const isAdmin: boolean = req.user.admin

    if(!isAdmin){
        throw new AppError('Insufficient permission', 403)
    }

    return next()
}

export default isAdminMiddleware