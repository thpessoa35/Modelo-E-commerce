// EddressModel.ts
import { DataTypes, Model } from 'sequelize';
import Sequelize from '../Database/pg';

class EddressModel extends Model {
  public idEdresses!: string;
  public rua!: string;
  public bairro!: string;
  public numero!: string;
  public cep!: string;
  public idUser!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

EddressModel.init({
  idEdresses: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  rua: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bairro: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numero: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cep: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idUser: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
}, {
  sequelize: Sequelize,
  modelName: 'eddresses',
  timestamps: true,
});

EddressModel.belongsTo(EddressModel, { foreignKey: 'idUser', as: 'user' });


export default EddressModel;



