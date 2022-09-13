import { useEffect, useState } from "react";
import GoodsService from "./API/GoodsService";
import AsideButton from "./UI/AsideButton/AsideButton";
import cl from './AsideMenu.module.css'
import { useFetching } from "./hooks/useFetching";
import Loader from './UI/Loader/Loader'

export default function AsideMenu ({categorySelected, setCategorySelected}) {
    const [categories, setCategories] = useState(['All categories'])    

    const [fetchCategories, isCategoriesLoading, categoryError] = useFetching(async () => {
        const categoriesList = await GoodsService.getCategories()
        setCategories([...categories, ...categoriesList.data]) 
    })

    useEffect(() => {
        fetchCategories()
    }, [])    

    const categorySelect = category => setCategorySelected(category) 

    return (
        <aside className={cl.aside}>
            {categoryError && <h1>Error: {categoryError}</h1>}
            {isCategoriesLoading
                ? <Loader />
                : 
            <div>
                {categories.map((category, index) => 
                <AsideButton 
                    categorySelect={categorySelect}
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