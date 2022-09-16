import { useEffect, useState } from "react";
import GoodsService from "./API/GoodsService";
import AsideButton from "./UI/AsideButton/AsideButton";
import cl from './AsideMenu.module.css'
import { useFetching } from "./hooks/useFetching";
import Loader from './UI/Loader/Loader'

export default function AsideMenu ({categorySelected}) {
    const [categories, setCategories] = useState([])    

    const [fetchCategories, isCategoriesLoading, categoryError] = useFetching(async () => {
        const categoriesList = await GoodsService.getCategories()
        setCategories(categoriesList) 
    })    

    useEffect(() => {
        fetchCategories()
    }, [])        

    return (
        <aside className={cl.aside}>
            {categoryError && <h1>Error: {categoryError}</h1>}
            {isCategoriesLoading
                ? <Loader />
                : 
            <div>
                <AsideButton
                    active={!categorySelected ? true : false}  
                    name='All categories'    />
                {categories.map((category, index) => 
                <AsideButton                     
                    key={index + 1} 
                    active={categorySelected === category ? true : false} 
                    name={category}                   
                />                   
            )}            
            </div>
            }
            
        </aside>
    )
}