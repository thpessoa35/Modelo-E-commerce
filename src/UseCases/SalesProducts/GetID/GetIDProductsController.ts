import { Request, Response } from "express";
import { GetIDSalesProductsUseCase } from "./GetIDSalesProductsUseCase";

export class GetIDSalesProductController{
    constructor(
         private getIDSalesProductsUseCase: GetIDSalesProductsUseCase
    ){}
    async GetIDSalesProduct(req: Request, res: Response): Promise<Response>{

        const { idSale } = req.params;

        const getSales = await this.getIDSalesProductsUseCase.GetIDSalesProducts({idSale});

        return res.json(getSales);
    }
}