import React from 'react';
import {ProductConsumer} from '../context'

const HomePage = () => {
    return (
        <>
            <ProductConsumer>{value => {
                return <h1>hello from HomePages</h1>
            }}
            </ProductConsumer>
        </>
    );
};

export default HomePage;