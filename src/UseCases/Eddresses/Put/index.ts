import { PostgresRepositoryEddress } from "../../../Repository/PostgresRepositoryEddress.1";
import { PutAddressController } from "./PutAddressController";
import { PutAddressUseCase } from "./PutAddressUseCase";

const iEddressRepository = new PostgresRepositoryEddress();
const putAddressUseCase = new PutAddressUseCase(iEddressRepository);
export const putAddressController = new PutAddressController(putAddressUseCase)