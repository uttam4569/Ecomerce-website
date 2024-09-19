import React from 'react'
import { useProduct } from '../Context/ProductContext'
import { useCart } from '../Context/CartContext'

function Products() {
    const { product } = useProduct()
    const { cartItems, setCartItems } = useCart()

    const handleCart = (id) => {
        const cartProduct = product.find(prod => prod.id === id)
        const alreadyAdded = cartItems.find(cart => cart.id === id)

        if (alreadyAdded) {
            const updatedCart = cartItems.map(cart => {
                if (cart.id === id) {
                    return { ...cart, count: cart.count + 1 } // Avoid mutation
                }
                return cart
            })
            setCartItems(updatedCart)
        } else {
            setCartItems([...cartItems, { ...cartProduct, count: 1 }])
        }
    }

    return (
        <>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-screen">
                {
                    product.map(prod => {
                        return (
                            <div key={prod.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow 
                                    dark:bg-gray-800 dark:border-gray-700">
                                <img className="p-8 rounded-t-lg h-[350px]" src={prod.images[0]} alt="product image" />
                                <div className="px-5 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 
                                   dark:text-white">{prod.title}</h5>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                        &#8377; {prod.price}
                                    </span>
                                    <button className="text-white bg-blue-700 hover:bg-blue-800 
                                    focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
                                    text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
                                  dark:focus:ring-blue-800"
                                        onClick={() => handleCart(prod.id)}
                                    >Add to cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Products
