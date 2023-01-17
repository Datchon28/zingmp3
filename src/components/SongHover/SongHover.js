import classNames from 'classnames/bind';
import style from './SongHover.module.scss';

import Hover from '../Hover/Hover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faHeart, faEllipsis, faPlay } from '@fortawesome/free-solid-svg-icons';
import MenuChildForSong from './MenuChildForSong/MenuChildForSong';
import { useState, useRef, Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateIdSong } from '../../store/SongIdStore';

const cx = classNames.bind(style);

function SongHover({ className, rank, thumb, songname, author, timesong, albumname, id }) {
    // Menu-Other
    const [openSetting, setOpenSetting] = useState(false);
    const Songchild = useRef();

    // Take current ID SONG
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState();

    const handleTakeIdSong = () => {
        const id = Songchild.current.id;
        setCurrentId(id);
    };

    useEffect(() => {
        dispatch(updateIdSong(currentId));
    }, [currentId]);
    console.log(currentId);

    // Open Menu Child
    const handleClickOpen = () => {
        setOpenSetting(!openSetting);
    };

    return (
        <div className={cx('media', className)} id={id} ref={Songchild} onClick={handleTakeIdSong}>
            <div className={cx('content')}>
                <Fragment>
                    <div className={cx('content-left')}>
                        <div className={cx('song-rank')}>
                            <span className={cx('number-rank')}>{rank}</span>
                            <div className={cx('seperate')}>
                                <span>-</span>
                            </div>
                        </div>
                        <div className={cx('song-thumb')}>
                            <figure className={cx('thumb-img')}>
                                <img alt="anh" src={thumb} />
                                <span className={cx('icon-play')}>
                                    <FontAwesomeIcon icon={faPlay} />
                                </span>
                            </figure>
                        </div>
                        <div className={cx('song-info')}>
                            <div className={cx('song-name')}>
                                <span className={cx('name')}>
                                    <span>{songname}</span>
                                </span>
                            </div>
                            <div className={cx('author')}>
                                <a href="/">
                                    <span className={cx('author-name')}>{author}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={cx('content-center')}>
                        <div className={cx('album-info')}>
                            <span className={cx('album-name')}>{albumname}</span>
                        </div>
                    </div>
                </Fragment>
                <div className={cx('content-right')}>
                    <div className={cx('time-song')}>
                        <span>05:03</span>
                    </div>
                    <div className={cx('content-right__hover')}>
                        <div className={cx('more')}>
                            <Hover tilte="Xem lời bài hát">
                                <button className={cx('icon-btn')}>
                                    <span className={cx('lyric-icon')}>
                                        <FontAwesomeIcon icon={faMicrophone} />
                                    </span>
                                </button>
                            </Hover>
                            <Hover tilte="Thêm vào thư viện">
                                <button className={cx('icon-btn')}>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </span>
                                </button>
                            </Hover>
                            <Hover tilte="Xem thêm">
                                <button className={cx('icon-btn', 'menu-child')} onClick={handleClickOpen}>
                                    <span>
                                        <FontAwesomeIcon icon={faEllipsis} />
                                    </span>
                                    {openSetting === true && (
                                        <div className={cx('menu-child-for-song')}>
                                            <MenuChildForSong ForSong thumb={thumb} songname={songname} />
                                        </div>
                                    )}
                                </button>
                            </Hover>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SongHover;
