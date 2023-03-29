import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    useEffect(()=>{
        const storedCart = getShoppingCart();

        const savedCard = [];
        // console.log(storedCart);
        //step:1 get id of the addedProduct
        for(const id in storedCart){
            // console.log(id);
            //step:2 get the product from products state by using id
            const addedProduct = products.find(product => product.id === id);
            // step:3 add quantity of the product
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
            // step:4
                savedCard.push(addedProduct);
            }
            //   console.log(addedProduct);
        }
        // step:5 set the cart
        setCart(savedCard);
    }, [products])

    const handleAddToCart = (product) =>{
        // console.log(product);
        // state immutable, so push kora jabena
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {/* <h3>product coming here: {products.length}</h3> */}
                {
                    products.map(product => <Product
                        key ={product.id}
                        product = {product}
                        handleAddToCard ={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart= {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;