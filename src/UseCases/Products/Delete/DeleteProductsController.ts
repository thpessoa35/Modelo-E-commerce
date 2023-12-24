import { Request, Response } from "express";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

export class DeleteProductsController {
    constructor(
        private deleteProductUseCase: DeleteProductUseCase
    ) { }
    async Delete(req: Request, res: Response): Promise<Response> {
        try {
            const { idProduct } = req.params;

            await this.deleteProductUseCase.DeleteProducts({ idProduct });

            return res.json({ message: 'Produto Deletado' })
        }
        catch (error: any) {
            if (error.type === 'idProductNotFound') {
                return res.json({ message: error.message });
            }
            return res.status(400).send()
        }


    }
}