import './App.css';
import AsideMenu from './components/AsideMenu';
import { Header } from './components/Header';
import logo from './images/logo.png'
import {useEffect, useState} from 'react'
import { useFetching } from './components/hooks/useFetching';
import GoodsService from './components/API/GoodsService';

function App() {
  const [categorySelected, setCategorySelected] = useState('All categories')
  const [totalProducts, setTotalProducts] = useState()

  const [fetchAllProducts, isProductsLoading, productError] = useFetching( async() => {
    const response = await GoodsService.getAll(limit, skip)
    setTotalProducts(response['total'])

  })

  useEffect(() => console.log(categorySelected), [categorySelected])

  return (
    <div className="App">
      <Header logo={logo} />
      <AsideMenu categorySelected={categorySelected} setCategorySelected={setCategorySelected}/>      
    </div>
  );
}

export default App;
