import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import style from './Hover.module.scss';

const cx = classNames.bind(style);

function Hover({ children, tilte, placement }) {
    return (
        // <div className={cx('wrapper')}>
        <Tippy delay={[0.0]} placement={placement} interactive content={<span className={cx('title')}>{tilte}</span>}>
            {children}
        </Tippy>
        // </div>
    );
}

export default Hover;
