import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities'

const deleteUserService = async (userId: number): Promise<void> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id: userId
        }
    })

    await userRepository.softRemove(user!)

}

export default deleteUserService