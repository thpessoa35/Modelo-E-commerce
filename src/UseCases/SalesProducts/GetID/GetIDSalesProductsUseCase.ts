import { ISalesProductsRepository } from "../../../Repository/Services/SalesProducts";
import { GetIDSalesProductDTO } from "./GetIDSales.DTO";

export class GetIDSalesProductsUseCase {
    constructor(
        private iSalesProductsRepository: ISalesProductsRepository,
    ) { }

    async GetIDSalesProducts(data: GetIDSalesProductDTO) {
        try {
            const idsales = await this.iSalesProductsRepository.GetIDSalesProducts(data.idSale)

            if (idsales === null) {
                throw { type: 'GetIDSales', message: 'Erro ao consultar Venda.' }
            }

            return idsales;
        } catch (error) {
            throw error
        }
    }
}
