import classNames from 'classnames/bind';
import styles from './ChartsWeekDetail.module.scss';

import { faArrowDown, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import SongHover from '../../../../components/SongHover';
import axios from 'axios';

const cx = classNames.bind(styles);

const types = ['VIỆT NAM', 'US-UK', 'K-POP'];

function ChartsWeekDetail() {
    const [active, setActive] = useState('');
    const [current, setCurrent] = useState(0);

    const url = `https://apizingmp3.vercel.app/api/charthome`;
    const [chartWeekVN, setChartWeekVN] = useState([]);
    const [chartWeekUSUK, setChartWeekUSUK] = useState([]);
    const [chartWeekKPOP, setChartWeekKPOP] = useState([]);

    useEffect(() => {
        axios.get(url).then((data) => {
            setChartWeekVN(data.data.data.weekChart.vn.items);
        });
    }, [url]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('bg-alpha')}></div>
            <div className={cx('content')}>
                <div className={cx('header')}>
                    <div className={cx('title')}>
                        <h3>Bảng Xếp Hạng Tuần</h3>
                        <span>
                            <FontAwesomeIcon icon={faCirclePlay} />
                        </span>
                    </div>
                    <div className={cx('details-title')}>
                        <ul className={cx('list-title')}>
                            {types.map((type, index) => (
                                <li className={cx('list-title-item')} key={index}>
                                    <div className={cx('link')}>
                                        <span className={cx('link--to')}>{type}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={cx('calendar')}>
                        <div className={cx('time')}>
                            <button className={cx('time-btn')}>
                                <span className={cx('detailed-time')}>Tuần 37 {'(12/09  - 18/09 )'}</span>
                                <span className={cx('icon-dropdown')}>
                                    <FontAwesomeIcon icon={faArrowDown} />
                                </span>
                            </button>
                        </div>
                        <div className={cx('choose-time')}>
                            <div className={cx('board-time')}></div>
                        </div>
                    </div>
                </div>

                <div className={cx('list')}>
                    <div className={cx('list-song')}>
                        {chartWeekVN.map((song, index) => (
                            <SongHover
                                key={index}
                                rank={index + 1}
                                songname={song.title}
                                thumb={song.thumbnail}
                                author={song.artistsNames}
                                duration={song.duration}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChartsWeekDetail;
