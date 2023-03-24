import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.scss';
import { dropDownIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Navbar({ children, to, sub, icon, qty, onClick }) {
    return (
        <div className={cx('nav-item')}>
            <NavLink className={(nav) => cx('nav-link', { active: nav.isActive })} to={to} onClick={onClick}>
                {children && <span className={cx('nav-title')}>{children}</span>}
                {icon && (
                    <span className={cx('nav-icon')}>
                        {icon}
                        {qty && <span className={cx('badge')}>{qty}</span>}
                    </span>
                )}
                {sub && <span className={cx('drop-icon')}>{dropDownIcon}</span>}
            </NavLink>
            {sub && (
                <div className={cx('drop-menu')}>
                    {sub.map((sub, index) => {
                        return (
                            <div key={index} className={cx('drop-menu-item')}>
                                <NavLink to={sub.to} className={cx('drop-link')}>
                                    {sub.title}
                                </NavLink>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Navbar;
