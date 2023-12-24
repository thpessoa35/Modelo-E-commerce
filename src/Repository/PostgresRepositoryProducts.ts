import { IProdutcsRepository } from "./Services/ProductsRepository";
import { Products } from "../../src/Entities/Products";
import ProductsModel from "../Models/ProductsModel";



export class PostgresRepositoryProducts implements IProdutcsRepository {
  async GetProducts(): Promise<Products[]> {
    const products = await ProductsModel.findAll();
    return products;
  };

  async GetProductsID(idProduct: string): Promise<Products | null> {
    const product = await ProductsModel.findByPk(idProduct);
    console.log(idProduct);
    return product;
  };

  async UpdateProducts(idProduct: string, data: Products): Promise<void> {
    await ProductsModel.update(data, { where: { idProduct } });
  };

  async DeleteProducts(idProduct: string): Promise<Products | null> {
    const findID = await ProductsModel.findByPk(idProduct);

    if (findID) {
      await ProductsModel.destroy({ where: { idProduct } });

      return findID;
    };

    return null;

  };

  async save(data: Products): Promise<void> {
    await ProductsModel.create(data as any);
  };

  async GetStockQuantity(idProduct: string): Promise<number> {
    const product = await ProductsModel.findByPk(idProduct);

    if (!product) {
      throw new Error(`Produto com ID ${idProduct} não encontrado.`);
    }

    return product.stockQuantity;
  }

  async updateProductStock(idProduct: string, newStockQuantity: number): Promise<void> {

    await ProductsModel.update({ stockQuantity: newStockQuantity }, { where: { idProduct } });
  }

  async GetStockPrice(idProduct: string): Promise<number> {

    const productPrice = await ProductsModel.findByPk(idProduct);

    if (!productPrice) {
      throw new Error(`Price não ${idProduct} não encontrado.`);
    }

    return productPrice.price;
  }
}


