import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../../context';

class FilterProducts extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {search, min, max, company, price, shipping, handleChange, storeProducts} = value;
                    
                    let companies = new Set();
                    companies.add('all');
                    for(let product in storeProducts) {
                        companies.add(storeProducts[product]["company"])
                    }

                    companies = [...companies];


                    return (
                        <div className="row my-5">
                            <div className="col-10 mx-auto">
                                <FilterWrapper>
                                {/* text search  */}
                                <div>
                                    <label htmlFor="search">search products</label>
                                    <input type="text" name="search" id="searcg" onChange={handleChange} className="filter-items"/>
                                </div>

                                {/* category search  */}
                                <div>
                                    <label htmlFor="company">company</label>
                                    <select name="company" id="searcg" onChange={handleChange} value={company} className="filter-items">
                                        {/* <option value="all">all</option>
                                        <option value="fuji">fuji</option>
                                        <option value="htc">htc</option> */}
                                        {
                                            companies.map((company, index)=>{
                                                return <option key={index} value={company}>{company}</option>
                                            })
                                        }
                                    </select>
                                </div>

                                {/* price range */}
                                <div>
                                    <label htmlFor="price">price</label>
                                    <p className="mb-2">product price : <span>$ {price}</span></p>
                                    <input 
                                        type="range" 
                                        name="price" 
                                        id="price" 
                                        min={min} 
                                        max={max} 
                                        className="filter-price" 
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* free shipping */}
                                <div>
                                    <label htmlFor="shipping">free shipping </label>
                                    <input 
                                        type="checkbox" 
                                        name="shipping" 
                                        id="shipping"  
                                        onChange={handleChange} 
                                        checked={shipping && true}
                                    />
                                </div>
                                </FilterWrapper>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default FilterProducts;

const FilterWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;
    label{
        font-weight: bold;
        text-transform: capitalize;
    }
    .filter-items, .filter-price {
        display: block;
        width: 100%;
        background: transparent;
        border-radius: 0.5rem;
        border:2px solid var(--darkGrey);
    }
`;