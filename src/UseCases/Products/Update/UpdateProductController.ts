import { Request, Response } from "express";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

export class UpdateProductController {
    constructor(
        private updateProductUseCase: UpdateProductUseCase
    ) {}

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const { idProduct } = req.params; 
            const { nameProduct, category, description, price,stockQuantity } = req.body;

            const updatedProduct = await this.updateProductUseCase.UpdateProduct({
                idProduct,
                nameProduct,
                category,
                description,
                price,
                stockQuantity
            });

            return res.json({ message: 'Produto alterado com sucesso.', update: updatedProduct });
        } catch (error) {
            console.error("Erro ao atualizar produto:", error);
            return res.status(500).json({ error: 'Erro interno do servidor ao atualizar produto.' });
        }
    }
}
