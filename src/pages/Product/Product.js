import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Button from '~/components/Button';
import { orderIcon } from '~/components/Icons';
import { updateCart } from '~/actions/cart';
import styles from './Product.module.scss';
import { getProductBySlug } from '~/services/productService';
import config from '~/config';
import formatPrice from '~/utils/formatPrice';

const cx = classNames.bind(styles);

function Product() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);

    const [quantity, setQuantity] = useState(1);
    const { slug } = useParams();

    useEffect(() => {
        const fetchAPI = async () => {
            const res = await getProductBySlug(slug);
            setProduct(res);
        };
        fetchAPI();
    }, [slug]);

    const handleMinus = () => {
        if (quantity === 1) return;
        setQuantity(quantity - 1);
    };

    const handlePlus = () => setQuantity(quantity + 1);

    const handleAddCart = () => {
        let newCart = { ...cart };
        if (cart === null) {
            newCart = {
                products: [],
                totalPrice: 0,
                totalQuantity: 0,
            };
        }
        //check product is existing
        const existingProductIndex = newCart.products.findIndex((item) => {
            return item.product._id === product._id;
        });
        // exist in cart already
        if (existingProductIndex === -1) {
            newCart.products.push({
                quantity,
                product,
            });
        } else {
            newCart.products[existingProductIndex].quantity += quantity;
        }
        newCart.totalQuantity += quantity;
        newCart.totalPrice += quantity * product.price;
        localStorage.setItem('cart', JSON.stringify(newCart));
        toast.success('Thêm sản phẩm thành công', {
            autoClose: 700,
        });
        setQuantity(1);
        dispatch(updateCart(newCart));
    };

    if (!product) {
        return <div>loading</div>;
    }

    return (
        <div className="grid wide">
            <div className={cx('container')}>
                <div className={cx('back-link')}>
                    <Link to="/menu">Menu</Link>
                    &nbsp;&nbsp;/&nbsp;&nbsp;
                    <Link to={`/menu/${product.idCategory.slug}`}>{product.idCategory.name}</Link>
                    &nbsp;&nbsp;/&nbsp;&nbsp;
                    <span className={cx('back-link-name')}>{product.name}</span>
                </div>
                <div className="row">
                    <div className="col l-6 m-12 c-12">
                        <img
                            className={cx('image')}
                            alt=""
                            src={product && config.IMAGES_URL.productImage + product.image}
                        />
                    </div>
                    <div className="col l-6 m-12 c-12">
                        <div className={cx('info')}>
                            <p className={cx('info-title')}>{product.name}</p>
                            <div className={cx('info-quantity')}>
                                <p className={cx('price')}>{formatPrice(product.price)}</p>
                                <div className={cx('quantity')}>
                                    <FontAwesomeIcon
                                        icon={faMinusCircle}
                                        className={cx('qty-icon', {
                                            disabled: quantity < 2,
                                        })}
                                        onClick={handleMinus}
                                    />
                                    <span className={cx('qty-input')}>{quantity}</span>
                                    <FontAwesomeIcon
                                        icon={faPlusCircle}
                                        className={cx('qty-icon')}
                                        onClick={handlePlus}
                                    />
                                </div>
                            </div>
                            <p className={cx('description')}>{product.description}</p>
                        </div>
                        <Button primary full leftIcon={orderIcon} className={cx('submit-btn')} onClick={handleAddCart}>
                            Đặt giao hàng
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
