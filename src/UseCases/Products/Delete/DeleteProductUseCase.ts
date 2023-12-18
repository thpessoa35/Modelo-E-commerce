import { IProdutcsRepository } from "../../../Repository/Services/ProductsRepository";
import { DeleteProductDTO } from "./DeleteProductDTO";


export class DeleteProductUseCase {
    constructor(
        private iProdutcsRepository: IProdutcsRepository
    ) {}
    async DeleteProducts(data: DeleteProductDTO) {

        const deleteProduct = await this.iProdutcsRepository.GetProductsID(data.idProduct)

        return deleteProduct;
    }
}