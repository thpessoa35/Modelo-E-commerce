import { IProdutcsRepository } from "../../../Repository/Services/ProductsRepository";
import { Products } from "../../../Entities/Products";

import { CreateProductsDTO } from "./CreateProductsDTO";

export class CreateProductsUseCase{
    constructor(
       private iProdutcsRepository : IProdutcsRepository
    ){}
    async CreateProducts(data: CreateProductsDTO){
        
        const products = new Products(data);

        await this.iProdutcsRepository.save(products);
    }
}