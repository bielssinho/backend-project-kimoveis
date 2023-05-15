import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities'
import { AppError } from '../../errors'
import { ICreateUser, IUser } from '../../interfaces/users.interfaces'
import { returnUserSchema } from '../../schemas/users.schemas'

const createUserService = async (userData: ICreateUser): Promise<IUser> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOne({
        where: {
            email: userData.email
        }
    })

    if(findUser){
        throw new AppError('Email already exists', 409)
    }

    const user: User = userRepository.create(userData)

    await userRepository.save(user)

    const newUser = returnUserSchema.parse(user)

    return newUser

}

export default createUserService