import { getRounds, hashSync } from 'bcryptjs'
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany,
    BeforeInsert,
    BeforeUpdate,
    AfterLoad
} from 'typeorm'
import { Schedule } from './schedule.entity'

@Entity('users')
class User {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('varchar', { length: 45 })
    name: string

    @Column('varchar', { length: 45, unique: true })
    email: string

    @Column('boolean', { default: false })
    admin: boolean

    @Column('varchar', { length: 120 })
    password: string

    @CreateDateColumn({type:'date'})
    createdAt: string

    @UpdateDateColumn({type:'date'})
    updatedAt: string

    @DeleteDateColumn({type:'date'})
    deletedAt: string

    @OneToMany(() => Schedule, sched => sched.user)
    schedules: Schedule[]

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const isEncrypt = getRounds(this.password)
        if(!isEncrypt){
            this.password = hashSync(this.password, 10)
        }
    }
    

}

export {
    User
}