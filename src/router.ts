import express from "express";
import { createUserController } from "./UseCases/User/CreateUser/index";
import { getUserController } from "./UseCases/User/GetUser/index";
import { getUserIDController } from "./UseCases/User/GetUserID/index";
import { putUserUpdateController } from "./UseCases/User/UpdateUser/index";
import { deleteUserController } from '../src/UseCases/User/DeleteUser/index'
import { createEddressController } from "./UseCases/Eddresses/Create";
import { getAddressController } from "./UseCases/Eddresses/Get";
import { deleteAdressController } from "./UseCases/Eddresses/Delete";
import { putAddressController } from "./UseCases/Eddresses/Put";
import { createProductsController } from "./UseCases/Products/Create";
import { getProductController } from "./UseCases/Products/Get";
import { deleteProductsController } from "./UseCases/Products/Delete";
import { updateProductController } from "./UseCases/Products/Update";
import { getIDProductController } from "./UseCases/Products/GetID";
import { createSalesProductsController } from "./UseCases/SalesProducts/Create";
import { getIDSalesProductsController } from "./UseCases/SalesProducts/GetID";
import { getSalesProductsController } from "./UseCases/SalesProducts/Get";


const router = express.Router();

router.post('/users', (req, res)=>{
    return createUserController.handle(req, res)
});
router.get('/users', (req, res)=>{
    return getUserController.getUsers(req, res)
});
router.get('/users/:id', (req, res)=>{
    return getUserIDController.GetUserID(req, res)
});
router.put('/users', (req,res)=>{
    return putUserUpdateController.UpdateUser(req, res)
});
router.delete('/users/:id',(req,res)=>{
    return deleteUserController.DeleteUser(req, res);
});
router.post('/users/:idUser/eddresses',(req,res)=>{ 
    return createEddressController.CreateEddress(req, res)
});
router.get('/users/:idUser/eddresses',(req,res)=>{ 
    return getAddressController.getAddressUser(req, res)
});
router.delete('/users/eddresses/:idEdresses', (req, res) => {
    return deleteAdressController.DeleteAddressController(req, res);
});
router.put('/users/eddresses/:idEdresses', (req, res)=>{
    return putAddressController.UpdateAddress(req, res)
});
router.get('/products', (req, res)=>{
    return getProductController.FindALL(req, res)
});
router.post('/products', (req, res)=>{
    return createProductsController.Create(req,res)
});
router.delete('/products/:idProduct', (req, res)=>{
    return deleteProductsController.Delete(req ,res)
});
router.put('/products/:idProduct', (req, res)=>{
    return updateProductController.update(req, res)
});
router.get('/products/:idProduct', (req, res)=>{
    return getIDProductController.GetProductsID(req, res)
});

router.post('/salesProducts/idUser/idProducts', (req, res)=>{
    return createSalesProductsController.CreateSalesProducts(req, res)
});
router.get('/salesProducts', (req, res)=>{
    return getSalesProductsController.GetProductsSales(req, res)
})
router.get('/salesProducts/:idSale', (req, res)=>{
    return getIDSalesProductsController.GetIDSalesProduct(req, res)
})


export { router }
