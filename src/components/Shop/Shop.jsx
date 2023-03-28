import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [card, setCard] = useState([])

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const handleAddToCard = (product) =>{
        // console.log(product);
        // state immutable, so push kora jabena
        const newCard = [...card, product];
        setCard(newCard);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {/* <h3>product coming here: {products.length}</h3> */}
                {
                    products.map(product => <Product
                        key ={product.id}
                        product = {product}
                        handleAddToCard ={handleAddToCard}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <p>Selected Items: {card.length}</p>
            </div>
        </div>
    );
};

export default Shop;