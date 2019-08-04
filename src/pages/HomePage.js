import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <Hero title="awesome gadgets" max="true">
               <Link to={'/products'} 
                    className="main-link"
                    style={{margin: "2rem"}}
               >our products</Link>
            </Hero>
        </>
    );
};

export default HomePage;