import { Request, Response } from "express";
import { GetProductsSalesUseCase } from "./GetProductsSalesProducts";

export class GetProductsSalesController{

    constructor(
        private getProductsSalesUseCase: GetProductsSalesUseCase
    ){}

    async GetProductsSales(req: Request, res: Response): Promise<Response>{

        const findAll = await this.getProductsSalesUseCase.getProductsSales()

        return res.json(findAll)
    }
}