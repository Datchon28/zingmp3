import {
    faBan,
    faSliders,
    faCirclePlay,
    faCircleInfo,
    faFlag,
    faPhone,
    faRectangleAd,
    faNewspaper,
    faShield,
    faAngleRight,
    faCheck,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import style from './Setting.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const cx = classNames.bind(style);

const aboutMe = [
    {
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
        title: 'Giới thiệu ',
        to: '',
    },
    {
        icon: <FontAwesomeIcon icon={faFlag} />,
        title: 'Góp ý',
        to: '',
    },
    {
        icon: <FontAwesomeIcon icon={faPhone} />,
        title: 'Liên hệ',
        to: '',
    },
    {
        icon: <FontAwesomeIcon icon={faRectangleAd} />,
        title: 'Quảng cáo',
        to: '',
    },
    {
        icon: <FontAwesomeIcon icon={faNewspaper} />,
        title: 'Thỏa thuận sử dụng',
        to: '',
    },
    {
        icon: <FontAwesomeIcon icon={faShield} />,
        title: 'Chính sách bảo mật  ',
        to: '',
    },
];

function SettingItems() {
    const [chooseQuality, setChooseQuality] = useState(false);

    const handleQuality = () => {
        setChooseQuality(!chooseQuality);
    };

    return (
        <div className={cx('menu-item')}>
            <ul className={cx('menu-item-musc')}>
                <li className={cx('menu-item-musc-list')}>
                    <div className={cx('media-left')}>
                        <span>
                            <FontAwesomeIcon icon={faBan} />
                        </span>
                        <h4>Danh sách chặn</h4>
                    </div>
                </li>

                <li className={cx('menu-item-musc-list', 'music-quality')}>
                    <div className={cx('media-left')}>
                        <span>
                            <FontAwesomeIcon icon={faSliders} />
                        </span>
                        <h4>Chất lượng nhạc</h4>
                    </div>

                    <div className={cx('media-right')}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>

                    {/* Menu */}
                    <div className={cx('list-music-quality')}>
                        <div className={cx('music-quality-item')} onClick={handleQuality}>
                            <span className={cx('quality-128')}>SQ 128</span>
                            <div className={cx('desc')}>
                                <p className={cx('explain')}>Giảm sử dụng dữ liệu cho các kết nối chậm hơn.</p>
                                <span className={cx('icon-check')}>
                                    {chooseQuality === true && <FontAwesomeIcon icon={faCheck} />}
                                </span>
                            </div>
                        </div>
                        <div className={cx('music-quality-item')} onClick={handleQuality}>
                            <span className={cx('quality-320')}>HQ 320</span>
                            <div className={cx('desc')}>
                                <p className={cx('explain')}>
                                    Kết hợp tốt nhất giữa việc sử dụng dữ liệu và chất lượng âm thanh.
                                </p>
                                <span className={cx('icon-check')}>
                                    {chooseQuality === true && <FontAwesomeIcon icon={faCheck} />}
                                </span>
                            </div>
                        </div>
                    </div>
                </li>

                <li className={cx('menu-item-musc-list', 'ui-music')}>
                    <div className={cx('media-left')}>
                        <span>
                            <FontAwesomeIcon icon={faCirclePlay} />
                        </span>
                        <h4>Giao diện</h4>
                    </div>
                    <div className={cx('media-right')}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>

                    {/* {Menu-ui-music} */}
                    <div className={cx('list-ui-musc')}>
                        <div className={cx('ui-music-item', 'play-song-full-screen')}>
                            <span className={cx('ui-music-item--title')}>Luôn phát nhạc toàn màn hình</span>
                            <label className={cx('ui-music-item-toogle')}>
                                <input type="checkbox" />
                                <span className={cx('slider')}></span>
                            </label>
                        </div>
                        <div className={cx('ui-music-item', 'effect')}>
                            <span className={cx('ui-music-item--title')}>Hiệu ứng</span>
                            <label className={cx('ui-music-item-toogle')}>
                                <input type="checkbox" />
                                <span className={cx('slider')}></span>
                            </label>
                        </div>
                    </div>
                </li>
            </ul>

            <ul className={cx('menu-item-policy')}>
                {aboutMe.map((item, index) => (
                    <li className={cx('menu-item-policy-list')} key={index}>
                        <span>{item.icon}</span>
                        <h4>{item.title}</h4>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SettingItems;
