import { SalesProducts } from "../Entities/SalesProduct";
import ProductsModel from "../Models/ProductsModel";
import  SalesProductsModel  from "../Models/SalesProduct";
import UserModel from "../Models/UserModel";
import { ISalesProductsRepository } from "./Services/SalesProducts";


export class PostgresRepositorySalesProducts implements ISalesProductsRepository {
    async GetSalesProducts(): Promise<SalesProducts[]> {
        const findAll = await SalesProductsModel.findAll()
        return findAll as any;
    }
    async GetIDSalesProducts(idSale: string): Promise<SalesProducts | null> {
        try {
            const sale = await SalesProductsModel.findByPk(idSale, {
              include: [
                {
                  model: ProductsModel,
                  attributes: ['idProduct', 'nameProduct', 'category', 'description', 'price', 'stockQuantity'],
                },
                {
                  model: UserModel,
                  attributes: ['id', 'name', 'email'],
                },
              ],
            });
        
            return sale as any
          } catch (error) {
            console.error('Erro ao buscar venda com características do produto e do usuário:', error);
            return null
          }     
    }                   

    async UpdateSalesProducts(idSales: string, data: SalesProducts): Promise<void> {
        await SalesProductsModel.update(data, {where: {idSales} });
    }
    async DeleteSalesProducts(idSales: string): Promise<SalesProducts | null> {
        const findID = await SalesProductsModel.findByPk(idSales);

        if(findID){
            await SalesProductsModel.destroy({where: {idSales}})

            return findID as any;
        }
        return null;

    }
    async CreateSalesProducts(data: SalesProducts): Promise<void> {
        await SalesProductsModel.create({
            idSale: data.idSale,
            idProduct: data.idProduct,
            idUser: data.idUser,
            Quantity: data.Quantity,
            totalPrice: data.totalPrice,
        })
    }
}
