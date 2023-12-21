import { ISalesProductsRepository } from "../../../Repository/Services/SalesProducts";
import { GetIDSalesProductDTO } from "./GetIDSales.DTO";

export class GetIDSalesProductsUseCase {
    constructor(
        private iSalesProductsRepository: ISalesProductsRepository,
    ) {}

    async GetIDSalesProducts(data: GetIDSalesProductDTO) {
        try {
            const idsales = await this.iSalesProductsRepository.GetIDSalesProducts(data.idSale)

            return idsales;
        } catch (error ) {
            throw new Error(`Erro ao obter ID de venda: `);
        }
    }
}
