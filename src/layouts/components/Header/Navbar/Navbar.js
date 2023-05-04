import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.scss';
import { dropDownIcon } from '~/components/Icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Navbar({ navbar, vertical = false }) {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleClick = (index) => {
        if (activeMenu === index) {
            setActiveMenu(null);
        } else {
            setActiveMenu(index);
        }
    };

    return navbar.map((item, index) => (
        <div key={index} className={cx('nav-item', { 'nav-item-vertical': vertical })}>
            <NavLink className={(nav) => cx('nav-link', { active: nav.isActive })} to={item.to} onClick={item?.onClick}>
                {item.title && <span className={cx('nav-title')}>{item.title}</span>}
                {item.icon && (
                    <span className={cx('nav-icon')}>
                        {item.icon}
                        {item.qty && <span className={cx('badge')}>{item.qty}</span>}
                    </span>
                )}
                {item.sub && (
                    <span
                        className={cx('drop-icon')}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleClick(index);
                        }}
                    >
                        {dropDownIcon}
                    </span>
                )}
            </NavLink>
            {item.sub && (
                <div
                    className={cx(
                        'drop-menu',
                        { 'drop-menu-vertical': vertical },
                        { 'active-drop': activeMenu === index },
                    )}
                >
                    {item.sub.map((sub, index) => {
                        return (
                            <div key={index} className={cx('drop-menu-item')}>
                                <NavLink
                                    to={sub.to}
                                    className={cx('drop-link', { 'drop-link-vertical': vertical })}
                                    onClick={sub.onClick}
                                >
                                    {sub.title}
                                </NavLink>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    ));
}

export default Navbar;
