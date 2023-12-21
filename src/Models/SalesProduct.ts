import { Model, DataTypes } from "sequelize";
import Sequelize from "../Database/pg";
import ProductsModel from "./ProductsModel";
import UserModel from "./UserModel";

class SalesProductsModel extends Model {
  public idSale!: string;
  public idProduct!: string;
  public idUser!: string;
  public Quantity!: number;
  public totalPrice!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

SalesProductsModel.init(
  {
    idSale: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    idProduct: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idUser: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize: Sequelize,
    modelName: 'SalesProducts',
    timestamps: true,
  }
);



export default SalesProductsModel;
