import { Request, Response } from "express";
import { GetAddressUseCase } from "./GetAddressUseCase";

export class GetAddressController {
  constructor(private getAddressUseCase: GetAddressUseCase) { }

  async getAddressUser(req: Request, res: Response): Promise<Response> {
    try {
      const { idUser } = req.params;

      const result = await this.getAddressUseCase.GetUserEddresses({ idUser });

      return res.json(result);

    } catch (error: any) {

      if(error.type === 'ErrorAssociate'){
        return res.json({error: error.message})
      }
      
      return res.status(400).json({message: 'erro 404'});
      
    }
  }

}
