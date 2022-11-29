import classNames from 'classnames/bind';
import styles from './Partner.module.scss';

import { Responsive } from '../../../Layout/DefaultLayout/DefaultLayout';
import PartnerItem from './PartnerItem';
import { Fragment, useContext } from 'react';

const cx = classNames.bind(styles);

function Partner() {
    const { isMobile } = useContext(Responsive);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                {isMobile ? (
                    <p className={cx('title-text')}>Một Sản Phẩm Clone ZingMp3 Của Mèo Béo ;{'))'}</p>
                ) : (
                    <p className={cx('title-text')}>ĐỐI TÁC ÂM NHẠC</p>
                )}
            </div>

            <div className={cx('content')}>
                {isMobile ? (
                    <div className={cx('contact')}>
                        <ul className={cx('list-contact')}>
                            <li className={cx('info')}>
                                <span>Giới thiệu</span>
                            </li>
                            <li className={cx('info')}>
                                <a href="">Liên hệ</a>
                            </li>
                            <li className={cx('info')}>
                                <a href="">Quảng cáo</a>
                            </li>
                            <li className={cx('info')}>
                                <a href="">Góp ý</a>
                            </li>
                            <li className={cx('info')}>
                                <a href="">Thỏa thuận sử dụng</a>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <Fragment>
                        <PartnerItem src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/Kakao-M.png" />
                        <PartnerItem src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/empire.png" />
                        <PartnerItem src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/beggers.png" />
                        <PartnerItem src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/orcahrd.png" />
                        <PartnerItem src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/SM-Entertainment.png" />
                        <PartnerItem src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/FUGA.png" />
                        <PartnerItem src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/monstercat.png" />
                        <PartnerItem src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/sony.png" />
                        <PartnerItem src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/universal-1.png" />
                        <PartnerItem src="https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/yg.png" />
                    </Fragment>
                )}
            </div>
        </div>
    );
}

export default Partner;
