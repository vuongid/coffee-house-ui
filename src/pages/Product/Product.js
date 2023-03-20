import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '~/components/Button';
import { orderIcon } from '~/components/Icons';

import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product({ setTotalQuantity }) {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const { slug } = useParams();

    useEffect(() => {
        if (slug) {
            axios
                .get(`http://localhost:3001/api/product/${slug}`)
                .then((response) => {
                    setProduct(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [slug]);

    const handleMinus = () => {
        if (quantity === 1) return;
        setQuantity(quantity - 1);
    };

    const handleAddCart = () => {
        let updateCart = { ...cart };
        if (cart === null) {
            updateCart = {
                products: [],
                totalPrice: 0,
                totalQuantity: 0,
            };
        }
        //check product is existing
        const existingProductIndex = updateCart.products.findIndex((item) => {
            return item.product._id === product._id;
        });
        // exist in cart already
        if (existingProductIndex === -1) {
            updateCart.products.push({
                quantity,
                product,
            });
        } else {
            updateCart.products[existingProductIndex].quantity += quantity;
        }
        updateCart.totalQuantity += quantity;
        updateCart.totalPrice += quantity * product.price;
        localStorage.setItem('cart', JSON.stringify(updateCart));
        let total = 0;
        updateCart.products.forEach((item) => (total += item.quantity * item.product.price));
        setCart(updateCart);
        setTotalQuantity(updateCart.totalQuantity);
    };

    return (
        <div className="grid wide">
            <div className={cx('container')}>
                <div className={cx('back-link')}>
                    <Link to="/menu">Menu</Link>
                    {' / '}
                    <Link to={`/menu/${product.idCategory?.slug}`}>{product.idCategory?.name}</Link>
                    {' / '}
                    {product.name}
                </div>
                <div className="row">
                    <div className="col l-6 m-12 c-12">
                        <img className={cx('image')} alt="" src={`/images/products/${product.image}.png `} />
                    </div>
                    <div className="col l-6 m-12 c-12">
                        <div className={cx('info')}>
                            <p className={cx('info-title')}>{product.name}</p>
                            <div className={cx('info-quantity')}>
                                <p className={cx('price')}>{product.price}</p>
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
                                        onClick={() => {
                                            setQuantity(quantity + 1);
                                        }}
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
