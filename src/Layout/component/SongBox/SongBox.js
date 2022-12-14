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
    const [duration, setDuration] = useState();
    const [Path, setPath] = useState();

    // State Song
    const [isPlay, setIsPlay] = useState(false);

    // Get Info Song
    const [info, setInfo] = useState();

    // Get ID SONG
    const idsong = useSelector(selectIdSong);
    console.log(idsong);

    useEffect(() => {
        if (idsong === undefined) {
            return;
        }

        // Get Info Song By Api
        if (idsong !== undefined) {
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
            const data = await axios.get(`https://apizingmp3.vercel.app/api/song?id={${idsong}}`).then((res) => {
                const json = res.data.data[128];
                setPath(json);
            });
            const timer = await audioRef.current.duration;
            setDuration(timer);
            setIsPlay(true);
        };
        fetchData();
        audioRef.current.play();
    }, [idsong]);

    const handlePlaySong = () => {
        setIsPlay(!isPlay);

        if (isPlay === false) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
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
                </a>

                <div className={cx('music-info')}>
                    <h4>{info === undefined ? 'Ch??a ph??t b??i h??t' : info.title}</h4>
                    <span>{info === undefined ? 'Ch??a ph??t b??i h??t' : info.artistsNames}</span>
                </div>
                <div className={cx('choose-other')}>
                    <Hover tilte="Th??m v??o th?? vi???n">
                        <span className={cx('icon-love')}>
                            <FontAwesomeIcon icon={faHeart} />
                        </span>
                    </Hover>
                    <Hover tilte="Xem th??m">
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
                        {isPlay === false ? (
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
                        <input className={cx('progres-bar')} type="range" range="1" />
                    </div>
                    <span>04:53</span>
                </div>
            </div>
            <div className={cx('music-setting-box')}>
                <Hover>
                    <span className={cx('mv-icon')}>
                        <FontAwesomeIcon icon={faClapperboard} />
                    </span>
                </Hover>
                <Hover tilte="Xem l???i b??i h??t">
                    <span className={cx('lyric-icon')}>
                        <FontAwesomeIcon icon={faMicrophone} />
                    </span>
                </Hover>
                <Hover tilte="Ch??? ????? c???a s???">
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
                <Hover tilte="Danh s??ch nh???c">
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
