import { IDdressesRepository } from "../Repository/Services/EddressRepository";
import UserModel from "../Models/UserModel";
import { Eddress } from "../Entities/Eddress";
import EddressModel from "../Models/EddressModel";



export class PostgresRepositoryEddress implements IDdressesRepository {

  async GetEddresses(): Promise<Eddress[]> {
    const eddressList = await EddressModel.findAll();
    return eddressList;
  };

  async GetEddressID(idEdresses: string): Promise<Eddress | null> {
    const eddress = await EddressModel.findByPk(idEdresses);
    return eddress;
  };

  async DeleteEddress(idEdresses: string): Promise<Eddress | null> {
    const deleteEddress = await EddressModel.findByPk(idEdresses);
    console.log(deleteEddress);

    try {
      await EddressModel.destroy({ where: { idEdresses } });
      return deleteEddress;
    } catch (error) {
      console.error("Erro ao excluir o endereço:", idEdresses);
      throw new Error("Falha ao excluir o endereço");
    };
  };


  async UpdateEddress(idEdresses: string, eddress: Eddress): Promise<void> {

    await EddressModel.update(eddress, { where: { idEdresses } });

  };

  async saveEddresses(eddress: Eddress): Promise<void> {

    await EddressModel.create(eddress as any);

  };

  async GetUserEddresses(idUser: string): Promise<Eddress | null> {
    try {
      const userWithAddresses = await UserModel.findByPk(idUser, {
        include: { association: 'addresses' },
      });

      if (!userWithAddresses) {
        return null;
      };
      return userWithAddresses as any;
    } catch (error) {
      throw error;
    };
  };

}
