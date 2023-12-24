
import { GetIDProductUseCase } from "./GetIDProductUseCase";
import { Response, Request } from "express";

export class GetIDProductController {
    constructor(
        private getIDProductUseCase: GetIDProductUseCase
    ) { }
    async GetProductsID(req: Request, res: Response): Promise<Response> {

        try {
            const { idProduct } = req.params

            const getid = await this.getIDProductUseCase.GetProductsID({ idProduct });

            return res.json(getid)

        } catch (error: any) {
            if (error.type === 'ErrorGetID') {
                return res.json({ message: error.message })
            }

            return res.status(400).send()
        }

    }

}