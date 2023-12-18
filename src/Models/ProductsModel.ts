import { Model, DataTypes } from "sequelize";
import Sequelize from "../Database/pg";
import { SalesProductsModel } from "./SalesProduct";


export class ProductsModel extends Model{
    
    public idProduct!: string;
    public nameProduct!: string;
    public category!: string;
    public description!: string;
    public price!: number; 
    public stockQuantity!: number

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}

ProductsModel.init({
    idProduct:{
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    nameProduct:{
        type: DataTypes.STRING,
        allowNull: false
    },
    
    category:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    price:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    stockQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }  
},{
    sequelize: Sequelize,
    modelName: 'products',
    timestamps: true,
});


ProductsModel.hasMany(SalesProductsModel, { foreignKey: 'idProduct', as: 'sales' });
