import { useState } from "react";
import GoodsService from "../components/API/GoodsService";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { useFetching } from "../components/hooks/useFetching";

export default function ProductPage ({id}) {
    const [product, setProduct] = useState({})
    const [fetchOneProduct, isProductsLoading, productError] = useFetching(async() => {
        const response = await GoodsService.getOneProduct(id)
        setProduct(response)
    })
    return (
        <div>            
            <div>
                <div >{product.title}</div>
                <img  src={product.thumbnail} alt='product'/>
                <div >User rating: <span>{product.rating}/5</span></div>
                <div >{new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(product.price)}</div>
            </div>            
        </div>
    )
}