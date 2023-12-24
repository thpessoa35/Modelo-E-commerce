import { IProdutcsRepository } from "../../../Repository/Services/ProductsRepository";
import { GetIDProductDTO } from "./GetIDProductDTO";

export class GetIDProductUseCase {
    constructor(
        private iProdutcsRepository: IProdutcsRepository
    ) { }
    async GetProductsID(data: GetIDProductDTO) {

        try {

            const getid = await this.iProdutcsRepository.GetProductsID(data.idProduct);

            if (!getid) {
                throw { type: 'ErrorGetID', message: 'Produto não encontrado.' }
            }
            return getid;

        } catch (error) {
            throw error;
        }
    }
}