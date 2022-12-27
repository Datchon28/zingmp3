import classNames from 'classnames/bind';
import style from './ChartBox.module.scss';

import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from '../../../config';
import { useContext, useEffect, useState } from 'react';
import SongHover from '../../../components/SongHover/SongHover';
import { Responsive } from '../../../Layout/DefaultLayout/DefaultLayout';
import axios from 'axios';

const cx = classNames.bind(style);

function ChartBox() {
    const { isMobile } = useContext(Responsive);
    const url = `https://apizingmp3.vercel.app/api/charthome`;
    const [chartsSong, setChartsSongs] = useState([]);

    useEffect(() => {
        axios.get(url).then((data) => {
            setChartsSongs(data.data.data.RTChart.items);
        });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('bg-blur')} />
            <header className={cx('header')}>
                <a href={config.routes.zingchart} className={cx('title-link')}>
                    #zingchart
                </a>
                <button className={cx('icon')}>
                    <FontAwesomeIcon icon={faPlay} />
                </button>
            </header>

            <div className={cx('container')}>
                <div className={cx('list-music')}>
                    <div className={cx('top-song')}>
                        {chartsSong
                            .map((song, index) => (
                                <SongHover
                                    key={index}
                                    rank={index + 1}
                                    songname={song.title}
                                    author={song.artistsNames}
                                    thumb={song.thumbnail}
                                    // albumname={song.album.title}
                                />
                            ))
                            .splice(0, isMobile ? 5 : 20)}
                    </div>
                    <div className={cx('see-more')}>
                        <Button className={cx('see-more_btn')} to={config.routes.zingchart}>
                            Xem thêm
                        </Button>
                    </div>
                </div>
                <div className={cx('chart-music')}></div>
            </div>
        </div>
    );
}

export default ChartBox;
