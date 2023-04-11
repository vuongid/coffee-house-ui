import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Product.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);

function Product({ product }) {
    return (
        <div key={product._id} className={cx('product')}>
            <div className={cx('product-img')}>
                <Link to={`/product/${product.slug}`}>
                    <img className={cx('image')} alt="" src={config.IMAGES_URL.productImage + product.image} />
                </Link>
            </div>
            <div className={cx('product-info')}>
                <Link to={`/product/${product.slug}`}>
                    <h3 className={cx('info-title')}>{product.name}</h3>
                </Link>
                <p className={cx('info-price')}>{product.price}</p>
            </div>
        </div>
    );
}

export default Product;
