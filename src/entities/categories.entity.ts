import { 
    Column,
    Entity, OneToMany, PrimaryGeneratedColumn 
} from 'typeorm'
import { RealEstate } from './realestate.entity'


@Entity('categories')
class Category {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('varchar', { length: 45, unique: true })
    name: string

    @OneToMany(() => RealEstate, reales  => reales.category)
    realEstate: RealEstate[]
}

export {
    Category
}