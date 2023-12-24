import { Request, Response } from "express";
import { CreateEddressesUseCase } from "./CreateEddressUseCase";


export class CreateEddressController {
    constructor(
        private createEddressUseCase: CreateEddressesUseCase
    ) { }
    async CreateEddress(req: Request, res: Response): Promise<Response> {
        try {

            const { idUser } = req.params;
            const { rua, bairro, numero, cep } = req.body;

            const user = await this.createEddressUseCase.saveEddresses({ idUser, rua, bairro, numero, cep })

            return res.json({ message: 'endereço criado com sucesso' })

        }
        catch (error: any) {

            if (error.type === 'UserNotExist') {
                return res.json({ error: error.message })
            }
            return res.status(400).json({message: 'Erro ao Criar Address'})
        }

    }
}