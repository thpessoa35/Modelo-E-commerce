import { IDdressesRepository } from "../../../Repository/Services/EddressRepository";
import { PutAdressDTO } from "./PutAdressDTO";

export class PutAddressUseCase{
    constructor(
       private iEddressRepository: IDdressesRepository
    ){}
    async UpdateEddresss(data: PutAdressDTO){
        const PutAddress = await this.iEddressRepository.UpdateEddress(data.idEdresses, data);

        return PutAddress;
    }
}