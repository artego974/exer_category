import { Request, Response } from "express";
import { AppDataSource } from "../config/data-config";
import { Category } from "../models/Category";

export class CategoryController{
    private cateRepo = AppDataSource.getRepository(Category)

    async list(req:Request, res:Response){
        const Category = this.cateRepo.find({relations:["post", "category"]})
        res.status(200).json(Category)
        return 
    }

    async create(req:Request, res:Response){
        const {title} = req.body
        const Category = this.cateRepo.create({title})

        await this.cateRepo.save(Category)
        res.status(201).json(Category)
        return

    }

}