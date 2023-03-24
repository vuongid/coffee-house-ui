import Header from '~/layouts/components/Header';
import classNames from 'classnames/bind';

import Footer from '~/layouts/components/Footer';
import Sidebar from './Sidebar';
import styles from './SidebarLayout.module.scss';
import React, { useState } from 'react';

const cx = classNames.bind(styles);

function SidebarLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('container')}>
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-3 m-0 c-0">
                            <Sidebar />
                        </div>
                        <div className="col l-9 m-12 c-12">
                            <div className={cx('content')}>{children}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SidebarLayout;
