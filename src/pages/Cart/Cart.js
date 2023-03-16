import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/components/Button';

import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart({ setTotalQuantity }) {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
    const handleDelete = (index) => {
        let updateCart = { ...cart };
        updateCart.products.splice(index, 1);
        let totalQuantity = 0;
        let totalPrice = 0;
        updateCart.products.map((item) => {
            totalPrice += item.quantity * item.product.price;
            totalQuantity += item.quantity;
        });
        updateCart.totalQuantity = totalQuantity;
        updateCart.totalPrice = totalPrice;
        if (totalQuantity === 0) {
            updateCart = null;
        }
        localStorage.setItem('cart', JSON.stringify(updateCart));
        setTotalQuantity(totalQuantity === 0 && null);
        setCart(updateCart);
    };

    const handleMinus = (index) => {
        const updateCart = { ...cart };
        if (updateCart.products[index].quantity === 1) {
            handleDelete(index);
        } else {
            updateCart.products[index].quantity--;
            let totalQuantity = 0;
            let totalPrice = 0;
            updateCart.products.map((item) => {
                totalPrice += item.quantity * item.product.price;
                totalQuantity += item.quantity;
            });
            updateCart.totalQuantity = totalQuantity;
            updateCart.totalPrice = totalPrice;
            localStorage.setItem('cart', JSON.stringify(updateCart));
            setTotalQuantity(totalQuantity);
            setCart(updateCart);
        }
    };

    const handlePlus = (index) => {
        const updateCart = { ...cart };
        updateCart.products[index].quantity++;
        let totalQuantity = 0;
        let totalPrice = 0;
        updateCart.products.map((item) => {
            totalPrice += item.quantity * item.product.price;
            totalQuantity += item.quantity;
        });
        updateCart.totalQuantity = totalQuantity;
        updateCart.totalPrice = totalPrice;
        localStorage.setItem('cart', JSON.stringify(updateCart));
        setTotalQuantity(totalQuantity);
        setCart(updateCart);
    };

    return cart ? (
        <div className="row">
            <div className="col l-8 m-12 c-12">
                <h3>Giỏ hàng</h3>
                <div className={cx('cart')}>
                    {cart.products.map((item, index) => (
                        <div key={index} className={cx('cart-item')}>
                            <img
                                className={cx('item-img')}
                                alt=""
                                src={`/images/products/${item.product.image}.png `}
                            />
                            <div className={cx('item-info')}>
                                <p className={cx('product')}>{item.product.name}</p>
                                <p className={cx('category')}>{item.product.idCategory.name}</p>
                                <p className={cx('remove')} onClick={() => handleDelete(index)}>
                                    remove
                                </p>
                            </div>
                            <div className={cx('item-quantity')}>
                                <FontAwesomeIcon
                                    icon={faMinusCircle}
                                    className={cx('minus-icon')}
                                    onClick={() => handleMinus(index)}
                                />
                                <span className={cx('quantity-input')}>{item.quantity}</span>
                                <FontAwesomeIcon
                                    icon={faPlusCircle}
                                    className={cx('plus-icon')}
                                    onClick={() => handlePlus(index)}
                                />
                            </div>
                            <div className={cx('item-price')}>{item.product.price}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col l-4 m-12 c-12">
                <h3>Thanh toán</h3>
                <div className={cx('checkout')}>
                    <p>
                        <span className={cx('label')}>Số lượng</span>
                        <span className={cx('value')}>{cart.totalQuantity}</span>
                    </p>
                    <p>
                        <span className={cx('label')}>Thành tiền</span>
                        <span className={cx('value')}>{cart.totalPrice}</span>
                    </p>
                </div>
                <Button primary full>
                    Đặt hàng
                </Button>
            </div>
        </div>
    ) : (
        <h1>Giỏ hàng rỗng</h1>
    );
}
export default Cart;
