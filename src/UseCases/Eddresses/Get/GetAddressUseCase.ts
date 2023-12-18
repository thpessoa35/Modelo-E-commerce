import { IDdressesRepository } from "../../../Repository/Services/EddressRepository";
import { GetAdressDTO } from "./GetAddressDTO";

export class GetAddressUseCase {
    constructor(private iUEddressRepository: IDdressesRepository) {}
  
    async GetUserEddresses(save: GetAdressDTO) {
      try {
        const addresses = await this.iUEddressRepository.GetUserEddresses(save.idUser);
  
        return addresses;
        
      } catch (err) {
        throw err;
      }
    }
  }
  
