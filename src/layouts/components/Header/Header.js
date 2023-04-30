import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Navbar from './Navbar';
import { cartIcon, userIcon, barsIcon, closeIcon } from '~/components/Icons';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout, mid } from '~/actions/auth';

const cx = classNames.bind(styles);
const navbar = [
    {
        title: 'Menu',
        to: '/menu',
        sub: [
            { title: 'Cà phê', to: '/menu/ca-phe' },
            { title: 'CloudFee', to: '/menu/cloudfee' },
            { title: 'CloudTea', to: '/menu/cloudtea' },
            { title: 'Hi-Tea Heathy', to: '/menu/hi-tea-healthy' },
            { title: 'Trà Trái Cây - Trà Sữa', to: '/menu/tra-trai-cay-tra-sua' },
            { title: 'Tại Nhà', to: '/menu/thuong-thuc-tai-nha' },
        ],
    },
    {
        title: 'Chuyện Nhà',
        to: '/blog',
        sub: [
            { title: 'Coffeeholic', to: '/blog/Coffeeholic' },
            { title: 'Teaholic', to: '/blog/Teaholic' },
            { title: 'Blog', to: '/blog/Blog' },
        ],
    },

    {
        title: 'Cửa Hàng',
        to: '/store',
    },
    {
        title: 'Cảm hứng CloudFee',
        to: '/inspiration',
    },
];

const navbarUser = [
    {
        icon: cartIcon,
        to: '/cart',
    },
    {
        icon: userIcon,
        to: '/login',
    },
];

const activeNavbarUser = [
    {
        icon: cartIcon,
        to: '/cart',
    },
    {
        title: '',
        icon: userIcon,
        to: '',
        sub: [{ title: 'logout', to: '/' }],
    },
];

function Header() {
    const [showNavRight, setShowNavRight] = useState(false);
    const totalQuantity = useSelector((state) => state.cart?.totalQuantity);
    const { isLogin, user, token } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            dispatch(mid(token));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(authLogout());
    };

    if (user?.role === 'admin') {
        activeNavbarUser[1].sub[1] = { title: 'admin', to: '/admin' };
    } else {
        activeNavbarUser[1].sub.splice(1, 1);
    }

    navbarUser[0].qty = totalQuantity;
    activeNavbarUser[0].qty = totalQuantity;
    activeNavbarUser[1].sub[0].onClick = handleLogout;

    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
                <div className={cx('inner')}>
                    <div
                        className={cx('bars-icon')}
                        onClick={() => {
                            setShowNavRight(true);
                        }}
                    >
                        {barsIcon}
                    </div>
                    {/* Logo */}
                    <Link to="/">
                        <img src={images.logo} alt="Coffee House" className={cx('logo')} />
                    </Link>
                    {/* Navbar */}
                    <div className={cx('navbar', { show: showNavRight })}>
                        <div>
                            <span className={cx('close-icon')} onClick={() => setShowNavRight(false)}>
                                {closeIcon}
                            </span>
                        </div>
                        {navbar.map((navbar, index) => {
                            return (
                                <Navbar key={index} to={navbar.to} sub={navbar.sub}>
                                    {navbar.title}
                                </Navbar>
                            );
                        })}
                    </div>
                    {showNavRight && (
                        <div className={cx('navbar-overlay')} onClick={() => setShowNavRight(false)}></div>
                    )}
                    {/* user */}
                    {isLogin ? (
                        <div className={cx('navbar-user')}>
                            {activeNavbarUser.map((navbar, index) => {
                                return (
                                    <Navbar
                                        key={index}
                                        to={navbar.to}
                                        icon={navbar.icon}
                                        qty={navbar.qty}
                                        onClick={navbar.onClick}
                                        sub={navbar.sub}
                                        vertical
                                    >
                                        {navbar.title}
                                    </Navbar>
                                );
                            })}
                        </div>
                    ) : (
                        <div className={cx('navbar-user')}>
                            {navbarUser.map((navbar, index) => {
                                return (
                                    <Navbar key={index} to={navbar.to} icon={navbar.icon} qty={navbar.qty}>
                                        {navbar.title}
                                    </Navbar>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default memo(Header);
