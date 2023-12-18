import { v4 as uuidv4 } from "uuid";

export class SalesProducts {
    public readonly idSale: string;
    public idProduct: string;
    public idUser: string;
    public Quantity: number;
    public totalPrice: number;
    public price: number

    constructor(props: Omit<SalesProducts, 'idSale' | 'totalPrice'>) {

        this.idSale = uuidv4();
        this.idProduct = props.idProduct;
        this.idUser = props.idUser;
        this.Quantity = props.Quantity;
        this.price = props.price;
        this.totalPrice = this.CalculeteTotalPrice( this.price, this.Quantity);
        
    };

    private CalculeteTotalPrice(price: number, quantity: number): number{
        
        const pricePerUnit: number = price || 0; 
        return pricePerUnit * quantity;

    };
};


