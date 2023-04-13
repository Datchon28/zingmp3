import classNames from 'classnames/bind';
import styles from './ChartsWeekItem.module.scss';
import SongHover from '../../../../../components/SongHover';

const cx = classNames.bind(styles);

function SongItems({ data, rank }) {
    return (
        <div className={cx('song')}>
            <SongHover
                id={data.encodeId}
                className={cx('media-small')}
                rank={rank + 1}
                thumb={data.thumbnail}
                songname={data.title}
                author={data.artistsNames}
                duration={data.duration}
            />
        </div>
    );
}

export default SongItems;
