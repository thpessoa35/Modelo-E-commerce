import { Request, Response } from "express";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

export class DeleteProductsController {
    constructor(
        private deleteProductUseCase: DeleteProductUseCase
    ) { }
    async Delete(req: Request, res: Response): Promise<Response> {
        const { idProduct } = req.body;

        await this.deleteProductUseCase.DeleteProducts({ idProduct });

        return res.json({ message: 'Produto Deletado' })
    }
}