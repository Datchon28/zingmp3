import classNames from 'classnames/bind';
import styles from './Partner.module.scss';

const cx = classNames.bind(styles);

function PartnerItem({ src }) {
    return (
        <div className={cx('wrapper-item')}>
            <div className={cx('item')}>
                <div className={cx('logo')}>
                    <figure className={cx('img')}>
                        <img alt="anh" src={src} />
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default PartnerItem;
