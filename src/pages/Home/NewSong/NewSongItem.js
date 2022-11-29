import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './NewSongs.module.scss';

const cx = classNames.bind(style);

function NewSongItem({ src, name, author, rank, date }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('box')}>
                <div className={cx('thumb')}>
                    <img className={cx('img')} src={src} />
                    <span className={cx('icon-play')}>
                        <FontAwesomeIcon icon={faCirclePlay} />
                    </span>
                </div>
                <div className={cx('info')}>
                    <div className={cx('info-song')}>
                        <h4 className={cx('name-song')}>{name}</h4>
                        <span className={cx('author')}>{author}</span>
                    </div>
                    <div className={cx('info-rating')}>
                        <span className={cx('rank')}>
                            {'#'}
                            {rank}
                        </span>
                        <span className={cx('release-date')}>{date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewSongItem;
