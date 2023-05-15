import { Request, Response } from 'express'
import { ICreateSchedule } from '../interfaces/schedules.interfaces'
import createSchedulesService from '../services/schedules/createSchedules.service'
import { readSchedulesService } from '../services/schedules/readSchedules.service'

const createSchedulesController = async (req: Request, res: Response): Promise<Response> => {
    
    const schedulesData: ICreateSchedule = req.body
    const userId: number = req.user.id

    await createSchedulesService(schedulesData, userId)

    return res.status(201).json({
        message: 'Schedule created'
    })
}

const readSchedulesController = async (req: Request, res: Response): Promise<Response> => {

    const realEstateId: number = +req.params.id

    const listSchedules = await readSchedulesService(realEstateId)

    return res.status(200).json(listSchedules)
}

export {
    createSchedulesController,
    readSchedulesController
}