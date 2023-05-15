import { 
    Column,
    Entity, ManyToOne, PrimaryGeneratedColumn
} from 'typeorm'
import { RealEstate } from './realestate.entity'
import { User } from './users.entity'


@Entity('schedules_users_properites')
class Schedule {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('date')
    date: string

    @Column('time')
    hour: string

    @ManyToOne(() => RealEstate)
    realEstate: RealEstate

    @ManyToOne(() => User)
    user: User

}

export {
    Schedule
}