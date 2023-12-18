import { PostgresRepositoryProducts } from "../../../Repository/PostgresRepositoryProducts";
import { GetProductController } from "./GetProductsController";
import { GetProductsUseCase } from "./GetProductsUseCase";

const iProdutcsRepository = new PostgresRepositoryProducts();

const getProductsUseCase = new GetProductsUseCase(iProdutcsRepository);

export const getProductController = new GetProductController(getProductsUseCase)