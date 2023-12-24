import { IUserRepository } from "../../../Repository/Services/UserRepository";
import { User } from "../../../Entities/User";
import { ICreateUserRequestDTO } from "./CreateUserDTO" 

export class CreateUserUseCase{
    constructor(
        private usersRepository: IUserRepository
    ){}

    async execute(data: ICreateUserRequestDTO){

        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if(userAlreadyExists){
            throw {type: 'alrady Exist', message: 'Email alrady Exist'};
        }
        const user = new User(data);

        await this.usersRepository.save(user);
    }
}
