import { SalesProducts } from "../Entities/SalesProduct";
import { SalesProductsModel } from "../Models/SalesProduct";
import { ISalesProductsRepository } from "./Services/SalesProducts";


export class PostgresRepositorySalesProducts implements ISalesProductsRepository {
    async GetSalesProducts(): Promise<SalesProducts[]> {
        const findAll = await SalesProductsModel.findAll()
        return findAll as any;
    }
    async GetIDSalesProducts(idSales: string): Promise<SalesProducts | null> {
        const findID = await SalesProductsModel.findByPk(idSales,{
            include: {association: 'product'}
        });
        
        return findID as any;             
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
