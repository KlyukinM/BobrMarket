import { useContext } from 'react'
import { CartContext } from '../../../context/context'
import cl from './BuyButton.module.css'

export default function BuyButton ({children, product}) {
    const {addToCart} = useContext(CartContext)
    const clickFunction = e => {
        e.stopPropagation()
        addToCart(product)
    }

    return (
        <button onClick={clickFunction} className={cl.button}>{children}</button>
    )
}