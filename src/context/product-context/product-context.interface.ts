import { Product } from "../../shared/models/product.interface";

export interface IProductContext {
    products: Product[],
    selectProduct: string,
    productDetails: Product | null,
    setSelectProduct?: Function
}