import { Request, Response } from "express";
import { PutAddressUseCase } from "./PutAddressUseCase";

export class PutAddressController {
    constructor(
        private putAddressUseCase: PutAddressUseCase
    ) { }
    async UpdateAddress(req: Request, res: Response): Promise<Response> {
        const { idEdresses } = req.params;
        const { rua, bairro, numero, cep } = req.body;

        try {
            const PutAddress = await this.putAddressUseCase.UpdateEddresss({ idEdresses, rua, bairro, numero, cep })

            return res.json({ message: 'Endereço Atualizado com sucesso.', PutAddress })
        } catch (error: any) {
            if (error.type === 'IdEddressNotFound') {
                return res.json({ message: error.message })
            }
            return res.status(400).json({ message: 'Erro ao alterar Dados.' })
        }
    }

}