import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMusic,
    faCircleDot,
    faChartLine,
    faRadio,
    faTableList,
    faHouse,
    faIcons,
    faStar,
    faPlus,
    faArrowRight,
    faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

import images from '../../../assets/images';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import config from '../../../config';
import { useState } from 'react';
import { createContext } from 'react';

const cx = classNames.bind(style);
export const Check = createContext();

function Sidebar() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <Check.Provider value={openMenu}>
            <div className={cx('wrapper', openMenu === true && 'hide-menu')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <div className={cx('logo-img')} />
                    </Link>
                </div>

                <Menu>
                    <MenuItem title="Cá nhân" icon={<FontAwesomeIcon icon={faHouse} />} to={config.routes.personal} />
                    <MenuItem title="Khám phá" icon={<FontAwesomeIcon icon={faCircleDot} />} to={config.routes.home} />
                    <MenuItem
                        title="#zingchart"
                        icon={<FontAwesomeIcon icon={faChartLine} />}
                        to={config.routes.zingchart}
                    />
                    <MenuItem title="Radio" icon={<FontAwesomeIcon icon={faRadio} />} to={config.routes.radio} />
                    <MenuItem
                        title="Theo dõi"
                        icon={<FontAwesomeIcon icon={faTableList} />}
                        to={config.routes.following}
                    />
                </Menu>

                <div className={cx('seperate')} />

                <Menu>
                    <div className={cx('menu-2')}>
                        <div className={cx('scroll')}>
                            <MenuItem
                                title="Nhạc Mới"
                                icon={<FontAwesomeIcon icon={faMusic} />}
                                to={config.routes.newmusic}
                            />
                            <MenuItem
                                title="Thể Loại"
                                icon={<FontAwesomeIcon icon={faIcons} />}
                                to={config.routes.category}
                            />
                            <MenuItem
                                title="Top 100"
                                icon={<FontAwesomeIcon icon={faStar} />}
                                to={config.routes.top100}
                            />
                            <MenuItem title="MV" icon={<FontAwesomeIcon icon={faTableList} />} to={config.routes.mv} />
                            <div className={cx('login-sidebar')}>
                                <h6 className={cx('title-login')}>Đăng nhập để khám phá playlist dành riêng cho bạn</h6>
                                <button className={cx('login-btn')}>ĐĂNG NHẬP</button>
                            </div>
                            <div className={cx('upgrade_vip-sidebar')}>
                                <h6 className={cx('upgrade_vip-title')}>Nghe nhạc không quảng cáo cùng kho nhạc VIP</h6>
                                <button className={cx('upgrade_vip-btn')}>NÂNG CẤP VIP</button>
                            </div>
                        </div>
                    </div>
                </Menu>

                <div className={cx('add-playlist')}>
                    <button className={cx('add-playlist-btn')}>
                        <span className={cx('add-playlist-btn-icon')}>
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                        <span>Tạo playlist mới</span>
                    </button>
                </div>

                <div className={cx('arrow-extend-menu')}>
                    <button className={cx('arrow-extend-menu-btn')} onClick={handleOpenMenu}>
                        <span className={cx('arrow-extend-menu-btn-icon')}>
                            {openMenu === true ? (
                                <FontAwesomeIcon icon={faArrowLeft} />
                            ) : (
                                <FontAwesomeIcon icon={faArrowRight} />
                            )}
                        </span>
                    </button>
                </div>
            </div>
        </Check.Provider>
    );
}

export default Sidebar;
