export interface UpdateProductDTO{
    idProduct: string;
    nameProduct?: string;
    category?: string;
    description?: string;
    price?: number;
    stockQuantity?: number
}