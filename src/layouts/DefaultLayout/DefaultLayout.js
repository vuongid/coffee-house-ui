import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="grid wide">
                <div className={cx('container')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
