export interface PutUserDTO{
    id: string;
    name?: string;
    email?: string;
    password?: string
    [key: string]: any;
}