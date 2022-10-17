import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const { initialCart } = useLoaderData(); // { products, initialCart }
    const [cart, setCart] = useState(initialCart);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    return (
        <div className='shop-container'>
            <div className="orders-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2 className='text-xl text-center'>No Item's for Review. Please Buy Something from <span className='text-xl font-bold text-blue-900 underline decoration-solid decoration-blue-900'><Link to='/'>Shop Page</Link></span></h2>
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCart={clearCart}>
                    <Link to='/shipping'>
                        <button className='bg-orange-500 hover:bg-orange-800 text-white flex w-2/3 mt-5 mb-52 mx-auto p-3 items-center justify-evenly rounded-lg'>
                            <p>Proceed Shipping </p>
                            <FontAwesomeIcon className='text-xl' icon={faArrowRight}></FontAwesomeIcon>
                        </button>
                    </Link>

                </Cart>
            </div>
        </div>
    );
};

export default Orders;