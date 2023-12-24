import { IUserRepository } from "../../../Repository/Services/UserRepository";
import { PutUserDTO } from "./PutUserDTO";

export class PutUserUpdateUseCase {
    constructor(
        private usersRepository: IUserRepository
    ) {}

    async UpdateUser(data: PutUserDTO){

        const existingUser = await this.usersRepository.GetUserID(data.id);

        if (!existingUser) {
            throw {type: 'UserNotFound', message: 'Usuario não encontrado.'}
        }

        
        const updatedUser = { ...existingUser, ...data };
        
        
        await this.usersRepository.UpdateUser(updatedUser.id, updatedUser);
    }
}
