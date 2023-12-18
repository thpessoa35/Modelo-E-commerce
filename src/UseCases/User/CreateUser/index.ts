import { PostgresRepository } from "../../../Repository/PostgresRepositoryUser";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";


const postgresRepository = new PostgresRepository();

const createUserUseCase = new CreateUserUseCase(postgresRepository)
export const createUserController = new CreateUserController(createUserUseCase)
