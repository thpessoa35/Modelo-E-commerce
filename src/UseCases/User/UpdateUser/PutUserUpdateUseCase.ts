import { IUserRepository } from "../../../Services/UserRepository";
import { PutUserDTO } from "./PutUserDTO";

export class PutUserUpdateUseCase {
    constructor(
        private usersRepository: IUserRepository
    ) {}

    async UpdateUser(data: PutUserDTO){

        const existingUser = await this.usersRepository.GetUserID(data.id);

        if (!existingUser) {
            throw new Error("User not found.");
        }

        
        const updatedUser = { ...existingUser, ...data };
        
        
        await this.usersRepository.UpdateUser(updatedUser.id, updatedUser);
    }
}
