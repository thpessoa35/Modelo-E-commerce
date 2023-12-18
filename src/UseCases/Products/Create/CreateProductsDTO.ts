export interface CreateProductsDTO{
    nameProduct: string;
    category: string;
    description?: string;
    price: number;
    stockQuantity: number
}