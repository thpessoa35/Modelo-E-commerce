import { IDdressesRepository } from "../../../Repository/Services/EddressRepository";
import { DeleteAddressDTO } from "./DeleteAddressDTO";


export class DeleteAddressUseCase{
    constructor(
        private iDdressesRepository:IDdressesRepository
    ){}
    async DeleteEddresses(data: DeleteAddressDTO){
        

        const deleteEddress = await this.iDdressesRepository.DeleteEddress(data.idEdresses)
        if(!deleteEddress){
            console.error('error na busca de IdEddress')
        }
        return deleteEddress;
    }
}