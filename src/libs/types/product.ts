import { ObjectId } from "mongoose";
import { 
    ProductCollection, 
    ProductSize, 
    ProductStatus 
} from "../enum/product.enum";

export interface Product {
    _id:ObjectId;
    productStatus: ProductStatus;
    productCollection: ProductCollection;
    productName: String;
    ProductPrice: number;
    productLeftCount: number;
    productSize: ProductSize;
    productVolume: number;
    productDesc?: String;
    productImages: String[];
    productViews: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface ProductInquiry
{
    order: string;
    page: number;
    limit: number;
    productCollection?: ProductCollection;
    search?: string;
}

export interface ProductInput {
    productStatus?: ProductStatus;
    productCollection: ProductCollection;
    productName: String;
    ProductPrice: number;
    productLeftCount: number;
    productSize?: ProductSize;
    productVolume?: number;
    productDesc?: String;
    productImages?: String[];
    productViews?: number;
}

export interface ProductUpdateInput {
    _id:ObjectId;
    productStatus?: ProductStatus;
    productCollection?: ProductCollection;
    productName?: String;
    ProductPrice?: number;
    productLeftCount?: number;
    productSize?: ProductSize;
    productVolume?: number;
    productDesc?: String;
    productImages?: String[];
    productViews?: number;
}