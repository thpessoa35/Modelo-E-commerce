import { MockProdutcsRepository } from "../../../Repository/Services/ProductsRepository";
import { MockSalesProductsRepository } from "../../../Repository/Services/SalesProducts";
import { CreateSalesDTO } from "./CreateSalesDTO";
import { CreateSalesProductsUseCase } from "./CreateSalesProductsUseCase";

describe('Teste useCase e Controller',()=>{
    it('should create sales products successfully', async () => {
  

        const createSalesProductsUseCase = new CreateSalesProductsUseCase(
          MockSalesProductsRepository,
          MockProdutcsRepository
        )    
        const createSalesDTO: CreateSalesDTO = {
          idProduct: 'yourProductId',
          idUser: 'yourUserId',
          Quantity: 5,
        };
    
    
        await expect(createSalesProductsUseCase.CreateSalesProducts(createSalesDTO)).rejects.toEqual({
            message: 'Produto com ID yourProductId não encontrado.',
            type: 'ProductNotFound',
        });
       
    });
    
})