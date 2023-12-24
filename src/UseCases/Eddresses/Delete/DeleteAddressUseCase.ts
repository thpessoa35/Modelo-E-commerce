import { IDdressesRepository } from "../../../Repository/Services/EddressRepository";
import { DeleteAddressDTO } from "./DeleteAddressDTO";


export class DeleteAddressUseCase {
    constructor(
        private iDdressesRepository: IDdressesRepository
    ) { }
    async DeleteEddresses(data: DeleteAddressDTO) {

        try{

            const deleteEddress = await this.iDdressesRepository.DeleteEddress(data.idEdresses)
    
            if (!deleteEddress) {
                throw {type:'IdEddressNotFound', message:'IdEddress não Encontrado.'}
            }
            return deleteEddress;

        }catch(error){
            throw error
        }
    }
}