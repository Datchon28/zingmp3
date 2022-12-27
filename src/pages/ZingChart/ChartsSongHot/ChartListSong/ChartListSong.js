import classNames from 'classnames/bind';
import style from './ChartListSong.module.scss';

import SongHover from '../../../../components/SongHover/SongHover';

const cx = classNames.bind(style);

function ChartListSong({ rank, data }) {
    return (
        <div className={cx('wrapper')}>
            <SongHover
                id={data.encodeId}
                rank={
                    rank === 1 ? (
                        <span className={cx('number-rank__top--1')}>{rank}</span>
                    ) : rank === 2 ? (
                        <span className={cx('number-rank__top--2')}>{rank}</span>
                    ) : rank === 3 ? (
                        <span className={cx('number-rank__top--3')}>{rank}</span>
                    ) : (
                        <span className={cx('number-rank')}>{rank}</span>
                    )
                }
                thumb={data.thumbnail}
                songname={data.title}
                author={data.artistsNames}
                // albumname={data.album.title}
            />
        </div>
    );
}

export default ChartListSong;
