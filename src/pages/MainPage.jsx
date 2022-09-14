import '../App.css';
import AsideMenu from '../components/AsideMenu';
import {useEffect, useRef, useState} from 'react'
import { useFetching } from '../components/hooks/useFetching';
import GoodsService from '../components/API/GoodsService';
import ProductList from '../components/ProductList';
import { Header } from '../components/Header';
import Loader from '../components/UI/Loader/Loader';
import { useObserver } from '../components/hooks/useObserver';

function MainPage() {
  const [categorySelected, setCategorySelected] = useState('All categories')
  const [products, setProducts] = useState([])
  const [totalProducts, setTotalProducts] = useState(100)
  const limit = 8
  const [skip, setSkip] = useState(0)
  const lastElement = useRef()

  const [fetchProducts, isProductsLoading, productError] = useFetching( async(categorySelected) => {
    if (categorySelected === 'All categories') {
      const response = await GoodsService.getAll(limit, skip)
      if (skip) {
        setProducts([...products, ...response.products])
      } else {
        setProducts(response.products)
        setTotalProducts(response['total'])
      }     
              
    } else {
      const response = await GoodsService.getProductsOfCategory(categorySelected)
      setTotalProducts(response['total'])
      setProducts(response.products)
    }    
  })

  useEffect(() => {fetchProducts(categorySelected)}, [categorySelected, skip])  

  useObserver(lastElement, skip < totalProducts, isProductsLoading, () => {
    setSkip(skip + limit)
  })

  return (
    <div className="App">
      <Header search='true'/>
      {productError && <h1>Error: {productError}</h1>}      
      <div className='content_wrapper'>
        <AsideMenu categorySelected={categorySelected} setCategorySelected={setCategorySelected}/>
        <ProductList products={products} /> 
        {isProductsLoading && <Loader />}        
      </div>  
      <div ref={lastElement} style={{height: 20, width: '100%', background: 'red'}} />             
    </div>
  );
}

export default MainPage;
