import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities'
import { IUserUpdate } from '../../interfaces/users.interfaces'
import { returnUserSchema } from '../../schemas/users.schemas'



const updateUserService = async (updateUserData: IUserUpdate, idUser: number): Promise<any> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const oldUserData = await userRepository.findOneBy({
        id: idUser
    })

    const user = userRepository.create({
        ...oldUserData,
        ...updateUserData
    })

    await userRepository.save(user)

    const updateUser = returnUserSchema.parse(user)

    return updateUser
    
}

export default updateUserService