import { Products } from "../../../Entities/Products";
import { MockProdutcsRepository } from "../../../Repository/Services/ProductsRepository"
import { CreateProductsController } from "./CreateProductsController";
import { CreateProductsDTO } from "./CreateProductsDTO";
import { CreateProductsUseCase } from "./CreateProductsUseCase"

describe('Teste UseCase, Controller',()=>{
    test('CreateProductUseCase', async ()=>{
        const createProductsUseCase = new CreateProductsUseCase(MockProdutcsRepository);

        const CreateProduct = { 

            nameProduct: 'teste',
            category: 'test',
            description: 'test',
            price: 19,
            stockQuantity: 2
            
        };

        await createProductsUseCase.CreateProducts(CreateProduct);

        expect(MockProdutcsRepository.save).toHaveBeenLastCalledWith(expect.any(Products));

    });
    
    test('CreateProductController', async ()=>{
        
        const createProductsUseCase = new CreateProductsUseCase(MockProdutcsRepository);

        const createProductsController = new CreateProductsController(createProductsUseCase);


        const MockRequest: any = {

            body:{
                category: 'test',
                description: 'test',
                nameProduct: 'teste',
                price: 19,
                stockQuantity: 2
            }     
        };
        
        const MockResponse: any = { json: jest.fn() };

        await createProductsController.Create(MockRequest, MockResponse);

        expect(MockProdutcsRepository.save).toHaveBeenCalledWith(expect.any(Products));

        expect(MockResponse.json).toHaveBeenCalledWith({message:'Produto criado com sucesso!'});
    })

});


