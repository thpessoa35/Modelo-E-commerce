import { Eddress } from "../../Entities/Eddress";

export interface IDdressesRepository {
    GetEddresses(): Promise<Eddress[]>;
    GetUserEddresses(idUser: string): Promise<Eddress | null>
    GetEddressID(id: string): Promise<Eddress | null>;
    UpdateEddress(id: string, data: Eddress): Promise<void>;
    saveEddresses(eddress: Eddress): Promise<void>;
    DeleteEddress(idEdresses: string): Promise<Eddress | null>;
}

export const MockDdressesRepository: IDdressesRepository = {
   
    GetEddresses: jest.fn(),
    GetUserEddresses: jest.fn(),
    GetEddressID: jest.fn(),
    UpdateEddress: jest.fn(),
    DeleteEddress: jest.fn(),
    saveEddresses: jest.fn()
    
};