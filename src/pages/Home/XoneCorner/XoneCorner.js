import classNames from 'classnames/bind';
import style from './XoneCorner.module.scss';

import { Fragment, useContext } from 'react';
import OverLaySong from '../../../components/OverLaySong/OverLaySong';
import { Responsive } from '../../../Layout/DefaultLayout/DefaultLayout';

const cx = classNames.bind(style);

function XoneCorner() {
    const { isTablet } = useContext(Responsive);

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>XONE's CORNER</h3>
            <div className={cx('list')}>
                {isTablet ? (
                    <Fragment>
                        <OverLaySong
                            className={cx('five-item')}
                            img="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/d/5/e/ed5e4635bf6983447758dbf6c29e540d.jpg"
                            children="Beat Drop "
                            desc="Thả mấy con beat cực chất"
                        />
                        <OverLaySong
                            className={cx('five-item')}
                            img="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/3/d/2/53d2d8a2aa12c5052583b7b5b473c3d8.jpg"
                            children="Bring You To The Moon"
                            desc="Bay vào không gian âm nhạc"
                        />
                        <OverLaySong
                            className={cx('five-item')}
                            img="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/3/f/f/c3ffb49fcedcddc8c915f631e9a0da27.jpg"
                            children="2022 Best New Tracks "
                            desc="Đón trend mỗi ngày cùng bài hát mới chất nhất năm 2022"
                        />
                        <OverLaySong
                            className={cx('five-item')}
                            img="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/b/a/a/7baaa24d6bf0f7060911cb8238598bfb.jpg"
                            children="Top Hits 2021"
                            desc="Top Hits đỉnh cao không thể bỏ lỡ"
                        />
                    </Fragment>
                ) : (
                    <Fragment>
                        <OverLaySong
                            className={cx('five-item')}
                            img="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/d/5/e/ed5e4635bf6983447758dbf6c29e540d.jpg"
                            children="Beat Drop "
                            desc="Thả mấy con beat cực chất"
                        />
                        <OverLaySong
                            className={cx('five-item')}
                            img="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/3/d/2/53d2d8a2aa12c5052583b7b5b473c3d8.jpg"
                            children="Bring You To The Moon"
                            desc="Bay vào không gian âm nhạc"
                        />
                        <OverLaySong
                            className={cx('five-item')}
                            img="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/3/f/f/c3ffb49fcedcddc8c915f631e9a0da27.jpg"
                            children="2022 Best New Tracks "
                            desc="Đón trend mỗi ngày cùng bài hát mới chất nhất năm 2022"
                        />
                        <OverLaySong
                            className={cx('five-item')}
                            img="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/b/a/a/7baaa24d6bf0f7060911cb8238598bfb.jpg"
                            children="Top Hits 2021"
                            desc="Top Hits đỉnh cao không thể bỏ lỡ"
                        />
                        <OverLaySong
                            className={cx('five-item')}
                            img="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/0/a/d/70ad155caea9dff8867e2a0dc0d33df8.jpg"
                            children="Romantic Smooth Jazz"
                            desc="Những bản Jazz chiều lòng người"
                        />
                    </Fragment>
                )}
            </div>
        </div>
    );
}

export default XoneCorner;
