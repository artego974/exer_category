import { Request, Response } from "express";
import { AppDataSource } from "../config/data-config";
import { User } from "../models/User";

export class UserController{
    private userRepo = AppDataSource.getRepository(User)

    async list(req:Request, res:Response){
        const user = this.userRepo.find({relations:["posts"]})
        return res.status(200).json(user)
         
    }

    async create(req:Request, res:Response){
        const {name, email, senha} = req.body
        const user = this.userRepo.create({name,email,senha})

        await this.userRepo.save(user)

        return res.status(201).json(user)

    }

}