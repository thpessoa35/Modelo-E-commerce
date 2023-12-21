 
import { PostgresRepositorySalesProducts } from "../../../Repository/PostgresRepositorySalesProducts";
import { GetProductsSalesController } from "./GetProductsSalesController";
import { GetProductsSalesUseCase } from "./GetProductsSalesProducts";


const postgresRepositorySalesProducts = new PostgresRepositorySalesProducts()


const getSalesProductsUseCase = new GetProductsSalesUseCase(postgresRepositorySalesProducts);

export const getSalesProductsController = new GetProductsSalesController(getSalesProductsUseCase)