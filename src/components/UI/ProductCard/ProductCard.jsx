import cl from './ProductCard.module.css'

export default function ProductCard ({product}) {
    return (
        <div>
            <div className={cl.title}>{product.title}</div>
                <div className={cl.wrapper}>
                    <div className={cl.image_wrapper}>
                        <img  src={product.thumbnail} alt={product.title}/>
                    </div>
                    <div className={cl.description_wrapper}>
                        <div><span>Category:</span> {product.category}</div>
                        <div><span>Brand:</span> {product.brand}</div>
                        <div><span>User rating:</span> {product.rating}/5</div>
                        <div><span>Stock:</span> {product.stock}</div>
                        <div><span>Discount:</span> {product.discountPercentage}%</div>
                        <div><span>Price:</span> {new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(product.price)}</div>
                    </div>
                    <div className={cl.detailed_description}>{product.description}</div>
                </div> 
        </div>
    )
}