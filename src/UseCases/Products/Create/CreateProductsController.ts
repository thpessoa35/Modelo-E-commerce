import { Request, Response } from "express";
import { CreateProductsUseCase } from "./CreateProductsUseCase";

export class CreateProductsController{

    constructor(
      private  createProductsUseCase: CreateProductsUseCase
    ){}
    async Create(req: Request, res: Response): Promise<Response> {
        try {
            const { nameProduct, category, description, price, stockQuantity } = req.body;
    
            await this.createProductsUseCase.CreateProducts({
                nameProduct,
                category,
                description,
                price,
                stockQuantity
            });
    
            return res.json({ message: 'Produto criado com sucesso!' });
        } catch (error: any) {
            if(error.type === 'ErrorCreateProduct'){
                return res.json({message: error.message})
            }
            return res.status(400).send()
        }
    }
}