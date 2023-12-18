import { MockDdressesRepository } from "../../../Repository/Services/EddressRepository"
import { DeleteAddressController } from "./DeleteAddressController";
import { DeleteAddressUseCase } from "./DeleteAddressUseCase"

describe('Teste Delete Product',()=>{

    test('Aprovar teste UseCase', async ()=>{

        const DeleteProduct = {
            idEdresses: '29cd4dfd-694f-49ad-bfe7-2fb2ccfcea5d'
        }

        const deleteAddressUseCase = new DeleteAddressUseCase(MockDdressesRepository)
        
        await deleteAddressUseCase.DeleteEddresses(DeleteProduct)

        expect(MockDdressesRepository.DeleteEddress).toHaveBeenCalledWith(DeleteProduct.idEdresses)

    });

    test('Aprovar test Controller', async()=>{

        const deleteAddressUseCase = new DeleteAddressUseCase(MockDdressesRepository)

        const mockRequest: any = { params: { idEddresses: '29cd4dfd-694f-49ad-bfe7-2fb2ccfcea5d'}};
        const mockResponse: any = {json: jest.fn()}

        const deleteAddressController = new DeleteAddressController(deleteAddressUseCase)

        await deleteAddressController.DeleteAddressController(mockRequest, mockResponse)

        expect(MockDdressesRepository.DeleteEddress).toHaveBeenCalledWith('29cd4dfd-694f-49ad-bfe7-2fb2ccfcea5d')

    });

});