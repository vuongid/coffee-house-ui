import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateCart } from '~/actions/cart';
import Button from '~/components/Button';
import * as cartServices from '~/services/cartServices';

import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { isLogin, token, user } = useSelector((state) => state.auth);
    const [address, setAddress] = useState(user?.address);
    const [note, setNote] = useState('');

    const calculateCartTotal = (cart) => {
        const { products } = cart;
        const { totalQuantity, totalPrice } = products.reduce(
            (acc, { product, quantity }) => ({
                totalQuantity: acc.totalQuantity + quantity,
                totalPrice: acc.totalPrice + product.price * quantity,
            }),
            { totalQuantity: 0, totalPrice: 0 },
        );
        return { totalQuantity, totalPrice };
    };

    const handleDelete = (index) => {
        let newCart = { ...cart };
        newCart.products.splice(index, 1);
        if (newCart.products.length === 0) {
            localStorage.removeItem('cart');
            dispatch(updateCart(null));
        } else {
            updateCartState(newCart);
        }
    };

    const handleMinus = (index) => {
        const newCart = { ...cart };
        newCart.products[index].quantity--;
        if (newCart.products[index].quantity === 0) {
            handleDelete(index);
        } else {
            updateCartState(newCart);
        }
    };

    const handlePlus = (index) => {
        const newCart = { ...cart };
        newCart.products[index].quantity++;
        updateCartState(newCart);
    };

    const updateCartState = (newCart) => {
        const { totalQuantity, totalPrice } = calculateCartTotal(newCart);
        newCart.totalQuantity = totalQuantity;
        newCart.totalPrice = totalPrice;
        localStorage.setItem('cart', JSON.stringify(newCart));
        dispatch(updateCart(newCart));
    };

    const handleSubmit = async () => {
        const products = cart.products.reduce((acc, item) => {
            acc.push({
                productId: item.product._id,
                quantity: item.quantity,
            });
            return acc;
        }, []);
        cartServices.addCart(
            {
                products,
                totalQuantity: cart.totalQuantity,
                totalPrice: cart.totalPrice,
                address,
                note,
            },
            token,
        );
        toast.success('Đặt hàng thành công', {
            autoClose: 700,
        });
        dispatch(updateCart(null));
        localStorage.removeItem('cart');
    };

    return isLogin ? (
        <div className={cx('wrapper', 'grid', 'wide')}>
            {cart ? (
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
                            <input
                                value={address}
                                placeholder="Địa chỉ"
                                onChange={(e) => setAddress(e.target.value)}
                            ></input>
                            <input value={note} placeholder="Ghi chú" onChange={(e) => setNote(e.target.value)}></input>
                        </div>
                        <Button primary full onClick={handleSubmit}>
                            Đặt hàng
                        </Button>
                    </div>
                </div>
            ) : (
                <h1>Giỏ hàng rỗng</h1>
            )}
        </div>
    ) : (
        <Navigate to="/login" />
    );
}
export default Cart;
