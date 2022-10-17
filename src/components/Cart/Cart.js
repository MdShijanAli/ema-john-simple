import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css';


const Cart = (props) => {
    const { cart, clearCart, children } = props;

    // console.log(cart);



    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((total * 10 / 100).toFixed(2));




    const grandTotal = total + shipping + tax;



    return (
        <div className='sticky top-28 pb-60'>
            <h3 className='mt-36 text-center text-xl font-bold mb-10'>Order Summary</h3>
            <p className='ml-6 my-2 text-lg'>Selected Items: {quantity}</p>
            <p className='ml-6 my-2 text-lg'>Total Price: ${total}</p>
            <p className='ml-6 my-2 text-lg'>Total Shipping Charge: ${shipping}</p>
            <p className='ml-6 my-2 text-lg'>Tax: ${tax}</p>
            <h3 className='ml-6 my-2 text-lg mb-16'>Grand Total: ${grandTotal.toFixed(2)}</h3>


            <button className='bg-red-600 hover:bg-red-800 text-white flex w-2/3 p-3 mx-auto items-center justify-evenly rounded-lg' onClick={clearCart}>
                <p>Clear Cart </p>
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
            </button>
            {children}

        </div>
    );
};

export default Cart;