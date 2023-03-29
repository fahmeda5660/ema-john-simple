import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // const cart = props.cart;
    // const {cart} = props;
    console.log(cart);

    let totalPrice = 0;
    let totalShipping =0;
    let quantity = 0;
    for(const product of cart){
        // price depend on quantity
        // short cuts:1 
        // product.quantity = product.quantity || 1 ;
        // short cuts:2
        if(product.quantity ===0){
            product.quantity = 1; 
        } 
        // tough solution

        totalPrice = totalPrice+product.price * product.quantity;
        totalShipping =totalShipping+product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice+totalShipping+tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Quantity: {quantity}</p>
            <p>Total Price:${totalPrice}</p>
            <p>Total Shipping:${totalShipping}</p>
            <p>Tax:{tax.toFixed(2)}</p>
            <p>Grand Total:${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;