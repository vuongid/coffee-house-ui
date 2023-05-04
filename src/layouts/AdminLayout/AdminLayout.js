import classNames from 'classnames/bind';
import Navbar from '../components/Header/Navbar/Navbar';

import styles from './AdminLayout.module.scss';
import { useDispatch } from 'react-redux';
import { authLogout } from '~/actions/auth';
import { Link } from 'react-router-dom';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const navbar = [
    { title: 'Danh Mục', to: '/admin/category-list' },
    { title: 'Sản Phẩm', to: '/admin/product-list' },
    { title: 'Blog', to: '/admin/blog-list' },
];

function AdminLayout({ children }) {
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(authLogout());
    };
    return (
        <>
            <div className={cx('header')}>
                <div className={cx('grid wide')}>
                    <div className={cx('header-container')}>
                        <Link className={cx('logo')} to="/">
                            <img src={images.logo} alt="Coffee House" className={cx('logo-img')} />
                        </Link>{' '}
                        <div className={cx('navbar')}>
                            <Navbar navbar={navbar} />
                        </div>
                        <div className={cx('user')}>
                            <div className={cx('logout')} onClick={handleLogout}>
                                logout
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('grid wide')}>
                <div className={cx('container')}>{children}</div>
            </div>
        </>
    );
}

export default AdminLayout;
