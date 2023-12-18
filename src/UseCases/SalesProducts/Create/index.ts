import { PostgresRepositoryProducts } from "../../../Repository/PostgresRepositoryProducts";
import { PostgresRepositorySalesProducts } from "../../../Repository/PostgresRepositorySalesProducts";
import { CreateSalesProductsController } from "./CreateSalesProductsController";
import { CreateSalesProductsUseCase } from "./CreateSalesProductsUseCase";

const postgresRepositorySalesProducts = new PostgresRepositorySalesProducts()
const postgresRepositoryProducts = new PostgresRepositoryProducts()

const createSalesProductsUseCase = new CreateSalesProductsUseCase(postgresRepositorySalesProducts, postgresRepositoryProducts);

export const createSalesProductsController = new CreateSalesProductsController(createSalesProductsUseCase)