import classNames from 'classnames/bind';
import style from './SingerLover.module.scss';
import OverLaySong from '../../../components/OverLaySong/OverLaySong';
import images from '../../../assets/images';
import { Responsive } from '../../../Layout/DefaultLayout/DefaultLayout';
import { Fragment, useContext } from 'react';

const cx = classNames.bind(style);

function SingerLover() {
    const { isTablet } = useContext(Responsive);

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Nghệ Sĩ Yêu Thích</h3>
            <div className={cx('list')}>
                {isTablet ? (
                    <Fragment>
                        <OverLaySong check={false} onlyPlay={true} img={images.singer} className={cx('singer-box')}>
                            <div className={cx('info-singer')}>
                                <h4>Trịnh Thăng Bình</h4>
                                <div className={cx('img-song')}>
                                    <img alt="anh" src={images.trinhthangbinh} />
                                    <img alt="anh" src={images.trinhthangbinh} />
                                    <img alt="anh" src={images.trinhthangbinh} />
                                </div>
                            </div>
                        </OverLaySong>

                        <OverLaySong check={false} onlyPlay={true} img={images.onlyc} className={cx('singer-box')}>
                            <div className={cx('info-singer')}>
                                <h4>OnLyC</h4>
                                <div className={cx('img-song')}>
                                    <img alt="anh" src={images.trinhthangbinh} />
                                    <img alt="anh" src={images.trinhthangbinh} />
                                    <img alt="anh" src={images.trinhthangbinh} />
                                </div>
                            </div>
                        </OverLaySong>

                        <OverLaySong check={false} onlyPlay={true} img={images.min} className={cx('singer-box')}>
                            <div className={cx('info-singer')}>
                                <h4>MIN</h4>
                                <div className={cx('img-song')}>
                                    <img alt="anh" src={images.trinhthangbinh} />
                                    <img alt="anh" src={images.trinhthangbinh} />
                                    <img alt="anh" src={images.trinhthangbinh} />
                                </div>
                            </div>
                        </OverLaySong>

                        <OverLaySong check={false} onlyPlay={true} img={images.huongtram} className={cx('singer-box')}>
                            <div className={cx('info-singer')}>
                                <h4>Hương Tràm</h4>
                                <div className={cx('img-song')}>
                                    <img alt="anh" src={images.trinhthangbinh} />
                                    <img alt="anh" src={images.trinhthangbinh} />
                                    <img alt="anh" src={images.trinhthangbinh} />
                                </div>
                            </div>
                        </OverLaySong>
                    </Fragment>
                ) : (
                    <Fragment>
                        <OverLaySong check={false} onlyPlay={true} img={images.singer} className={cx('singer-box')}>
                            <div className={cx('info-singer')}>
                                <h4>Trịnh Thăng Bình</h4>
                                <div className={cx('img-song')}>
                                    <img alt="anh" src={images.trinhthangbinh} />
                                    <img alt="anh" src={images.trinhthangbinh} />
                                    <img alt="anh" src={images.trinhthangbinh} />
                                </div>
                            </div>
                        </OverLaySong>

                        <OverLaySong check={false} onlyPlay={true} img={images.onlyc} className={cx('singer-box')}>
                            <div className={cx('info-singer')}>
                                <h4>OnLyC</h4>
                                <div className={cx('img-song')}>
                                    <img alt="anh" src={images.trinhthangbinh} />
                                    <img alt="anh" src={images.trinhthangbinh} />
                                    <img alt="anh" src={images.trinhthangbinh} />
                                </div>
                            </div>
                        </OverLaySong>

                        <OverLaySong check={false} onlyPlay={true} img={images.min} className={cx('singer-box')}>
                            <div className={cx('info-singer')}>
                                <h4>MIN</h4>
                                <div className={cx('img-song')}>
                                    <img alt="anh" src={images.trinhthangbinh} />
                                    <img alt="anh" src={images.trinhthangbinh} />
                                    <img alt="anh" src={images.trinhthangbinh} />
                                </div>
                            </div>
                        </OverLaySong>

                        <OverLaySong check={false} onlyPlay={true} img={images.huongtram} className={cx('singer-box')}>
                            <div className={cx('info-singer')}>
                                <h4>Hương Tràm</h4>
                                <div className={cx('img-song')}>
                                    <img alt="anh" src={images.trinhthangbinh} />
                                    <img alt="anh" src={images.trinhthangbinh} />
                                    <img alt="anh" src={images.trinhthangbinh} />
                                </div>
                            </div>
                        </OverLaySong>

                        <OverLaySong check={false} onlyPlay={true} img={images.mrsiro} className={cx('singer-box')}>
                            <div className={cx('info-singer')}>
                                <h4>Mr.Siro</h4>
                                <div className={cx('img-song')}>
                                    <img alt="anh" src={images.trinhthangbinh} />
                                    <img alt="anh" src={images.trinhthangbinh} />
                                    <img alt="anh" src={images.trinhthangbinh} />
                                </div>
                            </div>
                        </OverLaySong>
                    </Fragment>
                )}
            </div>
        </div>
    );
}

export default SingerLover;
