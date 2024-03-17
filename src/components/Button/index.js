import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    primary = false,
    Text = false,
    outline = false,
    small = false,
    large = false,
    rounded =false,
    to,
    href,
    children,
    onClick,
    className,
    leftIcon,
    rightIcon,
    ...passProp
}) {
    let Comp = 'button';
    const prop = {
        onClick,
        ...passProp,
    };

    if (to) {
        prop.to = to;
        Comp = Link;
    } else if (href) {
        prop.href = href;
        Comp = 'a';
    }

    const classNames = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        Text,
        rounded,
        [className]: className,
        leftIcon,
        rightIcon,
    });
    return (
        <Comp className={classNames}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
