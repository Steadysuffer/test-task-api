import React, {useEffect, useState} from 'react';
import './products.scss'
import {getProducts, getStore} from '../../API/TakeData';
import CardList from "../cardList/CardList";
import Loader from "../loader/Loader";
import Pagination from "../pagination/Pagination";
const Products = () => {
    const [ids, setIds] = useState([])
    const [data, setData] = useState([])
    const [uniqueData, setUniqueData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(50)
    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(1000)

    const requestIds = {
        "action": "get_ids",
        "params": {"offset": offset, "limit": limit}
    }

    useEffect(() => {
    const fetchData = async () => {
        try {
            setIsLoading(true);
            const fetchedIds = await getProducts(requestIds);
            console.log('fetchedIds: ', fetchedIds);
            setIds(fetchedIds);

            const requestProducts = {
                "action": "get_items",
                "params": {"ids": fetchedIds.result}
            }

            const uniqueProducts = {};
            const fetchedProducts = await getProducts(requestProducts);
            fetchedProducts.result.forEach(product => {
                if (!uniqueProducts[product.id]) {
                    uniqueProducts[product.id] = product;
                }
            });
            const uniqueProductList = Object.values(uniqueProducts);
            setData(uniqueProductList);
            setIsLoading(false);
            console.log('uniqueProductList: ', uniqueProductList);
        } catch (error) {
            console.error('Ошибка при загрузке данных:', error);
            setIsLoading(false);
            setError(true);
        }
    };
        fetchData();
    }, []);

    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const lastProductIndex = currentPage + productsPerPage
    const firstProductIndex = lastProductIndex - productsPerPage
    const currentProducts = data.slice(firstProductIndex, lastProductIndex)


    return (
        <div className='products'>
            <div className='main-header'>Список товаров</div>
            {isLoading
                ?   <Loader/>
                :   <div>
                        {data && <CardList data={currentProducts} />}
                    </div>
            }
            {isLoading
                ?   <div></div>
                :   <div>{data &&
                    <Pagination
                        totalProducts={data.length}
                        productsPerPage={productsPerPage}
                        currentPage={currentPage}
                        onPageChange={changePage}
                    />
                }</div>
            }

        </div>
    );
};

export default Products;

// <CardList key={index} data={data.result}/>
//
//         {data && data.result.map((item, index) => (
//             <CardList key={index} data={data.result}/>
//         ))}

// Работает
//     <div className='products'>
//         {ids && data && data.result && JSON.stringify(data.result)}
//     </div>

