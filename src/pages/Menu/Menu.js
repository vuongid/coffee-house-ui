import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

// const products = [
//     {
//         title: 'CloudFee Hạnh nhân nướng',
//         image: 'https://product.hstatic.net/1000075078/product/bg-cloudfee-caramel_75148d2d45c34b58931f0945e8f51eda_large.jpg',
//         price: '49.000 đ',
//     },
//     {
//         title: 'CloudFee Hạnh nhân nướng',
//         image: 'https://product.hstatic.net/1000075078/product/bg-cloudfee-caramel_75148d2d45c34b58931f0945e8f51eda_large.jpg',
//         price: '49.000 đ',
//     },
//     {
//         title: 'CloudFee Hạnh nhân nướng',
//         image: 'https://product.hstatic.net/1000075078/product/bg-cloudfee-caramel_75148d2d45c34b58931f0945e8f51eda_large.jpg',
//         price: '49.000 đ',
//     },
//     {
//         title: 'CloudFee Hạnh nhân nướng',
//         image: 'https://product.hstatic.net/1000075078/product/bg-cloudfee-caramel_75148d2d45c34b58931f0945e8f51eda_large.jpg',
//         price: '49.000 đ',
//     },
//     {
//         title: 'CloudFee Hạnh nhân nướng',
//         image: 'https://product.hstatic.net/1000075078/product/bg-cloudfee-caramel_75148d2d45c34b58931f0945e8f51eda_large.jpg',
//         price: '49.000 đ',
//     },
//     {
//         title: 'CloudFee Hạnh nhân nướng',
//         image: 'https://product.hstatic.net/1000075078/product/bg-cloudfee-caramel_75148d2d45c34b58931f0945e8f51eda_large.jpg',
//         price: '49.000 đ',
//     },
//     {
//         title: 'CloudFee Hạnh nhân nướng',
//         image: 'https://product.hstatic.net/1000075078/product/bg-cloudfee-caramel_75148d2d45c34b58931f0945e8f51eda_large.jpg',
//         price: '49.000 đ',
//     },
//     {
//         title: 'CloudFee Hạnh nhân nướng',
//         image: 'https://product.hstatic.net/1000075078/product/bg-cloudfee-caramel_75148d2d45c34b58931f0945e8f51eda_large.jpg',
//         price: '49.000 đ',
//     },
//     {
//         title: 'CloudFee Hạnh nhân nướng',
//         image: 'https://product.hstatic.net/1000075078/product/bg-cloudfee-caramel_75148d2d45c34b58931f0945e8f51eda_large.jpg',
//         price: '49.000 đ',
//     },
//     {
//         title: 'CloudFee Hạnh nhân nướng',
//         image: 'https://product.hstatic.net/1000075078/product/bg-cloudfee-caramel_75148d2d45c34b58931f0945e8f51eda_large.jpg',
//         price: '49.000 đ',
//     },
// ];

function Menu() {
    const [products, setProduct] = useState([]);
    const { slug } = useParams();
    let url = `http://localhost:3001/api/product/get-all`;
    if (slug) {
        url = `http://localhost:3001/api/product/list-${slug}`;
    }
    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                console.log(url);
                setProduct(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [slug]);

    return (
        <>
            {products.map((item) => (
                <div key={item.id}>
                    <h1 className={cx('title')}>{item.name}</h1>
                    <MenuItem products={item.products} />
                </div>
            ))}
        </>
    );
}

export default Menu;
