import { NextFunction, Request, Response } from 'express'
import { AppError } from '../errors'
import jwt from 'jsonwebtoken'

const ensureTokensIsValidMiddleware = (req: Request, res: Response, next: NextFunction): Response | void => {

    let token = req.headers.authorization

    if(!token){
        throw new AppError('Missing bearer token', 401)
    }

    token = token.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY!, (error, decored: any) => {
        if(error){
            throw new AppError(error.message, 401)
        }

        req.user = {
            id: Number(decored.sub),
            admin: decored.admin
        }

        return next()
    })

}

export default ensureTokensIsValidMiddleware