import { ISalesProductsRepository } from "../../../Repository/Services/SalesProducts";

export class GetProductsSalesUseCase{
    constructor(
        private iSalesProductsRepository: ISalesProductsRepository, 
    ){}
    async getProductsSales(){
       const produtcSales  = await this.iSalesProductsRepository.GetSalesProducts()

       return produtcSales
    }
}
