import classNames from 'classnames/bind';
import style from './Modal.module.scss';

const cx = classNames.bind(style);

function Modal({ children, classNames }) {
    return <div className={cx('wrapper', classNames)}>{children}</div>;
}

export default Modal;
