import { ISalesProductsRepository } from "../../../Repository/Services/SalesProducts";

export class GetProductsSalesUseCase{
    constructor(
        private iSalesProductsRepository: ISalesProductsRepository, 
    ){}
    async getProductsSales(){
        try{
            
            const produtcSales  = await this.iSalesProductsRepository.GetSalesProducts()
            
            return produtcSales
        }catch(error){
            throw error
        }

    }
}
