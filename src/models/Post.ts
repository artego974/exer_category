import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, } from "typeorm";
import { User } from "./User";
import { Category } from "./Category";

@Entity()
export class Post{ 
    @PrimaryGeneratedColumn()
    id: number

    @Column({length:255, nullable:false})
    title: string

    @ManyToOne(()=> User, user => user.posts)
    user: User

    @ManyToOne(()=> Category, category => category.post)
    category: Category
}