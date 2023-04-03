import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';

import styles from './Admin.module.scss';

const cx = classNames.bind(styles);

function Admin() {
    return (
        <>
            <Link className={cx('link')} to="/admin/category-list">
                Quản lý danh mục sản phẩm
            </Link>
            <Link className={cx('link')} to="admin/product">
                Quản lý sản phẩm
            </Link>
            <Link className={cx('link')} to="admin/blog">
                Quản lý blog
            </Link>
        </>
    );
}

export default Admin;
