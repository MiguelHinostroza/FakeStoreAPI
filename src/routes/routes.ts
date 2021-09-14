import {IRoute} from "../models/IRoute";
import HomePage from "../Pages/HomePage";
import ProductPage from "../Pages/ProductPage";

export default [
    {
        component: HomePage,
        name: 'home',
        path: '/',
        exact: true
    },
    {
        component: ProductPage,
        name: 'products-id',
        path: '/products/:id',
        exact: true
    }

]as IRoute[];