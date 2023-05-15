import { 
    Column,
    CreateDateColumn,
    Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn 
} from 'typeorm'
import { Address } from './addresses.entitty'
import { Category } from './categories.entity'
import { Schedule } from './schedule.entity'


@Entity('real_estate')
class RealEstate {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('boolean', { nullable: true, default: false })
    sold: boolean

    @Column('decimal', { precision: 12, scale: 2, default: 0 })
    value: number | string

    @Column('integer')
    size: number

    @CreateDateColumn({ type: 'date'})
    createdAt: string

    @UpdateDateColumn({ type: 'date'})
    updatedAt: string

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address

    @ManyToOne(() => Category, category => category.realEstate)
    category: Category

    @OneToMany(() => Schedule, sched => sched.realEstate)
    schedules: Schedule[]
}

export {
    RealEstate
}