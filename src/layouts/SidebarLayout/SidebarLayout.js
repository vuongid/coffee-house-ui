import Header from '~/layouts/components/Header';
import classNames from 'classnames/bind';

import Footer from '~/layouts/components/Footer';
import Sidebar from './Sidebar';
import styles from './SidebarLayout.module.scss';
import { useEffect, useState } from 'react';
import { getAllCategory } from '~/services/categoryService';

const cx = classNames.bind(styles);

function SidebarLayout({ children }) {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const res = await getAllCategory();
            setMenu(res);
        };
        fetchAPI();
    }, []);

    return (
        <div>
            <Header />
            <div className={cx('container')}>
                <div className="grid wide pd">
                    <div className="row">
                        <div className="col l-3 m-12 c-12">
                            <Sidebar menu={menu} url={'menu'} />
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
