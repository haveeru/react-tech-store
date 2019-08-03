import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';


const Sidbar = () => {
    return (
        <ProductConsumer>
            {value => { 
                const {links, sidebarOpen, handleSidebar} = value; 

                return <SideWrapper>
                    <ul>
                        {links.map(link => {
                            return (
                                <li key={link.id}>
                                    <Link to={link.path} className='siebar-link'>{link.text}</Link>
                                </li>
                            )
                        })} 
                    </ul>
                </SideWrapper>
            }}
        </ProductConsumer>
    );
};

export default Sidbar;

const SideWrapper = styled.nav`

`;