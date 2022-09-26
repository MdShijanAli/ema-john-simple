import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {

    return (
        <div>
            <h3 className='center'>Order Summary</h3>
            <p className='left'>Selected Items: {cart.length}</p>
            <p className='left'>Total Price: </p>
            <p className='left'>Total Shipping Charge: </p>
            <p className='left'>Tax: </p>
            <h3 className='left'>Grand Total: </h3>

        </div>
    );
};

export default Cart;