import { Request, Response } from "express";
import { GetAddressUseCase } from "./GetAddressUseCase";

export class GetAddressController {
  constructor(private getAddressUseCase: GetAddressUseCase) {}

  async getAddressUser(req: Request, res: Response): Promise<Response> {
    try {
      const { idUser } = req.params;
      const result = await this.getAddressUseCase.GetUserEddresses({ idUser });
      return res.json(result);
    } catch (error) {
      console.error("Error em GetAddressUser:", error);
      return res.status(500).json({message: 'usuario não encontrado!'});
    }
  }
  
}
