import { useMemo } from 'react';

export const useSorting = (products, value) => {
    const sortedProducts = useMemo(() => {    
        if(value) {
            if (value === 'price-to-high') {
                return [...products].sort((a, b) => a.price - b.price)
            } else if (value === 'price-to-low') {
                return [...products].sort((a, b) => b.price - a.price)
            } else if (value === 'rating-to-high') {
                return [...products].sort((a, b) => a.rating - b.rating)
            } else if (value === 'rating-to-low') {
                return [...products].sort((a, b) => b.rating - a.rating)
            }          
        }
        return products
      }, [value, products])

      return sortedProducts
}

export default useSorting
