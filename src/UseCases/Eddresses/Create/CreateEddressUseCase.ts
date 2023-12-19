import { IDdressesRepository } from "../../../Repository/Services/EddressRepository";
import { Eddress } from "../../../Entities/Eddress";
import { CreateEddressDTO } from "./CreateEddressDTO";


export class CreateEddressesUseCase{
    constructor(
        private iDdressesRepository: IDdressesRepository
    ){}
    async saveEddresses(createEddressDTO:CreateEddressDTO){

        const user = new Eddress(createEddressDTO);

        await this.iDdressesRepository.saveEddresses(user);
    };
};