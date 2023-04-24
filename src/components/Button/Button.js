import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ children, to, href, primary, full, leftIcon, rightIcon, className, backgroundSlide, ...passProps }) {
    let Comp = 'button';
    const _props = {
        ...passProps,
    };
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        full,
        backgroundSlide,
    });

    if (to) {
        _props.to = to;
        Comp = Link;
    } else if (href) {
        _props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {..._props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Button;
