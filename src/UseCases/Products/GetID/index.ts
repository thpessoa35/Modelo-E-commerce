import { PostgresRepositoryProducts } from "../../../Repository/PostgresRepositoryProducts";
import { GetIDProductController } from "./GetIDProductController";
import { GetIDProductUseCase } from "./GetIDProductUseCase";

const postgresRepository = new PostgresRepositoryProducts()

const getidProductUseCase = new GetIDProductUseCase(postgresRepository)

export const getIDProductController = new GetIDProductController(getidProductUseCase)