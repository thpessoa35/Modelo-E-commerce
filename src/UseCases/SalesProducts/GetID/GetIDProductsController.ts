import { Request, Response } from "express";
import { GetIDSalesProductsUseCase } from "./GetIDSalesProductsUseCase";

export class GetIDSalesProductController {
    constructor(
        private getIDSalesProductsUseCase: GetIDSalesProductsUseCase
    ) { }
    async GetIDSalesProduct(req: Request, res: Response): Promise<Response> {

        try {
            const { idSale } = req.params;

            const getSales = await this.getIDSalesProductsUseCase.GetIDSalesProducts({ idSale });

            return res.json(getSales);
        } catch (error: any) {
            if (error.type === 'GetIDSales') {
                return res.json({ message: error.message });
            }
            return res.status(400).send();
        };
    };
};