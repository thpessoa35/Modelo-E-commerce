import { PostgresRepository } from "../../../Repository/PostgresRepositoryUser";
import { PutUserUpdateController } from "./PutUserUpdateController";
import { PutUserUpdateUseCase } from "./PutUserUpdateUseCase";

const userRepository = new PostgresRepository();

const putUserUpdateUseCase = new PutUserUpdateUseCase(userRepository);

export const putUserUpdateController = new PutUserUpdateController(putUserUpdateUseCase);