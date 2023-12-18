import { Request, Response } from "express";
import { DeleteAddressUseCase } from "./DeleteAddressUseCase";


export class DeleteAddressController {
   
        constructor(
           private deleteAddressUseCase: DeleteAddressUseCase
        ){}
        async DeleteAddressController(req: Request, res: Response): Promise<Response>{
            const { idEdresses } = req.params
            console.log('ID do endereço recebido no controlador:', idEdresses);
            const DeleteAddress = await this.deleteAddressUseCase.DeleteEddresses({idEdresses}) 

            if(DeleteAddress){
                return res.json({message: 'endereço deletado'}) 
            }else{
                return res.json({message: 'erro 404'})
            }
        }
    }
