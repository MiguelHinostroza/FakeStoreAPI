import HttpsFakeStore from "../utils/httpsFakeStore.util";
//import {Product} from "../models/Products";

// se crea una clase
export default class FakeStoreHttp {
    //inicializa una variable estatica de tipo FakeStoreHttp
    public static instance: FakeStoreHttp;
    // se inicializa el constructor vacio
    private constructor() {
    }

    //Singleton para contener una sola instancia de la clase
    public static getInstance(): FakeStoreHttp {
        // se valida si la instancia existe de no existir se crea una nueva
        if(!FakeStoreHttp.instance){
            FakeStoreHttp.instance = new FakeStoreHttp();
        }
        return FakeStoreHttp.instance;
    }

    // Get Products
    async getProducts(): Promise<any>{
        const products: any = await HttpsFakeStore.get(`products`)
        return products;
    }
    // Get Products By id.
    async getProductById(id:string): Promise<any>{
        const product: any = await HttpsFakeStore.get(`products/${id}`);
        return product;
    }

}