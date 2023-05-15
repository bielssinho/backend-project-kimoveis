import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { RealEstate } from '../../entities'
import { AppError } from '../../errors'


const readSchedulesService = async (realEstateId: number) => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    
    const findRealEstate = await realEstateRepository.findOne({
        where: {
            id: realEstateId
        }
    })

    if(!findRealEstate){
        throw new AppError('RealEstate not found', 404)
    }

    const findRealEstateAndSchedules = await realEstateRepository.findOne({
        where: {
            id: realEstateId
        },
        relations: {
            schedules: {
                user: true
            },
            address: true,
            category: true
        }
    })

    return findRealEstateAndSchedules

}

export {
    readSchedulesService
}