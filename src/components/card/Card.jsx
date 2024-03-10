import React from 'react';
import './card.scss'
const Card = ({id, price, brand, product}) => {
    return (
        <div className='card'>
            <div className='card-brand'> ID: {id}</div>
            <div className='card-brand'>Бренд: {brand}</div>
            <div className='card-product'>Продукт: {product}</div>
            <div className='card-price'>Цена: {price}</div>
        </div>
    );
};
export default Card;