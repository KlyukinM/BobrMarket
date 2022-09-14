import cl from './Product.module.css'

export default function Product ({product}) {    
    return (
        <div className={cl.product}>
            <div className={cl.img_wrapper}>                
                <img className={cl.img} src={product.thumbnail} alt='product'/>
            </div>            
            <div>
                <div className={cl.title}>{product.title}</div>
                <div className={cl.rating}>User rating: <span>{product.rating}/5</span></div>
                <div className={cl.price}>{new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(product.price)}</div>
            </div>
        </div>
    )
}