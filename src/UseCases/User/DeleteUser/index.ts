import { PostgresRepository } from "../../../Repository/PostgresRepositoryUser";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

const postgresRepository = new PostgresRepository();
const deleteUserUseCase = new DeleteUserUseCase(postgresRepository)
export const deleteUserController = new DeleteUserController(deleteUserUseCase)