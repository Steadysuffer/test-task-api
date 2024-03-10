import React from 'react';
import Card from "../card/Card";
import './cardList.scss'
const CardList = ( {data}) => {

    return (
        <div className='card-list'>
            {data && data.map((product) => (
                <Card
                  key={product.id}
                  id={product.id}
                  brand={product.brand}
                  product={product.product}
                  price={product.price}
                />
            ))}
        </div>
    );
};

export default CardList;


// {data.result.map((data) => (
//             <Card
//               key={data.id}
//               id={data.id}
//               brand={data.brand}
//               product={data.product}
//               price={data.price}
//             />
//           ))}


            // Компонент cardList работает
            // <div>
            //     {data && JSON.stringify(data.result)}
            // </div>

                // <div key={index}>
                //     <p>{index}) </p>
                //     <p>Идентификатор продукта: {product.id}</p>
                //     <p>Бренд: {product.brand}</p>
                //     <p>Цена: {product.price}</p>
                //     <p>Продукт: {product.product}</p>
                //     <hr />
                // </div>