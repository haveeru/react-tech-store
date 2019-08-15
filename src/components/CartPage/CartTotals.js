import React from 'react';
import {ProductConsumer} from '../../context';

const CartTotals = () => {
    return (
        <div className="container">
            <div className="row">
                <ProductConsumer>
                    {value => {
                        const {clearCart, cartSubtotal, cartTax, cartTotal} = value;
                        return <div className="col text-title text-center my-4">
                            <button 
                                className="btn btn-outline-danger text-capitalize"
                            >
                                clear cart
                            </button>
                            <h3>subtoal : ${cartSubtotal}</h3>
                            <h3>tax : ${cartTax}</h3>
                            <h3>total : ${cartTotal}</h3>
                        </div>
                    }}
                </ProductConsumer>
            </div>
            
        </div>
    );
};

export default CartTotals;