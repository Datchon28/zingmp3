import classNames from 'classnames/bind';
import style from './NewMusicEveryDay.module.scss';
import images from '../../../assets/images';
import OverLaySong from '../../../components/OverLaySong/OverLaySong';
import { Fragment, useContext, useState } from 'react';
import { Responsive } from '../../../Layout/DefaultLayout/DefaultLayout';

const cx = classNames.bind(style);

function NewMusicEveryDay() {
    const { isTablet, isMobile } = useContext(Responsive);

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Nhạc Mới Mỗi Ngày</h3>
            <div className={cx('list')}>
                {isTablet ? (
                    <Fragment>
                        <OverLaySong
                            img={images.v_pop}
                            className={cx('five-item')}
                            children="V-Pop Tháng 8/2022"
                            desc="Phương Ly, Hải Đăng, ERIK,..."
                        />

                        <OverLaySong
                            img={images.us_uk}
                            className={cx('five-item')}
                            children="UK-UK Tháng 8/2022"
                            desc="Beyoncé, Calvin Harris, Billie Eillish..."
                        />
                        <OverLaySong
                            img={images.k_pop}
                            className={cx('five-item')}
                            children="K-POP Tháng 8/2022"
                            desc="STAYC, ATEEZ, P1 Harmony..."
                        />
                        <OverLaySong
                            img={images.c_pop}
                            className={cx('five-item')}
                            children="C-POP Tháng 8/2022"
                            desc="Thái Từ Khôn, INTO1, Phó Mộng Đồng..."
                        />
                    </Fragment>
                ) : (
                    <Fragment>
                        <OverLaySong
                            img={images.v_pop}
                            className={cx('five-item')}
                            children="V-Pop Tháng 8/2022"
                            desc="Phương Ly, Hải Đăng, ERIK,..."
                        />

                        <OverLaySong
                            img={images.us_uk}
                            className={cx('five-item')}
                            children="UK-UK Tháng 8/2022"
                            desc="Beyoncé, Calvin Harris, Billie Eillish..."
                        />
                        <OverLaySong
                            img={images.k_pop}
                            className={cx('five-item')}
                            children="K-POP Tháng 8/2022"
                            desc="STAYC, ATEEZ, P1 Harmony..."
                        />
                        <OverLaySong
                            img={images.c_pop}
                            className={cx('five-item')}
                            children="C-POP Tháng 8/2022"
                            desc="Thái Từ Khôn, INTO1, Phó Mộng Đồng..."
                        />
                        <OverLaySong
                            img={images.v_indie}
                            className={cx('five-item')}
                            children="INDIE VIÊT Tháng 8/2022"
                            desc="Trang, T.R.I, buitruonglinh..."
                        />
                    </Fragment>
                )}
            </div>
        </div>
    );
}

export default NewMusicEveryDay;
