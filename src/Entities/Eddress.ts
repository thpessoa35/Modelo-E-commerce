import { v4 as uuidv4 } from "uuid";

export class Eddress {
    public readonly idEdresses: string;
    public idUser?: string;
    public rua?: string;
    public bairro?: string;
    public numero?: string;
    public cep?: string;

    constructor(props: Omit<Eddress, 'idEdresses'>, idEdresses?: string) {
        this.rua = props.rua;
        this.idUser = props.idUser;
        this.bairro = props.bairro;
        this.numero = props.numero;
        this.cep = props.cep;

        if (!idEdresses) {
            this.idEdresses = uuidv4();
        } else {
            this.idEdresses = idEdresses;
        };
    };
};


