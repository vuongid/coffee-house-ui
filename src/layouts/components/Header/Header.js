import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Navbar from './Navbar';
import { cartIcon, userIcon, barsIcon, closeIcon } from '~/components/Icons';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout, mid } from '~/actions/auth';
import { getAllCategory } from '~/services/categoryService';

const cx = classNames.bind(styles);
let navbar = [
    {
        title: 'Menu',
        to: '/menu',
        sub: [],
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
    const [showNavLeft, setShowNavLeft] = useState(false);
    const totalQuantity = useSelector((state) => state.cart?.totalQuantity);
    const { isLogin, user, token } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            dispatch(mid(token));
        }
        const fetchApi = async () => {
            const res = await getAllCategory();
            const sub = res.map((item) => ({
                title: item.name,
                to: `/menu/${item.slug}`,
            }));
            navbar[0].sub = sub;
        };
        fetchApi();
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
                            setShowNavLeft(true);
                        }}
                    >
                        {barsIcon}
                    </div>
                    {/* Logo */}
                    <Link to="/">
                        <img src={images.logo} alt="Coffee House" className={cx('logo')} />
                    </Link>
                    {/* Navbar */}
                    <div className={cx('navbar', { show: showNavLeft })}>
                        <div>
                            <span className={cx('close-icon')} onClick={() => setShowNavLeft(false)}>
                                {closeIcon}
                            </span>
                        </div>
                        <Navbar navbar={navbar} />
                    </div>
                    {showNavLeft && <div className={cx('navbar-overlay')} onClick={() => setShowNavLeft(false)}></div>}
                    {/* user */}
                    {isLogin ? (
                        <div className={cx('navbar-user')}>
                            <Navbar navbar={activeNavbarUser} vertical />
                        </div>
                    ) : (
                        <div className={cx('navbar-user')}>
                            <Navbar navbar={navbarUser} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default memo(Header);
