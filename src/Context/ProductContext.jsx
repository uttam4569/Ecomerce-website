import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductContextWrapper = ({ children }) => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = 'https://dummyjson.com/products?limit=0';
   
    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const response = await axios.get(url);
            setProduct(response.data.products);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ProductContext.Provider value={{ product, setProduct, loading, error }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => {
    return useContext(ProductContext);
};
