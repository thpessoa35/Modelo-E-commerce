import { Request, Response } from "express";
import { PutUserUpdateUseCase } from "./PutUserUpdateUseCase";
import { PutUserDTO } from "./PutUserDTO";

export class PutUserUpdateController {
    constructor(private updateUserUseCase: PutUserUpdateUseCase) {}

    async UpdateUser(req: Request, res: Response): Promise<Response> {
        try {
            const { id, name, email, password }: PutUserDTO = req.body;

            // Valide os dados conforme necessário...

            // Chame o caso de uso para atualizar o usuário
            await this.updateUserUseCase.UpdateUser({ id, name, email, password });

            return res.json({ message: 'Usuário atualizado com sucesso' });
        } catch (error) {
            console.error("Erro ao atualizar usuário:", error);
            return res.status(500).json({ error: "Erro interno do servidor" });
        }
    }
}
