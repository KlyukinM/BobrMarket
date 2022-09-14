import { useEffect, useState } from "react";
import GoodsService from "../components/API/GoodsService";
import { useFetching } from "../components/hooks/useFetching";
import {useParams} from 'react-router-dom'
import cl from './ProductPage.module.css'
import ProductList from "../components/ProductList";
import { Header } from "../components/Header";
import ProductCard from "../components/UI/ProductCard/ProductCard";
import Loader from "../components/UI/Loader/Loader";

export default function ProductPage () {
    let params = useParams()
    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])
    const [fetchOneProduct, isProductLoading, productError] = useFetching(async(id) => {
        const response = await GoodsService.getOneProduct(id)
        setProduct(response)
    })

    useEffect(() => {
        fetchOneProduct(params.id)        
    }, [params])

    const [fetchProductsOfCategory, isProductsOfCategoryLoading, productCategoryError] = useFetching(async(category) => {
        const response = await GoodsService.getProductsOfCategory(category) 
        const filtredProducts = response.products.filter(p => p.id !== product.id)     
        setProducts(filtredProducts)
    })

    useEffect(() => {
        fetchProductsOfCategory(product.category)        
    }, [product])
    

    return (
        <div>
            <Header />
            {productError && <h1>Error: {productError}</h1>}
            {productCategoryError && <h1>Error: {productCategoryError}</h1>}
            {isProductLoading
                ? <Loader />
                : <ProductCard product={product}/>}
            <div className={cl.title}>Recommended items</div>
            {isProductsOfCategoryLoading
                ? <Loader />
                : <ProductList products={products}/>} 
        </div>
    )
}