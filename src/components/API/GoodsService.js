import axios from 'axios';

export default class GoodsService {
    static async getAll(limit = 10, skip = 0) {
        const response = await axios.get('https://dummyjson.com/products', {
            params: {
                limit: limit,
                skip: skip
            }            
        })
        return response.data          
    }

    static async getProductsOfCategory(limit = 10, skip = 0, category) {
        const response = await axios.get(`https://dummyjson.com/products/category/${category}`, {
            params: {
                limit: limit,
                skip: skip
            }            
        })
        return response.data             
    }

    static async getOneProduct(id) {
        const response = await axios.get(`https://dummyjson.com/products/${id}`)
        return response.data             
    }

    static async getCategories() {
        const response = await axios.get('https://dummyjson.com/products/categories')
        return response.data             
    }

    
}