import MainPage from "../pages/MainPage";
import ProductPage from "../pages/ProductPage";


export const routes = [
    {path: '/', element: MainPage},    
    {path: '/product/:id', element: ProductPage}, 
    
]