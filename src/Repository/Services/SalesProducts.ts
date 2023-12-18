import { SalesProducts } from '../../Entities/SalesProduct'  

export interface ISalesProductsRepository {

    GetSalesProducts(): Promise<SalesProducts[]>;
    GetIDSalesProducts(idSales: string): Promise<SalesProducts | null>;
    UpdateSalesProducts(idSales: string, data: SalesProducts): Promise<void>;
    DeleteSalesProducts(idSales: string): Promise<SalesProducts | null>;
    CreateSalesProducts(data: SalesProducts): Promise<void>;

};  

export const MockSalesProductsRepository: ISalesProductsRepository = {

    GetSalesProducts: jest.fn(),
    GetIDSalesProducts: jest.fn(),
    UpdateSalesProducts: jest.fn(),
    DeleteSalesProducts: jest.fn(),
    CreateSalesProducts: jest.fn()

};