import classNames from 'classnames/bind';
import styles from '../ZingChart.module.scss';
import ChartListSong from './ChartListSong/ChartListSong';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function ChartsSongHot() {
    const url = `https://apizingmp3.herokuapp.com/api/charthome`;

    const [chart, setChart] = useState([]);
    const [isHide, setIsHide] = useState(false);

    const handleHIde = () => {
        setIsHide(true);
    };

    useEffect(() => {
        axios.get(url).then((data) => {
            setChart(data.data.data.RTChart.items);
        });
    }, []);

    return (
        <Fragment>
            <header className={cx('title')}>
                <h2>#zingchart</h2>
                <button className={cx('icon-play')}>
                    <span>
                        <FontAwesomeIcon icon={faPlay} />
                    </span>
                </button>
            </header>

            <div className={cx('list-song')}>
                {isHide === true ? (
                    <div className={cx('chart-list-song')}>
                        {chart.map((item, index) => (
                            <ChartListSong key={index} rank={index + 1} data={item} />
                        ))}
                    </div>
                ) : (
                    <div className={cx('chart-list-song')}>
                        {chart
                            .map((item, index) => <ChartListSong key={index} rank={index + 1} data={item} />)
                            .splice(0, 10)}
                    </div>
                )}
                {isHide === false && (
                    <div className={cx('see-all')}>
                        <button className={cx('see-all__btn')} onClick={handleHIde}>
                            <span>Xem top 100</span>
                        </button>
                    </div>
                )}
            </div>
        </Fragment>
    );
}

export default ChartsSongHot;
