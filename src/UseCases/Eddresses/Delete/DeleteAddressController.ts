import { Request, Response } from "express";
import { DeleteAddressUseCase } from "./DeleteAddressUseCase";


export class DeleteAddressController {

    constructor(
        private deleteAddressUseCase: DeleteAddressUseCase
    ) { }
    async DeleteAddressController(req: Request, res: Response): Promise<Response> {

        try {

            const { idEdresses } = req.params

            const DeleteAddress = await this.deleteAddressUseCase.DeleteEddresses({ idEdresses })

            return res.json({ message: 'Endereço deletado com sucesso.' })

        } catch (error: any) {

            if (error.type === 'IdEddressNotFound') {
                return res.json({ error: error.message })
            }
            return res.status(400).json('Erro 400')

        }
    }
}
