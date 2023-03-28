import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Product from '~/components/Product';
import { getProductsByMenu } from '~/services/productService';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu() {
    const [products, setProduct] = useState([]);
    const { slug } = useParams();

    useEffect(() => {
        const fetchAPI = async () => {
            const res = await getProductsByMenu(slug);
            setProduct(res);
        };
        fetchAPI();
    }, [slug]);

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
                </div>
            ))}
        </>
    );
}

export default Menu;
