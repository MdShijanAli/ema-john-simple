import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';


import './Shop.css';


const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }


    useEffect(() => {
        // console.log('Local store first line', products)

        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
        // console.log('Local storage finished')

    }, [products]);

    const handleAddToCart = (Selectedproduct) => {
        console.log(Selectedproduct);
        let newCart = [];
        const exist = cart.find(product => product.id === Selectedproduct.id);
        if (!exist) {
            Selectedproduct.quantity = 1;
            newCart = [...cart, Selectedproduct];
        }
        else {
            const rest = cart.filter(product => product.id !== Selectedproduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }

        setCart(newCart);
        addToDb(Selectedproduct.id);
    }

    return (
        <div className='shop-container '>
            <div className="products-container">
                {
                    products.map(product => <Product
                        product={product}
                        handleAddToCart={handleAddToCart}
                        key={product.id}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCart={clearCart}>
                    <Link to='/orders'>
                        <button className='bg-orange-500 hover:bg-orange-800 text-white flex w-2/3 mt-5 mx-auto p-3 items-center justify-evenly rounded-lg'>
                            <p>Review Order </p>
                            <FontAwesomeIcon className='text-xl' icon={faArrowRight}></FontAwesomeIcon>
                        </button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Shop;