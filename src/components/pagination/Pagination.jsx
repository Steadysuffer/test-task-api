import React from 'react';
import './pagination.scss'
const Pagination = ({ totalProducts, productsPerPage, currentPage, onPageChange }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    console.log('pageNumbers: ', pageNumbers)
    console.log('totalProducts: ', totalProducts)
    console.log('productsPerPage: ', productsPerPage)
    console.log('currentPage: ', currentPage)

    return (
        <div>
            {pageNumbers.map(number => (
                <button key={number} onClick={() => onPageChange(number)}>
                    {number}
                </button>
            ))}
        </div>
    );
};


export default Pagination;