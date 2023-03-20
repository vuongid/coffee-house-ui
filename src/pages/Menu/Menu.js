import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '~/components/Product';

import styles from './Menu.module.scss';

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
    }, [slug, url]);

    return (
        <>
            {products.map((item) => (
                <div key={item.id}>
                    <h1 className={cx('title')}>{item.name}</h1>
                    <div className="row">
                        {item.products.map((product) => (
                            <div key={product._id} className="col l-4 m-6 c-6">
                                <Product product={product} />
                            </div>
                        ))}
                    </div>
                    {/* <MenuItem products={item.products} /> */}
                </div>
            ))}
        </>
    );
}

export default Menu;
