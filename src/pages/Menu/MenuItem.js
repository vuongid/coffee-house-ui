import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ products }) {
    return (
        <div className="row">
            {products.map((product, index) => (
                <div key={index} className="col l-4 m-6 c-6">
                    <div className={cx('menu-item')}>
                        <div className={cx('item-image')}>
                            <Link to={'/product/1'}>
                                <img className={cx('image')} alt="" src={product.image} />
                            </Link>
                        </div>
                        <div className={cx('item-info')}>
                            <Link to={'/product/1'}>
                                <h3 className={cx('info-title')}>{product.title}</h3>
                            </Link>
                            <p className={cx('info-price')}>{product.price}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MenuItem;
