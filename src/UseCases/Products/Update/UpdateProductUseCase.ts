import { IProdutcsRepository } from "../../../Repository/Services/ProductsRepository";
import { UpdateProductDTO } from "./UpdateProductDTO";

export class UpdateProductUseCase{
    constructor(
        private iProdutcsRepository : IProdutcsRepository
    ){}

    async UpdateProduct(data: UpdateProductDTO) {
           const update = await this.iProdutcsRepository.UpdateProducts(data.idProduct, data)
           return update
    }
}