import classNames from 'classnames/bind';
import style from './ChartWeek.module.scss';
import ChartWeekItem from './ChartWeekItem';

const cx = classNames.bind(style);

function ChartWeek() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('list')}>
                <ChartWeekItem src="https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/song-vn-2x.jpg" />
                <ChartWeekItem src="https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_usuk.jpg" />
                <ChartWeekItem src="https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_kpop.jpg" />
            </div>
        </div>
    );
}

export default ChartWeek;
