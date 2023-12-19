import { IUserRepository } from "./Services/UserRepository";
import { User } from "../Entities/User";
import UserModel from "../Models/UserModel";



export class PostgresRepository implements IUserRepository {

  async GetUsers(): Promise<User[]> {
    const users = await UserModel.findAll()
    return users;
  };

  async GetUserID(id: string): Promise<User | null> {
    const user = await UserModel.findByPk(id);
    return user
  };

  async findByEmail(email: string): Promise<User | null> {
    if (!email) {
      return null;
    };
    const user = await UserModel.findOne({ where: { email } });
    return user
  };

  async UpdateUser(id: string, data: User): Promise<void> {
    await UserModel.update(data, { where: { id } });
  };

  async save(user: User): Promise<void> {
    await UserModel.create(user as any);
  };

  async Delete(id: string): Promise<User | null> {
    const userToDelete = await UserModel.findByPk(id);

    if (userToDelete) {
      await UserModel.destroy({ where: { id } });
      return userToDelete;
    } else {
      return null;
    };
  };

};



