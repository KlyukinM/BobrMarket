import { useContext, useState } from 'react';
import { Header } from '../components/Header';
import BasketProduct from '../components/UI/BasketProduct/BasketProduct';
import { CartContext } from '../context/context';
import cl from './BasketPage.module.css'
import { Link } from 'react-router-dom';
import OrderSection from '../components/UI/OrderSection/OrderSection';
import ModalWindow from '../components/UI/ModalWindow/ModalWindow';

export default function BasketPage () {
    const {cart} = useContext(CartContext)
    const [modal, setModal] = useState(false)

    // Переменная для пустой корзины
    let basketIsFull = Boolean(cart.length)

    const sortedProducts = [...cart].sort((a, b) => a.id - b.id)

    return (
        <div>
            <Header basket={false}/>
            <h2 className={cl.page_title}>Your Shopping Cart</h2>
            {basketIsFull 
                ? <div className={cl.wrapper}>
                    <div className={cl.products}>
                        {sortedProducts.map((product, index) => 
                        <BasketProduct key={index} product={product}/>)}
                    </div>
                    <div className={cl.order}>
                        <OrderSection products={sortedProducts} setModal={setModal}/>
                    </div>
                </div>
                : <div>
                    <h1 className={cl.title}>is still empty...</h1>
                    <h2 className={cl.subtitle}><Link to='/'><span className={cl.link}>Add items</span></Link> to buy</h2>
                </div>}  
            <ModalWindow visible={modal} setVisible={setModal} />
                        
        </div>
    )
}