import { ObjectId } from "mongoose";
import { 
    ProductCollection, 
    ProductSize, 
    ProductStatus 
} from "../enum/product.enum";

export interface Product {
    _id:ObjectId;
    productSatus: ProductStatus;
    productCollection: ProductCollection;
    productName: String;
    ProductPrice: Number;
    productLeftCount: Number;
    productSize: ProductSize;
    productVolume: Number;
    productDesc?: String;
    productImages: String[];
    productViews: Number;
}

export interface ProductInput {
    productSatus?: ProductStatus;
    productCollection: ProductCollection;
    productName: String;
    ProductPrice: Number;
    productLeftCount: Number;
    productSize?: ProductSize;
    productVolume?: Number;
    productDesc?: String;
    productImages?: String[];
    productViews?: Number;
}