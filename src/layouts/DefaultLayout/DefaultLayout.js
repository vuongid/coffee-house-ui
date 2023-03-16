import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import styles from './DefaultLayout.module.scss';
import React, { useState } from 'react';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [totalQuantity, setTotalQuantity] = useState(JSON.parse(localStorage.getItem('cart'))?.totalQuantity);
    const handleSetTotalQuantity = (quantity) => {
        setTotalQuantity(quantity);
    };
    return (
        <div>
            <Header totalQuantity={totalQuantity} />
            <div className="grid wide">
                <div className={cx('container')}>
                    {React.cloneElement(children, { setTotalQuantity: handleSetTotalQuantity })}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
