import { AppDataSource } from "../config/data-config";
import { User } from "../models/User";

export class UserService{
    private repo = AppDataSource.getRepository(User)

    async create(data:{name:string; email:string; senha:string}){
        const exists = await this.repo.findOne({where:{email:data.email}})

        if(exists)throw new Error("email já cadastrado")
            const user = this.repo.create(data)
         await this.repo.save(user)
         return

    }
    
    async findAll(){
        const users = await this.repo.find()
        return users.map(u =>{
            const clone: any = {...u}

            delete clone.password

            return clone

        })
    }

    async update(id:number, data: Partial<User>){
        const user = await this.repo.findOne({where:{id}})

        if(!user) throw new Error("User nao encontrado")

        if(data.senha){
            user.senha = data.senha
        }    

        const {senha, ...rest} = data

        Object.assign(user,rest)

        return await this.repo.save(user)
    }


}