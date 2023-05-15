import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { RealEstate, Schedule, User } from '../../entities'
import { AppError } from '../../errors'
import { ICreateSchedule, ISchedule } from '../../interfaces/schedules.interfaces'


const createSchedulesService = async (scheduleData: ICreateSchedule, idUser: number): Promise<any> => {

    const userId: number = idUser

    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)


    const findUser = await userRepository.findOneBy({
        id: userId
    })

    const findRealEstate = await realEstateRepository.findOneBy({
        id: scheduleData.realEstateId
    })

    if(!findRealEstate){
        throw new AppError('RealEstate not found', 404)
    }
    
    const findSchedule = await scheduleRepository.createQueryBuilder('scheds').
    select(['scheds']).
    where('scheds.date = :date', { date: scheduleData.date }).
    andWhere('scheds.hour = :hour', { hour: scheduleData.hour }).
    andWhere('scheds.realEstateId = :realEstateId', { realEstateId: scheduleData.realEstateId }).
    getOne()

    const findScheduleByUser = await userRepository.createQueryBuilder('users').
    innerJoinAndSelect('users.schedules', 'scheds').
    where('users.id = :id', { id: userId }).
    andWhere('scheds.date = :date', { date: scheduleData.date }).
    andWhere('scheds.hour = :hour', { hour: scheduleData.hour }).
    getOne()

    if(findSchedule){
        throw new AppError('Schedule to this real estate at this date and time already exists', 409)
    }

    if(findScheduleByUser){
        throw new AppError('User schedule to this real estate at this date and time already exists', 409)
    }

    const aData = scheduleData.date.split('/')
    const dataComplete = aData.join('-') + 'T' + scheduleData.hour
    const fullDate = new Date(dataComplete)
    const hour: number = fullDate.getHours()
    const dateStringReturn = fullDate.toString()
    const dayOfWeek = dateStringReturn.split(' ')

    if(8 > hour || hour > 18){
        throw new AppError('Invalid hour, available times are 8AM to 18PM', 400)
    }

    if(dayOfWeek[0] === 'Sat' || dayOfWeek[0] === 'Sun'){
        throw new AppError('Invalid date, work days are monday to friday', 400)
    }

    const schedule = {
        ...scheduleData,
        realEstate: findRealEstate!,
        user: findUser!
    }

    const newSchedule = scheduleRepository.create(schedule)
    
    await scheduleRepository.save(schedule)
    
    return newSchedule

}

export default createSchedulesService