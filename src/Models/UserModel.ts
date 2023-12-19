// UserModel.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../Database/pg';
import EddressModel from './EddressModel';
import { SalesProductsModel } from './SalesProduct';

class UserModel extends Model {
  public id!: string;
  public name!: string;
  public email!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

UserModel.init(
{
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {

    sequelize,
    modelName: 'users',
    timestamps: true,

  }
);

UserModel.hasMany(EddressModel, { foreignKey: 'idUser', as: 'addresses' });
UserModel.hasMany(SalesProductsModel, { foreignKey: 'idUser', as: 'sales' });

export default UserModel;



