import React from 'react';
import {FaTrash, FaChevronCircleUp, FaChevronCircleDown} from 'react-icons/fa';

const CartItem = ({cartItem, increment, decrement, removeItem}) => {
    const {id, title, price, count, total, image} = cartItem;
    return (
        <div className="row mt-5 mt-lg-0 text-capitalize text-center align-center">
            {/* image */}
            <div className="col-10 mx-auto col-lg-2 pb-2">
                <img width="60" src={image} className="img-fluid" alt="product" />
            </div>
            {/* end of image */}

            {/* title */}
            <div className="col-10 mx-auto col-lg-2 pb-2">
                <span className="d-lg-none">product : </span>{title}
            </div>
            {/* end of title */}

            {/* price */}
            <div className="col-10 mx-auto col-lg-2 pb-2">
                <span className="d-lg-none">price : $</span>{price}
            </div>
            {/* end of price */}

             {/* count of controls */}
             <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <FaChevronCircleDown onClick={()=>decrement(id)} className="cart-icon text-primary" />
                    <span className="text-title text-muted mx-3"> {count} </span>
                    <FaChevronCircleUp onClick={()=>increment(id)} className="cart-icon text-primary" />
                    <span className="text-title text-muted mx-3"> {count} </span>
                </div>
            </div>
            {/* end of count of controls */}

            {/* remove */}
            <div className="col-10 mx-auto col-lg-2 ">
                <FaTrash className="cart-icon text-danger" onClick={()=>removeItem(id)}/>
            </div>
            {/* end of remove */}

            {/* item total */}
            <div className="col-10 mx-auto col-lg-2 ">
                <strong className="text-muted">total: ${total}</strong>
            </div>
            {/* end of item total */}

        </div>
        
    );
};

export default CartItem; 
