import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
    constructor(
        private deleteUserUseCase: DeleteUserUseCase
    ) {}

    async DeleteUser(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {

           const user = await this.deleteUserUseCase.DeleteUser({id});

            return res.json({ message: 'Usuário deletado com sucesso.'});
            
        } catch (error) {
            return res.status(404).json({ message: 'Usuário não encontrado.', error });
        }
    }
}
