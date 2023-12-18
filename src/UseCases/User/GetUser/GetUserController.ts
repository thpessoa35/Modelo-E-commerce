import { Request, Response } from "express";
import { GetUserUseCase } from "./GetUserUseCase";
import { IGetRequestDTO } from "./GetUserDTO";


export class GetUserController{

    constructor(
        private getUserUseCase: GetUserUseCase,
    ){}
    async getUsers(req: Request, res: Response): Promise<Response>{

        const requestData: IGetRequestDTO = req.body
        
        const result = await this.getUserUseCase.GetUsers(requestData)

        return res.json(result)
    }
}