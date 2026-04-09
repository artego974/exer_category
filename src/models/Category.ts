import { Entity,PrimaryGeneratedColumn, Column,  OneToMany} from "typeorm";
import { Post } from "./Post";

@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    id: number

    @Column({length:255, nullable:false})
    title:string

    @OneToMany(()=> Post, post => post.category)
    post: Post
}