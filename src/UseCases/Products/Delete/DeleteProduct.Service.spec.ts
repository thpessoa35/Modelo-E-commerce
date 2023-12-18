import { MockProdutcsRepository } from "../../../Repository/Services/ProductsRepository"
import { DeleteProductUseCase } from "./DeleteProductUseCase"

describe('Teste Usecase, Controller',()=>{

    test('DeleteProductUseCase', async ()=>{

        const deleteProductUseCase = new DeleteProductUseCase(MockProdutcsRepository);

        const IdProducts = {
            idProduct: '29cd4dfd-694f-49ad-bfe7-2fb2ccfcea5d'
        };

        await expect(deleteProductUseCase.DeleteProducts(IdProducts)).resolves.toBeUndefined();
           
        expect(MockProdutcsRepository.GetProductsID).toHaveBeenCalledWith(IdProducts.idProduct);
        
    });
    
});