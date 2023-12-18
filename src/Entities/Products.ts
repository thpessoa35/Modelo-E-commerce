import { v4 as uuidv4 } from "uuid";

export class Products {
    public readonly idProduct: string;
    public nameProduct?: string;
    public category?: string;
    public description?: string;
    public price: number;
    public stockQuantity?: number;

    constructor(props: Omit<Products, 'idProduct'>, idProduct?: string) {

        this.nameProduct = props.nameProduct;
        this.category = props.category;
        this.description = props.description;
        this.price = props.price;
        this.stockQuantity = props.stockQuantity

        if (!idProduct) {
            this.idProduct = uuidv4();
        } else {
            this.idProduct = idProduct;
        };
    };
};
