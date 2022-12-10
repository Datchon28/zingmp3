import classNames from 'classnames/bind';
import style from './SideBarMobile.module.scss';

import Menu from '../Menu';
import MenuItem from '../Menu/MenuItem';
import {
    faMusic,
    faCircleDot,
    faChartLine,
    faRadio,
    faTableList,
    faHouse,
    faIcons,
} from '@fortawesome/free-solid-svg-icons';
import config from '../../../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(style);

function SideBarMobile() {
    return (
        <div className={cx('wrapper')}>
            <header>
                <div className={cx('user')}>
                    <div className={cx('avatar')}>
                        <img
                            className={cx('avatar-img')}
                            alt="avatar"
                            src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                        />
                    </div>
                    <div className={cx('action')}>
                        <div className={cx('login-user')}>
                            <a href="/">
                                <h4 className={cx('login-user-title')}>Đăng nhập</h4>
                            </a>
                        </div>
                        <div className={cx('vip-info')}>
                            <a href="/" className={cx('upgrade-vip')}>
                                Nâng cấp VIP
                            </a>
                            <a href="/" className={cx('take-code-vip')}>
                                Nhận code VIP
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <body>
                <Menu>
                    <MenuItem title="TRANG CHỦ" icon={<FontAwesomeIcon icon={faCircleDot} />} to={config.routes.home} />
                    <MenuItem
                        title="#ZINGCHART"
                        icon={<FontAwesomeIcon icon={faChartLine} />}
                        to={config.routes.zingchart}
                    />
                    <MenuItem
                        title="MỚI PHÁT HÀNH"
                        icon={<FontAwesomeIcon icon={faMusic} />}
                        to={config.routes.newmusic}
                    />
                    <MenuItem title="Thể Loại" icon={<FontAwesomeIcon icon={faIcons} />} to={config.routes.category} />
                    <MenuItem title="MV" icon={<FontAwesomeIcon icon={faTableList} />} to={config.routes.mv} />
                    <MenuItem title="Radio" icon={<FontAwesomeIcon icon={faRadio} />} to={config.routes.radio} />
                    <MenuItem
                        title="Theo dõi"
                        icon={<FontAwesomeIcon icon={faTableList} />}
                        to={config.routes.following}
                    />
                    <MenuItem title="Cá nhân" icon={<FontAwesomeIcon icon={faHouse} />} to={config.routes.personal} />
                </Menu>
            </body>
        </div>
    );
}

export default SideBarMobile;
