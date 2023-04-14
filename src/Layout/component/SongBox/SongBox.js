import classNames from 'classnames/bind';
import style from './SongBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHeart,
    faEllipsis,
    faShuffle,
    faBackwardStep,
    faCirclePlay,
    faCirclePause,
    faForwardStep,
    faRepeat,
    faClapperboard,
    faMicrophone,
    faDisplay,
    faVolumeHigh,
    faList,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Hover from '../../../components/Hover/Hover';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectIdSong } from '../../../store/SongIdStore';

const cx = classNames.bind(style);

function SongBox() {
    // Get Source Song
    const audioRef = useRef();
    const [Path, setPath] = useState();
    const [loading, setLoading] = useState(false);

    // Get Time Song
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [second, setSecond] = useState(0);

    // State Song
    const [isPlay, setIsPlay] = useState(false);
    const [toggle, setToggle] = useState(false);

    // Get Info Song
    const [info, setInfo] = useState();

    // Get ID SONG
    const idsong = useSelector(selectIdSong);
    // console.log(currentSong);

    useEffect(() => {
        if (idsong === 0) {
            return;
        }

        // Get Info Song By Api
        if (idsong !== 0) {
            const fetchInfo = async () => {
                await axios.get(`https://apizingmp3.vercel.app/api/infosong?id={${idsong}}`).then((info) => {
                    setInfo(info.data.data);
                });
            };
            fetchInfo();
        } else {
            return;
        }

        // Play Song By Api
        const fetchData = async () => {
            // call api for source song
            setLoading(true);
            await axios.get(`https://apizingmp3.vercel.app/api/song?id={${idsong}}`).then((res) => {
                const path = res.data.data[128];
                setPath(path);
            });
            // handle timer song
            const timer = audioRef.current.duration;

            const minutes = timer.toFixed(0) / 60;
            const second = (minutes - Math.floor(minutes)) * 60;
            setDuration(timer);
            setMinutes(Math.floor(minutes));
            setSecond(second.toFixed());

            // state play song
            setIsPlay(true);
            setToggle(true);
            setLoading(false);

            audioRef.current.play();
        };
        fetchData();
    }, [idsong, Path]);
    // console.log(isPlay, toggle);

    const handlePlaySong = () => {
        setToggle(!toggle);
        setIsPlay(!isPlay);

        if (isPlay === false) {
            audioRef.current.pause();
            setIsPlay(true);
            setToggle(false);
        } else {
            audioRef.current.play();
            setIsPlay(false);
            setToggle(true);
        }
    };

    const handleProgressTime = (e) => {
        if (isPlay) {
            const currentTime = Math.floor(audioRef.current.currentTime);

            setCurrentTime(currentTime);
            audioRef.value = currentTime;
        }
        // const value = e.target.value;
        // console.log(currentTime);
    };

    const UpdateTimeSongProgress = (e) => {
        const currentTime = Math.floor(audioRef.current.currentTime);
        audioRef.current.value = currentTime;
        setCurrentTime(currentTime);
        console.log(currentTime);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('music-info-box')}>
                <a className={cx('music-ava')}>
                    <img
                        alt="anh"
                        src={
                            info === undefined
                                ? 'https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-anh-dau-hoi-cham-dep-nhat-13.jpg'
                                : info.thumbnail
                        }
                    />
                    {loading && (
                        <div className={cx('loading')}>
                            <span className={cx('icon-loading')}>
                                <FontAwesomeIcon icon={faSpinner} />
                            </span>
                        </div>
                    )}
                </a>

                <div className={cx('music-info')}>
                    <h4>{info === undefined ? 'Chưa phát bài hát' : info.title}</h4>
                    <span>{info === undefined ? 'Chưa phát bài hát' : info.artistsNames}</span>
                </div>
                <div className={cx('choose-other')}>
                    <Hover tilte="Thêm vào thư viện">
                        <span className={cx('icon-love')}>
                            <FontAwesomeIcon icon={faHeart} />
                        </span>
                    </Hover>
                    <Hover tilte="Xem thêm">
                        <span className={cx('icon-menu')}>
                            <FontAwesomeIcon icon={faEllipsis} />
                        </span>
                    </Hover>
                </div>
            </div>

            <div className={cx('music-control')}>
                <div className={cx('interactive-box')}>
                    <span className={cx('icon-random')}>
                        <FontAwesomeIcon icon={faShuffle} />
                    </span>
                    <span className={cx('icon-pre')}>
                        <FontAwesomeIcon icon={faBackwardStep} />
                    </span>
                    <span className={cx('icon-play')} onClick={handlePlaySong}>
                        {toggle === false ? (
                            <FontAwesomeIcon icon={faCirclePlay} />
                        ) : (
                            <FontAwesomeIcon icon={faCirclePause} />
                        )}
                    </span>
                    <span className={cx('icon-next')}>
                        <FontAwesomeIcon icon={faForwardStep} />
                    </span>
                    <span className={cx('icon-repeat')}>
                        <FontAwesomeIcon icon={faRepeat} />
                    </span>
                </div>
                <div className={cx('muic-progress')}>
                    <span>0:00</span>
                    <div className={cx('range')}>
                        <input
                            className={cx('progres-bar')}
                            type="range"
                            step="1"
                            min="0"
                            max={duration ? duration : '100'}
                            onChange={handleProgressTime}
                            onTimeUpdate={UpdateTimeSongProgress}
                            value={currentTime}
                        />
                    </div>
                    <span>
                        {minutes}:{second}
                    </span>
                </div>
            </div>
            <div className={cx('music-setting-box')}>
                <Hover>
                    <span className={cx('mv-icon')}>
                        <FontAwesomeIcon icon={faClapperboard} />
                    </span>
                </Hover>
                <Hover tilte="Xem lời bài hát">
                    <span className={cx('lyric-icon')}>
                        <FontAwesomeIcon icon={faMicrophone} />
                    </span>
                </Hover>
                <Hover tilte="Chế độ cửa sổ">
                    <span className={cx('screen-icon')}>
                        <FontAwesomeIcon icon={faDisplay} />
                    </span>
                </Hover>
                <div className={cx('volume')}>
                    <span className={cx('volume-icon')}>
                        <FontAwesomeIcon icon={faVolumeHigh} />
                    </span>
                    <input className={cx('volume-range')} type="range" />
                </div>
                <div className={cx('seperate')} />
                <Hover tilte="Danh sách nhạc">
                    <span className={cx('list-icon')}>
                        <FontAwesomeIcon icon={faList} />
                    </span>
                </Hover>
            </div>
            <audio ref={audioRef} src={Path} className={cx('audio')} />
        </div>
    );
}

export default SongBox;
