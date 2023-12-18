import { PostgresRepositoryEddress } from "../../../Repository/PostgresRepositoryEddress.1";
import { CreateEddressController } from "./CreateEddressController";
import { CreateEddressesUseCase } from "./CreateEddressUseCase";

const postgresRepositoryEddress = new PostgresRepositoryEddress()

const createEddressUseCase = new CreateEddressesUseCase(postgresRepositoryEddress);
export const createEddressController = new CreateEddressController(createEddressUseCase)
