import { Eddress } from "../../../Entities/Eddress";
import { IDdressesRepository } from "../../../Repository/Services/EddressRepository";
import { CreateEddressDTO } from "./CreateEddressDTO";

export class CreateEddressesUseCase {
    constructor(
        private iDdressesRepository: IDdressesRepository
    ) { }

    async saveEddresses(createEddressDTO: CreateEddressDTO) {
        try {
            
            const findID = await this.iDdressesRepository.GetUserByID(createEddressDTO.idUser);

            if(!findID){
                throw { type: 'UserNotExist', message: ' Usuario não Encontrado.' }
            }

            const user = new Eddress(createEddressDTO);

            await this.iDdressesRepository.saveEddresses(user);

        } catch (error) {
            throw error
        }
    }
}