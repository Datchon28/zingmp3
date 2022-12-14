import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    className,
    text = false,
    outline = false,
    small = false,
    large = false,
    primary = false,
    rounded = false,
    children,
    leftIcon,
    rightIcon,
    onClick,
    disabled,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        ...passProps,
        onClick,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        text,
        primary,
        outline,
        small,
        large,
        disabled,
        rounded,
        leftIcon,
    });
    return (
        <Comp className={classes} {...props}>
            {/* {leftIcon && <span className={cx('icon')}>{leftIcon}</span>} */}
            {/* <span className={cx('title')}>{children}</span> */}
            {/* {rightIcon && <span className={cx('icon')}>{rightIcon}</span>} */}
            {children}
        </Comp>
    );
}

export default Button;
