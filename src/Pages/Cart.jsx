import React from 'react'
import { useCart } from '../Context/CartContext';
import { useProduct } from '../Context/ProductContext';
import '@fortawesome/fontawesome-free/css/all.min.css'

function Cart() {
    const { cartItems, setCartItems } = useCart()
    // console.log(cartItems);
const incqty=(id)=>
{
    const updatedCt = cartItems.map(cart => {
        if (cart.id == id) {
            cart.count = cart.count + 1
        }
        return cart
    })
    setCartItems(updatedCt)

}
const decqty=(id)=>
    {
        const updated = cartItems.map(cart => {
            if (cart.id == id) {
                if(cart.count>1)
                {
                    cart.count = cart.count -1
                }
            }
            return cart
        })
        setCartItems(updated)
    
    }
    const remove=(id)=>
    {
        const rem=cartItems.filter(e=>e.id!==id)
        setCartItems(rem)
    }

    return (
        <>
            <h1>Welcome to Cart Page</h1>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-16 py-3">
                                <span className="sr-only">Image</span>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Qty
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItems.map(cart => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="p-4">
                                            <img src={cart.thumbnail} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {cart.title}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <button><i className='fa fa-minus-circle p-2 text-3xl'onClick={()=>decqty(cart.id)}></i></button>
                                                <div>
                                                    <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg
                                         focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={cart.count} />
                                                </div>
                                                <button className=''><i className='fa fa-plus-circle p-2 text-3xl'onClick={()=>incqty(cart.id)}></i></button>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {(cart.price * cart.count).toFixed(2)}
                                            
                                        </td>
                                        <td className="px-6 py-4">
                                            <button href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={()=>remove(cart.id)}>Remove</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Cart