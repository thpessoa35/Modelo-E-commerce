import { IProdutcsRepository } from "../../../Repository/Services/ProductsRepository";
import { GetProductsDTO } from "./GetProdutcsDTO";

export class GetProductsUseCase{
    constructor(
        private iProdutcsRepository : IProdutcsRepository
    ){}
    async GetProducts(data: GetProductsDTO) {

        try{

            const find = await this.iProdutcsRepository.GetProducts();

            if(!find){
                throw {type: 'ErrorGetProducts', message: 'Erro ao consultar Produtos.'}
            }

            return find
            
        }catch(error){
            throw error
        }
    }
}