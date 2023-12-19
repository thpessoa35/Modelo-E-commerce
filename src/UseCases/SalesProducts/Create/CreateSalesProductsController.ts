import { Response, Request } from "express";
import { CreateSalesProductsUseCase } from "./CreateSalesProductsUseCase";

export class CreateSalesProductsController {
    constructor(private createSalesProductsUseCase: CreateSalesProductsUseCase) { }

    async CreateSalesProducts(req: Request, res: Response): Promise<Response> {
        try {
            const { idProduct, idUser, Quantity } = req.body;

            const Create = await this.createSalesProductsUseCase.CreateSalesProducts({ idProduct, idUser, Quantity });

            return res.json({ message: 'Venda Aprovada.' });

        } catch (error: any) {
            if (error.type === 'ProductNotFound') {

                return res.status(404).json({ error: error.message });

            } else if (error.type === 'InsufficientStock') {

                return res.status(400).json({ error: error.message });
                
            } else {

                console.error(error);
                
                return res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    }
}
