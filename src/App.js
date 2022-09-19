import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';
import {useState} from 'react'
// Импортируем хук useContext 
import { CartContext } from './context/context';




function App() {
  // Состояние для корзины 
  const [cart, setCart] = useState([])

  // Функция для добавления товара в корзину 
  const addToCart = item => {    
    setCart([...cart, item])    
  }  

  return (
    <CartContext.Provider 
      value={{
        cart,        
        addToCart
      }}
    >
      <BrowserRouter>        
        <AppRouter /> 
        <Footer />            
      </BrowserRouter>
    </CartContext.Provider>
     
  )
}

export default App;
