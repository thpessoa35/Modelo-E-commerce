import { IDdressesRepository } from "../../../Repository/Services/EddressRepository";
import { PutAdressDTO } from "./PutAdressDTO";

export class PutAddressUseCase{
    constructor(
       private iEddressRepository: IDdressesRepository
    ){}
    async UpdateEddresss(data: PutAdressDTO){
        try{
            const findByPk = await this.iEddressRepository.GetEddressID(data.idEdresses)

            if(!findByPk){
                throw { type:'IdEddressNotFound', message:'Endereço não encontrado.'};
            }

            await this.iEddressRepository.UpdateEddress(data.idEdresses, data);
    
        }
        catch(error){
            throw error
        }
    }
}