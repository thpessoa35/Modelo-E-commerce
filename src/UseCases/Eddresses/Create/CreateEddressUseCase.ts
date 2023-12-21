import { Eddress } from "../../../Entities/Eddress";
import { IDdressesRepository } from "../../../Repository/Services/EddressRepository";
import { CreateEddressDTO } from "./CreateEddressDTO";

export class CreateEddressesUseCase {
    constructor(
        private iDdressesRepository: IDdressesRepository
    ) {}

    async saveEddresses(createEddressDTO: CreateEddressDTO){
        try {
        
            const user = new Eddress(createEddressDTO);

            await this.iDdressesRepository.saveEddresses(user);

        } catch (error) {
            throw new Error(`Erro ao salvar endereço:`);
        }
    }
}