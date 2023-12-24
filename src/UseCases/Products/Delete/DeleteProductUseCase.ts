import { IProdutcsRepository } from "../../../Repository/Services/ProductsRepository";
import { DeleteProductDTO } from "./DeleteProductDTO";


export class DeleteProductUseCase {
    constructor(
        private iProdutcsRepository: IProdutcsRepository
    ) { }
    async DeleteProducts(data: DeleteProductDTO) {
        try {

            const deleteProduct = await this.iProdutcsRepository.GetProductsID(data.idProduct);

            if (!deleteProduct) {
                throw { type: 'idProductNotFound', message: 'Produto não encontrado.' };
            };

            return deleteProduct;

        } catch (error) {
            throw error;
        };

    };
};