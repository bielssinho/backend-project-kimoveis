import { Request, Response } from 'express'
import createRealEstateService from '../services/realEstate/createRealEstate.service'
import readRealEstateService from '../services/realEstate/readRealEstate.service'

const createRealEstateController = async (req: Request, res: Response): Promise<Response> => {
    
    const realEstateData = req.body

    const newRealEstate = await createRealEstateService(realEstateData)
    
    return res.status(201).json(newRealEstate)
}


const readRealEstateController = async (req: Request, res: Response): Promise<Response> => {
    
    const listRealEstate = await readRealEstateService()
    
    return res.status(200).json(listRealEstate)
}

export {
    createRealEstateController,
    readRealEstateController
}