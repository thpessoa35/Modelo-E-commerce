import { PostgresRepository } from "../../../Repository/PostgresRepositoryUser";
import { GetUserIDController } from "./GetUserIDController";
import { GetUserIDUseCase } from "./GetUserIDUseCase";

const userRepository = new PostgresRepository()

const useCaseIDUseCase = new GetUserIDUseCase(userRepository)

export const getUserIDController = new GetUserIDController(useCaseIDUseCase)

