import classNames from 'classnames/bind';
import { NavLink, useNavigate } from 'react-router-dom';

import styles from './Sidebar.module.scss';
import { coffeeIcon } from '~/components/Icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Sidebar({ menu, url }) {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [viewportWidth]);

    const handleSelectChange = (event) => {
        const selectedSlug = event.target.value;
        navigate(`/${url}/${selectedSlug}`);
    };

    if (viewportWidth < 1024) {
        return (
            <div className={cx('menu')}>
                <select onChange={handleSelectChange}>
                    {menu.map((item, index) => (
                        <option key={index} value={item.slug}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
        );
    }

    return (
        <aside>
            <div className={cx('menu')}>
                {menu.map((item, index) => (
                    <NavLink
                        to={`/${url}/${item.slug}`}
                        key={index}
                        className={(nav) => cx('item', { active: nav.isActive })}
                    >
                        <span className={cx('icon')}>{coffeeIcon}</span>
                        <span className={cx('title')}>{item.name}</span>
                    </NavLink>
                ))}
            </div>
        </aside>
    );
}

export default Sidebar;
