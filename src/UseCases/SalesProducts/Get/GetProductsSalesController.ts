import { Request, Response } from "express";
import { GetProductsSalesUseCase } from "./GetProductsSalesProducts";

export class GetProductsSalesController{

    constructor(
        private getProductsSalesUseCase: GetProductsSalesUseCase
    ){}

    async GetProductsSales(req: Request, res: Response): Promise<Response>{
        try{
            
            const findAll = await this.getProductsSalesUseCase.getProductsSales();
            
            return res.json(findAll);
        }catch(error: any){
            return res.status(400).json({message: 'Erro ao consultar Venda.'})
        }

    };
};