import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import {useEffect, useState} from 'react'
// Импортируем хук useContext 
import { CartContext } from './context/context';

export default function App() {
  // Состояние для корзины 
  const [cart, setCart] = useState([])

  // Функция для добавления товара в корзину 
  const addToCart = item => {    
    setCart([...cart, item])    
  }  

  // Функция для удаления товара из корзины
  const removeFromCart = product => {
    const indexOfProduct = cart.indexOf(product) 
    const newCart = [...cart]
    newCart.splice(indexOfProduct, 1)      
    setCart(newCart)
  }


  return (
    <CartContext.Provider 
      value={{
        cart,
        setCart,        
        addToCart,
        removeFromCart
      }}
    >
      <BrowserRouter>        
        <AppRouter />                    
      </BrowserRouter>
    </CartContext.Provider>
     
  )
}
