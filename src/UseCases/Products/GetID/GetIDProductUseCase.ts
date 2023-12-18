import { IProdutcsRepository } from "../../../Repository/Services/ProductsRepository";
import { GetIDProductDTO } from "./GetIDProductDTO";

export class GetIDProductUseCase{
    constructor(
       private iProdutcsRepository: IProdutcsRepository
    ){}
    async GetProductsID(data: GetIDProductDTO){
        const getid = await this.iProdutcsRepository.GetProductsID(data.idProduct);

        if(!getid){
            throw console.error('erro no id')
        }
        return getid;
    }    
}