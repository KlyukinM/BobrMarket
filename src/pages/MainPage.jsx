import '../App.css';
import AsideMenu from '../components/AsideMenu';
import {useEffect, useState} from 'react'
import { useFetching } from '../components/hooks/useFetching';
import GoodsService from '../components/API/GoodsService';
import ProductList from '../components/ProductList';

function MainPage() {
  const [categorySelected, setCategorySelected] = useState('All categories')
  const [products, setProducts] = useState([])
  const [totalProducts, setTotalProducts] = useState(100)
  const [limit, setLimit] = useState(8)
  const [skip, setSkip] = useState(0)

  const [fetchProducts, isProductsLoading, productError] = useFetching( async(categorySelected) => {
    if (categorySelected === 'All categories') {
      const response = await GoodsService.getAll(limit, skip)
      setProducts(response.products)
      setTotalProducts(response['total'])      
      console.log(categorySelected)
    } else {
      const response = await GoodsService.getProductsOfCategory(limit, skip, categorySelected)
      setTotalProducts(response['total'])
      setProducts(response.products)     
      console.log(categorySelected)
    }    
  })


  useEffect(() => {fetchProducts(categorySelected)}, [categorySelected])

  useEffect(() => console.log(products), [products])

  return (
    <div className="App">      
      <div className='content_wrapper'>
        <AsideMenu categorySelected={categorySelected} setCategorySelected={setCategorySelected}/>
        <ProductList products={products} /> 
      </div>               
    </div>
  );
}

export default MainPage;
