import { useNavigate } from 'react-router-dom'
import BuyButton from '../BuyButton/BuyButton'
import cl from './ProductCard.module.css'

export default function ProductCard ({product}) {
    const navigate = useNavigate()
    return (
        <div>
            <div className={cl.title}>{product.title}</div>
                <div className={cl.wrapper}>
                    <div className={cl.image_wrapper}>
                        <img  src={product.thumbnail} alt={product.title}/>
                    </div>
                    <div className={cl.description_wrapper}>
                        <div 
                            onClick={() => navigate(`/${product.category}`, {replace: true})}
                            className={cl.link}
                        >
                            <span>Category: </span> 
                            {product.category}
                        </div>
                        <div><span>Brand:</span> {product.brand}</div>
                        <div><span>User rating:</span> {product.rating}/5</div>
                        <div><span>Stock:</span> {product.stock}</div>
                        <div><span>Discount:</span> {product.discountPercentage}%</div>
                        <div><span>Price:</span> {new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(product.price)}</div>
                    </div>
                    <BuyButton>BUY IT!</BuyButton>
                    <div className={cl.detailed_description}>{product.description}</div>
                </div> 
        </div>
    )
}