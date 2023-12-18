import { PostgresRepositoryProducts } from "../../../Repository/PostgresRepositoryProducts";
import { CreateProductsController } from "./CreateProductsController";
import { CreateProductsUseCase } from "./CreateProductsUseCase";

const iProdutcsRepository = new PostgresRepositoryProducts();

const createProductsUseCase = new CreateProductsUseCase(iProdutcsRepository);

export const createProductsController = new CreateProductsController(createProductsUseCase)
