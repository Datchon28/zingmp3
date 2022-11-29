import classNames from 'classnames/bind';
import styles from './Event.module.scss';

const cx = classNames.bind(styles);

function EventItems({ thumb, title, author, date }) {
    return (
        <div className={cx('item')}>
            <div className={cx('banner')}>
                <figure className={cx('banner-thumb')}>
                    <div className={cx('background-tilte')} />

                    <img alt="anh" src={thumb} />
                </figure>
                <div className={cx('infomation')}>
                    <span className={cx('info-name')}>
                        {title} {'(Album)'} {author}
                    </span>
                    <span className={cx('info-time')}>{date}</span>
                </div>
            </div>
            <div className={cx('care-about')}>
                <div className={cx('amount-care')}>
                    <span>Lượt quan tâm</span>
                </div>
                <div className={cx('amount-care')}>
                    <button className={cx('care-btn')}>Quan Tâm</button>
                </div>
            </div>
        </div>
    );
}

export default EventItems;
