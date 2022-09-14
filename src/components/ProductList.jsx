import Product from "./UI/Product/Product";
import cl from './ProductList.module.css'

export default function ProductList ({products}) {
    return (
        <div className={cl.product_list}>            
                {products.map((item, index) =>
                    <Product key={index + 1} product={item} />
                )}                      
        </div>
    )
}