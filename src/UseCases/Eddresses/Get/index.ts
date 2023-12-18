import { PostgresRepository } from "../../../Repository/PostgresRepositoryUser";
import { PostgresRepositoryEddress } from "../../../Repository/PostgresRepositoryEddress.1";
import { GetAddressController } from "./GetAddressController";
import { GetAddressUseCase } from "./GetAddressUseCase";

const postgresRepositoryEddress = new PostgresRepositoryEddress()

const getAddressUseCase = new GetAddressUseCase(postgresRepositoryEddress)

export const getAddressController = new GetAddressController(getAddressUseCase) 
