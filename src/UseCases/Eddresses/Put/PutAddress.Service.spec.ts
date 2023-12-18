import { Eddress } from "../../../Entities/Eddress";
import { MockDdressesRepository } from "../../../Repository/Services/EddressRepository"
import { PutAddressUseCase } from "./PutAddressUseCase"
import { PutAdressDTO } from "./PutAdressDTO"

describe('Teste de UseCase e Controller',()=>{
      test('PutAddressUseCase', async ()=>{

            const putAddressUseCase = new PutAddressUseCase(MockDdressesRepository);

            const putAddress: PutAdressDTO = {

                idEdresses: "124567",
                rua: "teste",
                bairro: "teste",
                numero: "124",
                cep: "123467"

            };

            await putAddressUseCase.UpdateEddresss(putAddress);
            
            expect(MockDdressesRepository.UpdateEddress).toHaveBeenCalledWith(

                putAddress.idEdresses,
                expect.objectContaining(putAddress)

            );
            expect(MockDdressesRepository.UpdateEddress).toHaveBeenCalled();
      });  
});