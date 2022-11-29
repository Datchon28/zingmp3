import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

function Menu({ children }) {
    return <ul className={cx('list-control')}>{children}</ul>;
}

export default Menu;
