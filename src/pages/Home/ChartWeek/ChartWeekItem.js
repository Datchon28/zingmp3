import classNames from 'classnames/bind';
import style from './ChartWeek.module.scss';

const cx = classNames.bind(style);

function ChartWeekItem({ src }) {
    return (
        <div className={cx('topic')}>
            <a href="/" className={cx('topic-link')}>
                <img className={cx('img')} alt="anh" src={src} />
            </a>
        </div>
    );
}

export default ChartWeekItem;
