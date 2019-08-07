import React, { Component } from 'react';
import styled from 'styled-components';
import {FaDolly, FaRedo, FaDollarSign } from 'react-icons/fa';

class Services extends Component {
    state = {
        serivices: [
            { 
               id: 1,
               icon: <FaDolly />,
               title: 'free shipping',
               text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. '
            },
            { 
                id: 2,
                icon: <FaRedo />,
                title: '30 days return policy',
                text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. '
             },
             { 
                id: 3,
                icon: <FaDollarSign />,
                title: 'secured payments',
                text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. '
             }
        ]
    }

    render() {
        
        return (
            <ServicesWrapper className="py-5">
                <div className="container">
                    <div className="row">
                        {this.state.serivices.map(item=>{
                            return <div 
                                className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3"
                                key={item.id}
                            >
                                <div className="services-icon">
                                    {item.icon}
                                </div>
                                <div className="mt-3 text-capitalize">
                                    {item.title}
                                </div>
                                <div className="mt-3">
                                     {item.text}
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </ServicesWrapper>
        );
    }
}

export default Services;

const ServicesWrapper = styled.section`
    background: rgba(95, 183, 234, 0.5);
    .services-icon {
        font-size: 2.5rem;
        color: var(--primaryColor);
        p {
            color: var(--darkGrey);
        }
    }
`;