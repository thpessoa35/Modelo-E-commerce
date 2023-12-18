import { MockDdressesRepository } from "../../../Repository/Services/EddressRepository"
import { GetAddressController } from "./GetAddressController";
import { GetAddressUseCase } from "./GetAddressUseCase"

describe('Teste UseCase e Controllers',()=>{
    test('GetAddressUseCase', async ()=>{

        const getAddressUseCase = new GetAddressUseCase(MockDdressesRepository);

        const GetAddress = {
            idUser: '07470f4d-cebe-43ec-83da-18384322eb32'
        }

        console.log("ID do usuário no teste:", GetAddress.idUser);

        await getAddressUseCase.GetUserEddresses(GetAddress);

        expect(MockDdressesRepository.GetUserEddresses).toHaveBeenCalledWith(GetAddress.idUser);
    })
    test('GetAddressController', async ()=>{
        
        const getAddressUseCase = new GetAddressUseCase(MockDdressesRepository);
         
        const getAddressController = new GetAddressController(getAddressUseCase);

        const RequestMock: any = { params: {idUser:'07470f4d-cebe-43ec-83da-18384322eb32'} };
        const ResponseMock: any = { json: jest.fn() };

        await getAddressController.getAddressUser(RequestMock, ResponseMock);
        
        expect(MockDdressesRepository.GetUserEddresses).toHaveBeenCalledWith('07470f4d-cebe-43ec-83da-18384322eb32')
    })
})
