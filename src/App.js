import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Products from './pages/ProductsPage';
import Contact from './pages/ContactPage';
import SingleProduct from './pages/SingleProductPage';
import Cart from './pages/CartPage';
import Defaut from './pages/DefaultPage';

import {Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidbar';
import SideCart from './components/SideCart';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* navbar, sidebar, cart, footer*/}
      <Navbar />
      <Sidebar />
      <SideCart />
      <Switch>
        <Route path="/" exact component = {Home}/>
        <Route path="/about"  component = {About}/>
        <Route path="/contact"  component = {Contact}/>
        <Route path="/products"  component = {Products}/>
        <Route path="/products/:id" exact component = {SingleProduct}/>
        <Route path="/cart" exact component = {Cart}/>
        <Route component = {Defaut}/>
      </Switch>
      <Footer />
    </>
  );
} 

export default App;
