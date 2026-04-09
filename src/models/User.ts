import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BeforeInsert, BeforeUpdate } from "typeorm";
import { Post } from "./Post";
import dotenv from "dotenv";
import bcrypt from "bcrypt"

dotenv.config()

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 255, nullable:false})
    name: string

    @Column({length: 255, nullable:false, unique:true})
    email:string

    @Column({length:255, nullable:false})
    senha:string

    @OneToMany(()=> Post, post => post.user)
    posts: Post[]

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(){
        const rounds = Number(process.env.BCRYPT_SALT_ROUNDS || 10)
        this.senha = await bcrypt.hash(this.senha, rounds)
    }

    async validateSenha(plain:string) {
        return bcrypt.compare(plain, this.senha)
    }
}