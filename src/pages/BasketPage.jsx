import { useContext } from 'react';
import { Header } from '../components/Header';
import { CartContext } from '../context/context';

export default function BasketPage () {
    const {cart} = useContext(CartContext)
    return (
        <div>
            <Header basket={false}/>
            {cart.length && <div>{cart.map((product, index) => 
            <div key={index}>{product.title}</div>)}</div>}
            
        </div>
    )
}