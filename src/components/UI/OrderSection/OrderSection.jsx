import cl from './OrderSection.module.css'

export default function OrderSection ({products, setModal}) {

    let total = products.reduce((acc, elem) => {
        return acc + elem.price
    }, 0)

    return (
        <div className={cl.megawrapper}>
            <div className={cl.wrapper}>
                <div className={cl.title}>Total:</div>
                <div className={cl.price}>{new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(total)}</div>
                <button className={cl.button} onClick={() => setModal(true)}>Go to checkout</button>
            </div>
        </div>
        
    )
}