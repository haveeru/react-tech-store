import React, { Component } from 'react';
import { linkData } from './linkData';

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component{
    state = {
        sidebarOpen: false,
        cartOpen: false,
        cartItems: 10,
        links: linkData,
        cart: []
    }

    handleSidebar = () => {
        this.setState({sidebarOpen: !this.state.sidebarOpen})
    }

    handleCart = () => {
        this.setState({cartOpen: !this.state.cartOpen})
    }

    CloseCart = () => {
        this.setState({cartOpen: false})
    }

    OpenCart = () => {
        this.setState({cartOpen: true})
    }
    
    render(){
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleSidebar: this.handleSidebar,
                handleCart: this.handleCart,
                CloseCart: this.CloseCart,
                OpenCart: this.OpenCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};