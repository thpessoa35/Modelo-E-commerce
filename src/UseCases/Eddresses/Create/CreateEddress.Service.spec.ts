import { CreateEddressesUseCase } from "./CreateEddressUseCase";
import {  MockDdressesRepository } from "../../../Repository/Services/EddressRepository";
import { Eddress } from "../../../Entities/Eddress";
import { CreateEddressController } from "./CreateEddressController";
 

describe('CreateEddressesUseCase', () => {
  it('deve salvar um endereço corretamente', async () => {
    
    const createEddressDTO = {
        idUser: "07470f4d-cebe-43ec-83da-18384322eb32",
        rua: "Rua Teste",
        bairro: "Bairro Teste",
        numero: "123",
        cep: "12345-678",
      };
    
    const createEddressesUseCase = new CreateEddressesUseCase(MockDdressesRepository);

    
    await createEddressesUseCase.saveEddresses(createEddressDTO);

    
    expect(MockDdressesRepository.saveEddresses).toHaveBeenCalledWith(expect.any(Eddress));
  });

});

describe('CreateEddressesController',()=>{
    it('deve retornar um produto correto', async ()=>{
        const createEddressController = new CreateEddressController(
            new CreateEddressesUseCase(MockDdressesRepository)
        )

        const mockRequest: any = {
            params: { idUser: '07470f4d-cebe-43ec-83da-18384322eb32' },
            body: {
              rua: "test",
              bairro: "Bairro Teste",
              numero: "123",
              cep: "12345-678",
            },
          } 

        const mockResponse: any = {
            json: jest.fn(),
        };

        await createEddressController.CreateEddress(mockRequest, mockResponse);
        expect(MockDdressesRepository.saveEddresses).toHaveBeenCalledWith(expect.any(Eddress));
        expect(mockResponse.json).toHaveBeenCalledWith({ message: 'endereço criado com sucesso' });
    });
});
