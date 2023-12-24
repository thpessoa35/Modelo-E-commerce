import { IUserRepository } from "../../../Repository/Services/UserRepository";
import { DeleteUserDTO } from "./DeleteUserDTO";

export class DeleteUserUseCase{
    constructor(
        private userRepository: IUserRepository
    ){}

    async DeleteUser(data: DeleteUserDTO){

        const findID = await this.userRepository.GetUserID(data.id);
        if(!findID){
            throw {type: 'UserFindID', message: 'Usuario não encontrado'}
        }
        
        const user = await this.userRepository.Delete(data.id)
        return user;
       
    }
}