import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { RealEstate } from '../../entities'


const readRealEstateService = async (): Promise<RealEstate[]> => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const listRealEstate: Array<RealEstate> = await realEstateRepository.find({
        relations: {
            address: true
        }
    })
    
    return listRealEstate

}

export default readRealEstateService