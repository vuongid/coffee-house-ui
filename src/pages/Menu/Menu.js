import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

const products = [
    {
        title: 'CloudFee Hạnh nhân nướng',
        image: 'https://product.hstatic.net/1000075078/product/bg-cloudfee-caramel_75148d2d45c34b58931f0945e8f51eda_large.jpg',
        price: '49.000 đ',
    },
    {
        title: 'CloudFee Hạnh nhân nướng',
        image: 'https://product.hstatic.net/1000075078/product/bg-cloudfee-caramel_75148d2d45c34b58931f0945e8f51eda_large.jpg',
        price: '49.000 đ',
    },
    {
        title: 'CloudFee Hạnh nhân nướng',
        image: 'https://product.hstatic.net/1000075078/product/bg-cloudfee-caramel_75148d2d45c34b58931f0945e8f51eda_large.jpg',
        price: '49.000 đ',
    },
    {
        title: 'CloudFee Hạnh nhân nướng',
        image: 'https://product.hstatic.net/1000075078/product/bg-cloudfee-caramel_75148d2d45c34b58931f0945e8f51eda_large.jpg',
        price: '49.000 đ',
    },
    {
        title: 'CloudFee Hạnh nhân nướng',
        image: 'https://product.hstatic.net/1000075078/product/bg-cloudfee-caramel_75148d2d45c34b58931f0945e8f51eda_large.jpg',
        price: '49.000 đ',
    },
    {
        title: 'CloudFee Hạnh nhân nướng',
        image: 'https://product.hstatic.net/1000075078/product/bg-cloudfee-caramel_75148d2d45c34b58931f0945e8f51eda_large.jpg',
        price: '49.000 đ',
    },
    {
        title: 'CloudFee Hạnh nhân nướng',
        image: 'https://product.hstatic.net/1000075078/product/bg-cloudfee-caramel_75148d2d45c34b58931f0945e8f51eda_large.jpg',
        price: '49.000 đ',
    },
    {
        title: 'CloudFee Hạnh nhân nướng',
        image: 'https://product.hstatic.net/1000075078/product/bg-cloudfee-caramel_75148d2d45c34b58931f0945e8f51eda_large.jpg',
        price: '49.000 đ',
    },
    {
        title: 'CloudFee Hạnh nhân nướng',
        image: 'https://product.hstatic.net/1000075078/product/bg-cloudfee-caramel_75148d2d45c34b58931f0945e8f51eda_large.jpg',
        price: '49.000 đ',
    },
    {
        title: 'CloudFee Hạnh nhân nướng',
        image: 'https://product.hstatic.net/1000075078/product/bg-cloudfee-caramel_75148d2d45c34b58931f0945e8f51eda_large.jpg',
        price: '49.000 đ',
    },
];

function Menu() {
    return (
        <>
            <h1 className={cx('title')}>product</h1>
            <MenuItem products={products} />
        </>
    );
}

export default Menu;
