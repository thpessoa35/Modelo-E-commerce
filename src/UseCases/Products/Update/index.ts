import { PostgresRepositoryProducts } from "../../../Repository/PostgresRepositoryProducts";
import { UpdateProductController } from "./UpdateProductController";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

const iProdutcsRepository = new PostgresRepositoryProducts();

const updateProcuctUseCase = new UpdateProductUseCase(iProdutcsRepository);

export const updateProductController = new UpdateProductController(updateProcuctUseCase)