import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import * as cartServices from '~/services/cartServices';
import config from '~/config';
import Button from '~/components/Button';
import styles from './Cart.module.scss';
import { updateCart } from '~/actions/cart';
import { Link } from 'react-router-dom';
import formatPrice from '~/utils/formatPrice';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { token, user } = useSelector((state) => state.auth);
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

    return (
        <div className={cx('grid', 'wide')}>
            <div className={cx('wrapper')}>
                {cart ? (
                    <div className="row">
                        <div className="col l-8 m-12 c-12">
                            <h1>Giỏ hàng</h1>
                            <div className={cx('cart')}>
                                {cart.products.map((item, index) => (
                                    <div key={index} className={cx('cart-item')}>
                                        <img
                                            className={cx('item-img')}
                                            alt=""
                                            src={config.IMAGES_URL.productImage + item.product.image}
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
                                        <div className={cx('item-price')}>{formatPrice(item.product.price)}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col l-4 m-12 c-12">
                            <h1>Thanh toán</h1>
                            <div className={cx('checkout')}>
                                <p className={cx('')}>
                                    <span className={cx('label')}>Số lượng</span>
                                    <span className={cx('value')}>{cart.totalQuantity}</span>
                                </p>
                                <p>
                                    <span className={cx('label')}>Thành tiền</span>
                                    <span className={cx('value')}>{formatPrice(cart.totalPrice)}</span>
                                </p>
                                <label>Địa chỉ</label>
                                <input
                                    spellCheck={false}
                                    value={address}
                                    placeholder="Địa chỉ"
                                    onChange={(e) => setAddress(e.target.value)}
                                ></input>
                                <label>Ghi chú</label>
                                <textarea
                                    spellCheck={false}
                                    rows={4}
                                    value={note}
                                    placeholder="Ghi chú"
                                    onChange={(e) => setNote(e.target.value)}
                                />
                                <Button primary full onClick={handleSubmit}>
                                    Đặt hàng
                                </Button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <Link className={cx('link-menu')} to="/menu">
                            {'< Menu'}
                        </Link>
                        <div className={cx('image-cart')}>
                            <img className={cx('cart-null')} src={images.cartEmpty} alt="" />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
export default Cart;
