import { PostgresRepositoryProducts } from "../../../Repository/PostgresRepositoryProducts";
import { DeleteProductUseCase } from "./DeleteProductUseCase";
import { DeleteProductsController } from "./DeleteProductsController";


const postgresRepositoryProducts = new PostgresRepositoryProducts()

const deleteProductUseCase = new DeleteProductUseCase(postgresRepositoryProducts)

export const deleteProductsController = new DeleteProductsController(deleteProductUseCase)