import { IProdutcsRepository } from "../../../Repository/Services/ProductsRepository";
import { GetProductsDTO } from "./GetProdutcsDTO";

export class GetProductsUseCase{
    constructor(
        private iProdutcsRepository : IProdutcsRepository
    ){}
    async GetProducts(data: GetProductsDTO) {
       const find = await this.iProdutcsRepository.GetProducts()
       return find
    }
}