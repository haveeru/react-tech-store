import React, { Component } from 'react';
import { linkData } from './linkData';
import { SocialData } from './socialData';
import { items } from './productData.js';

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component{
    state = {
        sidebarOpen: false,
        cartOpen: false,
        links: linkData,
        socialIcons: SocialData,
        cart: [],
        cartItems: 0,
        cartSubtotals: 0,
        cartTotal: 0,
        storeProucts: [],
        fitleredProducts: [],
        featuredProducts: [],
        singleProduct: {},
        loading: true
    }

    componentDidMount() {
        //from contentful items

        this.setProducts(items); 
    }

    setProducts = (products) => {
        let storeProucts = products.map(item => {
            const {id} = item.sys;
            const image = item.fields.image.fields.file.url;
            const product = {id, ...item.fields, image};
            return product;
        })
        let featuredProducts = storeProucts.filter(item => item.featured === true);
        this.setState({
            storeProucts,
            fitleredProducts: storeProucts,
            featuredProducts,
            cart:this.getStorageCart(),
            singleProduct: this.getStorageProduct(),
            loading: false
        });
    };

    addToCart = (id) => {
        console.log(`add to car ${id}`);
    }

    setSingleProduct = (id) => {
        console.log(id);   
    }

    getStorageCart = () => {
        return [];
    };

    getStorageProduct = () => {
        return [];
    }

    getTotals = () => {

    }

    syncStorage = () => {

    }

    addTotals = () => {
        
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
                OpenCart: this.OpenCart,
                addToCart: this.addToCart,
                setSingleProduct: this.setSingleProduct
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};