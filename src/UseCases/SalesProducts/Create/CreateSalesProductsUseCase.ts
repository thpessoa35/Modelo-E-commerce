import { SalesProducts } from "../../../Entities/SalesProduct";
import { IProdutcsRepository } from "../../../Repository/Services/ProductsRepository";
import { ISalesProductsRepository } from "../../../Repository/Services/SalesProducts";
import { CreateSalesDTO } from "./CreateSalesDTO";

export class CreateSalesProductsUseCase {
    constructor(
        private iSalesProductsRepository: ISalesProductsRepository,
        private iProductRepostory: IProdutcsRepository
    ) { }

    async CreateSalesProducts(data: CreateSalesDTO) {

        try {

            const productsExists = await this.iProductRepostory.GetProductsID(data.idProduct);

            const productPrice = await this.iProductRepostory.GetStockPrice(data.idProduct);


            if (!productsExists) {
                throw { type: 'ProductNotFound', message: `Produto com ID ${data.idProduct} não encontrado.` };
            };

            const stockQuantity = await this.iProductRepostory.GetStockQuantity(data.idProduct);

            if (stockQuantity < data.Quantity) {

                throw { type: 'InsufficientStock', message: `Quantidade insuficiente em estoque para o produto com ID ${data.idProduct}.` }

            };

            if (stockQuantity >= data.Quantity) {

                const newStockQuantity = stockQuantity - data.Quantity;

                await this.iProductRepostory.updateProductStock(data.idProduct, newStockQuantity);



                const salesProducts = new SalesProducts({
                    idProduct: data.idProduct,
                    idUser: data.idUser,
                    Quantity: data.Quantity,
                    price: productPrice
                });

                await this.iSalesProductsRepository.CreateSalesProducts(salesProducts);
            };
        } catch (error) {
            throw error;
        }
    }
};
