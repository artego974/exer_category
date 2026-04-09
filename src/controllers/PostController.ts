import { Request, Response } from "express";
import { AppDataSource } from "../config/data-config";
import { User } from "../models/User";
import { Post } from "../models/Post";
import { Category } from "../models/Category";

export class PostController{
    private postRepo = AppDataSource.getRepository(Post)
    private userRepo = AppDataSource.getRepository(User)
    private cateRepo = AppDataSource.getRepository(Category)

    async list (req:Request, res:Response){
        const post = await this.postRepo.find({relations:["user", "category"]})
         res.status(200).json(post)
         return
    }

    async create(req:Request, res:Response){
        const {title, userId, categoryId} = req.body
        const user = await this.userRepo.findOneBy({id: userId})
        const category = await this.cateRepo.findOneBy({id: categoryId})

        if(!user) return res.status(404).json({message: "user nao encontrado"})
        if(!category) return res.status(404).json({message: "categoria nao encontrada"})

        const post = this.postRepo.create({title, user,category})
        await this.postRepo.save(post)
        res.status(201).json(post)
        return

    }
}