import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { coffeeIcon } from '~/components/Icons';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Menu({ menu }) {
    return (
        <div className={cx('menu')}>
            {menu.map((item, index) => (
                <NavLink to={item.to} key={index} className={(nav) => cx('item', { active: nav.isActive })}>
                    <span className={cx('icon')}>{coffeeIcon}</span>
                    <span className={cx('title')}>{item.title}</span>
                </NavLink>
            ))}
        </div>
    );
}

export default Menu;
