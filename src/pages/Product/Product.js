import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import { orderIcon } from '~/components/Icons';

import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product() {
    return (
        <>
            <div className={cx('back-link')}>
                <Link>Menu</Link> / <Link>CloudFee</Link> / CloudFee Creamy Hạnh Nhân Nướng
            </div>
            <div className="row">
                <div className="col l-6 m-12 c-12">
                    <img
                        className={cx('image')}
                        alt=""
                        src="https://product.hstatic.net/1000075078/product/bg-cloudfee-caramel_75148d2d45c34b58931f0945e8f51eda_large.jpg"
                    />
                </div>
                <div className="col l-6 m-12 c-12">
                    <div className={cx('info')}>
                        <p className={cx('info-title')}>CloudFee Hạnh Nhân Nướng</p>
                        <div className={cx('info-quantity')}>
                            <p className={cx('price')}>49.000 đ</p>
                            <div className={cx('quantity')}>
                                <FontAwesomeIcon icon={faMinusCircle} className={cx('qty-icon')} />
                                <span className={cx('qty-input')}>1</span>
                                <FontAwesomeIcon icon={faPlusCircle} className={cx('qty-icon')} />
                            </div>
                        </div>
                        <p className={cx('description')}>
                            Vị đắng nhẹ từ cà phê phin truyền thống kết hợp Espresso Ý, lẫn chút ngọt ngào của kem sữa
                            và lớp foam trứng cacao, nhấn thêm hạnh nhân nướng thơm bùi, kèm topping thạch cà phê dai
                            giòn mê ly. Tất cả cùng quyện hoà trong một thức uống làm vị giác "thức giấc", thơm ngon hết
                            nấc.
                        </p>
                    </div>
                    <Button primary full leftIcon={orderIcon} className={cx('submit-btn')}>
                        Đặt giao hàng
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Product;
