import classNames from 'classnames/bind';
import styles from './ZingChart.module.scss';
import ChartsSongHot from './ChartsSongHot/ChartsSongHot';
import ChartsWeekSummary from './ChartWeek/ChartsWeekSummary/ChartsWeekSummary';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function ZingChart() {
    const navigate = useNavigate();

    const handleClickTo = () => {
        navigate('/Chart/chart-week');
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    return (
        <div className={cx('wrapper')}>
            <Fragment>
                {/* Chart Song */}
                <div className={cx('content-chart-default')}>
                    <ChartsSongHot />
                </div>
                {/* Chart Week */}
                <div className={cx('content-chart-week')}>
                    <ChartsWeekSummary onClick={handleClickTo} />
                </div>
            </Fragment>
        </div>
    );
}

export default ZingChart;
