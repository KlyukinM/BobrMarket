import { useContext } from 'react'
import { CartContext } from '../../../context/context'
import cl from './ModalWindow.module.css'

export default function ModalWindow ({visible, setVisible}) {

    const rootClasses = [cl.myModal]
    if (visible) {
        rootClasses.push(cl.active)
    }
    
    const {setCart} = useContext(CartContext)

    const clickFunction = () => {
        setVisible(false)
        setCart([])
    }
    return (
        <div 
         className={rootClasses.join(' ')}
         onClick={clickFunction}
        >
            <div 
                className={cl.myModalContent}
                onClick={e => e.stopPropagation()}
            >
                <div className={cl.content}>
                    <p className={cl.title}>Dear Customer!</p>
                    <p>Thank you for your fake order in our fake shop!</p>
                    <p>Have a nice day!</p>
                    <p className={cl.signature}>Sincerely yours,</p>
                    <p>BobrMarket</p>
                </div>
                
            </div>
        </div>        
    )
}