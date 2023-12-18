import { PostgresRepositoryEddress } from "../../../Repository/PostgresRepositoryEddress.1";
import { DeleteAddressController } from "./DeleteAddressController";
import { DeleteAddressUseCase } from "./DeleteAddressUseCase";

const postgresRepository = new PostgresRepositoryEddress();
const deleteAddressUseCase = new DeleteAddressUseCase(postgresRepository);
export const deleteAdressController = new DeleteAddressController(deleteAddressUseCase)