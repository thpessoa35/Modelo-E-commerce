import { Request, Response } from "express";
import { PutUserUpdateUseCase } from "./PutUserUpdateUseCase";
import { PutUserDTO } from "./PutUserDTO";

export class PutUserUpdateController {
    constructor(private updateUserUseCase: PutUserUpdateUseCase) {}

    async UpdateUser(req: Request, res: Response): Promise<Response> {
        try {
            const { id, name, email, password }: PutUserDTO = req.body;


            await this.updateUserUseCase.UpdateUser({ id, name, email, password });

            return res.json({ message: 'Usuário atualizado com sucesso' });
        } catch (error: any) {
            if(error.type === 'UserNotFound'){
                return res.json({error: error.message});
            };
            return res.status(400)
        }
    }
}
