import classNames from 'classnames/bind';
import styles from './ChartsWeekSummary.module.scss';
import { useEffect, useState } from 'react';
import ChartsWeekItem from './ChartsWeekItem/ChartsWeekItem';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function ChartsWeekSummary({ onClick }) {
    const url = `https://apizingmp3.herokuapp.com/api/charthome`;

    const [chartWeekVietNam, setChartWeekVietNam] = useState([]);
    const [chartWeekKorea, setChartWeekKorea] = useState([]);
    const [chartWeekUsUk, setChartWeekUsUk] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setChartWeekVietNam(data.data.weekChart.vn.items);
                setChartWeekKorea(data.data.weekChart.korea.items);
                setChartWeekUsUk(data.data.weekChart.us.items);
            });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('blur')} />
            <div className={cx('alpha-bgc')} />
            <header className={cx('title')}>
                <a href="" className={cx('title-link')}>
                    <h3>Bảng Xếp Hạng Tuần</h3>
                </a>
            </header>

            <body className={cx('chart-list')}>
                <div className={cx('list')}>
                    <div className={cx('item')}>
                        <div className={cx('header')}>
                            <a href="" className={cx('header-link')}>
                                <span>Việt Nam</span>
                            </a>
                            <button className={cx('play-btn')}>
                                <FontAwesomeIcon icon={faPlay} />
                            </button>
                        </div>
                        <ChartsWeekItem data={chartWeekVietNam} />

                        <div className={cx('see-all')}>
                            <a className={cx('see-all__btn')} onClick={onClick}>
                                Xem tất cả
                            </a>
                        </div>
                    </div>
                </div>

                <div className={cx('list')}>
                    <div className={cx('item')}>
                        <div className={cx('header')}>
                            <a href="" className={cx('header-link')}>
                                <span>US-UK</span>
                            </a>
                            <button className={cx('play-btn')}>
                                <FontAwesomeIcon icon={faPlay} />
                            </button>
                        </div>
                        <ChartsWeekItem data={chartWeekUsUk} />

                        <div className={cx('see-all')}>
                            <a className={cx('see-all__btn')} onClick={onClick}>
                                Xem tất cả
                            </a>
                        </div>
                    </div>
                </div>

                <div className={cx('list')}>
                    <div className={cx('item')}>
                        <div className={cx('header')}>
                            <a href="" className={cx('header-link')}>
                                <span>K-Pop</span>
                            </a>
                            <button className={cx('play-btn')}>
                                <FontAwesomeIcon icon={faPlay} />
                            </button>
                        </div>
                        <ChartsWeekItem data={chartWeekKorea} />

                        <div className={cx('see-all')}>
                            <a className={cx('see-all__btn')} onClick={onClick}>
                                Xem tất cả
                            </a>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    );
}

export default ChartsWeekSummary;
