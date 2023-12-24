import { Request, Response } from "express";
import { GetProductsUseCase } from "./GetProductsUseCase";

import { GetProductsDTO } from "./GetProdutcsDTO";

export class GetProductController {
    constructor(
        private getProductsUseCase: GetProductsUseCase
    ) { }
    async FindALL(req: Request, res: Response): Promise<Response> {


        try {
            const requestData: GetProductsDTO = req.body

            const findAll = await this.getProductsUseCase.GetProducts(requestData)

            return res.json(findAll)

        } catch (error: any) {
            if (error.type === 'ErroErrorGetProducts') {
                return res.json({ message: error.message })
            }
            return res.status(400).send()
        }



    }
}