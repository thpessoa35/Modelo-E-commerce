import { PostgresRepository } from "../../../Repository/PostgresRepositoryUser";
import { GetUserController } from "./GetUserController";
import { GetUserUseCase } from "./GetUserUseCase";



const postgresRepository = new PostgresRepository();
const getUserUseCase = new GetUserUseCase(postgresRepository)
export const getUserController = new GetUserController(getUserUseCase)