// Em GetUserIDController.ts

import { Request, Response } from "express";
import { GetUserIDUseCase } from "./GetUserIDUseCase";
import { GetIDUserDTO } from "./GetIDUserDTO";

export class GetUserIDController {
    constructor(
        private getUserUseCase: GetUserIDUseCase,
    ) {}

    async GetUserID(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            
            const userDTO: GetIDUserDTO = { id };

            const users = await this.getUserUseCase.GetUserID(userDTO);

            return res.json(users);
            } 
         catch (error) {
            return res.status(500).json({ message: 'Usuario nao encontrado' });
        }
}
}

