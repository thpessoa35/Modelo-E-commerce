import { IProdutcsRepository } from "../../../Repository/Services/ProductsRepository";
import { UpdateProductDTO } from "./UpdateProductDTO";

export class UpdateProductUseCase{
    constructor(
        private iProdutcsRepository : IProdutcsRepository
    ){}

    async UpdateProduct(data: UpdateProductDTO) {

        try{
            const findID = await this.iProdutcsRepository.GetProductsID(data.idProduct);

            if(!findID){
                throw {type: 'GetIDProduct', message:'Erro ao consultar Produto.'}
            };

             this.iProdutcsRepository.UpdateProducts(data.idProduct, data)


        }catch(error){
            throw error
        }
    }
}