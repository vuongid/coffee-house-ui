import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Navbar from './Navbar';
import { cartIcon, userIcon, barsIcon, closeIcon } from '~/components/Icons';
import { useState } from 'react';

const cx = classNames.bind(styles);
const navbar = [
    {
        title: 'Menu',
        to: '/menu',
        sub: [
            { title: 'Tất cả' },
            { title: 'Món Tết' },
            { title: 'Cà Phê' },
            { title: 'CloudFee' },
            { title: 'CloudTea' },
            { title: 'Trà' },
            { title: 'Hi-Tea Heathy' },
            { title: 'Bánh & Snack' },
            { title: 'Tại Nhà' },
        ],
    },
    {
        title: 'Chuyện Nhà',
        to: '/blog',
        sub: [{ title: 'Coffeeholic' }, { title: 'Teaholic' }, { title: 'Blogholic' }],
    },
    {
        title: 'Cảm Hứng CloudFee',
        to: '/blog',
    },
    {
        title: 'Cửa Hàng',
        to: '/store',
    },
    {
        title: 'Tuyển Dụng',
        to: '/hiring',
    },
];

const navbarUser = [
    {
        icon: cartIcon,
        qty: 6,
        to: '/cart',
    },
    {
        // title: 'vuong',
        icon: userIcon,
        to: '/',
    },
];

function Header() {
    const [showNavRight, setShowNavRight] = useState(false);

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
                    <div className={cx('navbar-user')}>
                        {navbarUser.map((navbar, index) => {
                            return (
                                <Navbar key={index} to={navbar.to} icon={navbar.icon} qty={navbar.qty}>
                                    {navbar.title}
                                </Navbar>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
