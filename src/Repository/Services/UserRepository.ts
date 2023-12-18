import { User } from "../../Entities/User";

export interface IUserRepository {
    GetUsers(): Promise<User[]>;
    GetUserID(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    UpdateUser(id: string, data: User): Promise<void>;
    save(user: User): Promise<void>;
    Delete(id: string): Promise<User | null>;
}
