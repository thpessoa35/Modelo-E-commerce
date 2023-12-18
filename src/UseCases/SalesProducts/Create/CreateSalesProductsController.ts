import { Response, Request } from "express";
import { CreateSalesProductsUseCase } from "./CreateSalesProductsUseCase";

export class CreateSalesProductsController{
    constructor(
       private createSalesProductsUseCase: CreateSalesProductsUseCase 
    ){}
    async CreateSalesProducts(req: Request, res: Response): Promise<Response>{

        const { idProduct , idUser, Quantity } = req.body;
        const Create = await this.createSalesProductsUseCase.CreateSalesProducts({idProduct , idUser, Quantity});

        return res.json({message:'Venda Aprovada.'})
    }
}