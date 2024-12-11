import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    setPassword(password) {
        return this.password = password + 'Hashed'
    }

    comparePassword(password) {
        return this.password === password
    }
}