import { IUserRepository } from "../../Repository/UserRepository";
import { User } from "../../entities/User";
import { GetIDUserDTO } from "./GetIDUserDTO";


export class GetUserIDUseCase{

    constructor(
        private getIdRepository: IUserRepository
    ){}
    async GetUserID(data: GetIDUserDTO){

       const userID = await this.getIdRepository.GetUserID(data.id)
       
        if(!userID){
            throw new Error('Usuario nao encontrado')
        }
       return userID
    }

}