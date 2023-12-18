import { Products } from "../../Entities/Products";

export interface IProdutcsRepository {
    GetProducts(): Promise<Products[]>;
    GetProductsID(idProduct: string): Promise<Products | null>;
    UpdateProducts(idProduct: string ,data: Products): Promise<void>;
    DeleteProducts(idProduct: string): Promise<Products | null>;
    GetStockQuantity(idProduct: string): Promise<number>;
    updateProductStock(idProduct: string, newStockQuantity: number): Promise<void>
    GetStockPrice(idProduct: string, ): Promise<number>
    save(data: Products): Promise<void>;
}

export const MockProdutcsRepository: IProdutcsRepository = {
   
    GetProducts: jest.fn(),
    GetProductsID: jest.fn(),
    UpdateProducts: jest.fn(),
    DeleteProducts: jest.fn(),
    GetStockQuantity: jest.fn(),
    updateProductStock: jest.fn(),
    GetStockPrice: jest.fn(),
    save: jest.fn(),
    
};