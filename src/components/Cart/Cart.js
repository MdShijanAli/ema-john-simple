import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    console.log(cart);



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
        <div className='cart'>
            <h3 className='center'>Order Summary</h3>
            <p className='left'>Selected Items: {quantity}</p>
            <p className='left'>Total Price: ${total}</p>
            <p className='left'>Total Shipping Charge: ${shipping}</p>
            <p className='left'>Tax: ${tax}</p>
            <h3 className='left cart-bottom'>Grand Total: ${grandTotal.toFixed(2)}</h3>

            <button className='btn red'>
                <p>Clear Cart </p>
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
            </button>

            <button className='btn orrange'>
                <p>Review Order </p>
                <FontAwesomeIcon className='icon' icon={faArrowRight}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Cart;