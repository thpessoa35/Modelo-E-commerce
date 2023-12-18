
import { GetIDProductUseCase } from "./GetIDProductUseCase";
import { Response, Request } from "express";

export class GetIDProductController{
    constructor(
       private getIDProductUseCase: GetIDProductUseCase
    ){}
    async GetProductsID(req:Request, res: Response): Promise<Response>{
        
        try{
            const { idProduct } = req.params
    

            const getid = await this.getIDProductUseCase.GetProductsID({idProduct})
            if(!getid){
                return res.json({message: 'id nao correspondente'})
            }
            return res.json(getid)

        }catch(err){
            return res.status(404).json({message:'Erro ao consultar Produto'})
        }

        }

}