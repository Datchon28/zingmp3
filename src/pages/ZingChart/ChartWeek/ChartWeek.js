import classNames from 'classnames/bind';
import styles from './ChartWeek.module.scss';

import ChartsWeekSummary from './ChartsWeekSummary/ChartsWeekSummary';

const cx = classNames.bind(styles);

function ChartWeek() {
    return (
        <div className={cx('main')}>
            <ChartsWeekSummary />
        </div>
    );
}

export default ChartWeek;
