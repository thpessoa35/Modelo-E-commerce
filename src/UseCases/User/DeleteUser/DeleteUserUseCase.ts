import { IUserRepository } from "../../../Repository/Services/UserRepository";
import { DeleteUserDTO } from "./DeleteUserDTO";

export class DeleteUserUseCase{
    constructor(
        private userRepository: IUserRepository
    ){}

    async DeleteUser(data: DeleteUserDTO){
        
        const user = await this.userRepository.Delete(data.id)
        return user;
       
    }
}