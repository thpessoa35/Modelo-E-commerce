import { Request, Response } from "express";
import { GetProductsUseCase } from "./GetProductsUseCase";

import { GetProductsDTO } from "./GetProdutcsDTO";

export class GetProductController{
    constructor(
        private getProductsUseCase : GetProductsUseCase
    ){}
    async FindALL(req: Request, res: Response): Promise<Response> {

        const requestData: GetProductsDTO = req.body
        
        const findAll = await this.getProductsUseCase.GetProducts(requestData)

        return res.json(findAll)
    }
}