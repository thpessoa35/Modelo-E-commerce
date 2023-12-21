
import { IUserRepository } from "../../../Repository/Services/UserRepository";
import { IGetRequestDTO } from "./GetUserDTO";

export class GetUserUseCase{

    constructor(
        private userRepository: IUserRepository
    ){}
    async GetUsers(data: IGetRequestDTO){

    const users = await this.userRepository.GetUsers();

    return users;
    
    }    

}