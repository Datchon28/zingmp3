import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from './ChartWeek.module.scss';

const cx = classNames.bind(style);

function ChartWeekItem({ src }) {
    const scrollToTop = (e) => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };
    return (
        <div className={cx('topic')}>
            <Link to="/Chart/chart-week" className={cx('topic-link')} onClick={scrollToTop}>
                <img className={cx('img')} alt="anh" src={src} />
            </Link>
        </div>
    );
}

export default ChartWeekItem;
