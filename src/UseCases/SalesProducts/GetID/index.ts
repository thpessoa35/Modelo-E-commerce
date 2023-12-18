
import { PostgresRepositorySalesProducts } from "../../../Repository/PostgresRepositorySalesProducts";
import { GetIDSalesProductController } from "./GetIDProductsController";
import { GetIDSalesProductsUseCase } from "./GetIDSalesProductsUseCase";


const postgresRepositorySalesProducts = new PostgresRepositorySalesProducts()


const getIDSalesProductsUseCase = new GetIDSalesProductsUseCase(postgresRepositorySalesProducts);

export const getIDSalesProductsController = new GetIDSalesProductController(getIDSalesProductsUseCase)