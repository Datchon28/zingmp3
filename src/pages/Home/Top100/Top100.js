import classNames from 'classnames/bind';
import style from './Top100.module.scss';

import { Responsive } from '../../../Layout/DefaultLayout/DefaultLayout';
import OverLaySong from '../../../components/OverLaySong/OverLaySong';
import { useState, useEffect, useContext, Fragment } from 'react';

const cx = classNames.bind(style);

function Top100() {
    const [top100, setTop100] = useState([]);
    const { isTablet } = useContext(Responsive);

    useEffect(() => {}, []);
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Top 100</h3>
            <div className={cx('list')}>
                {isTablet ? (
                    <Fragment>
                        <OverLaySong
                            img="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/8/0/f/980fe220bd14602b466aeca6c0f8ba97.jpg"
                            className={cx('five-item')}
                            children="Top 100 Bài Hát Nhạc Trẻ Hay"
                            desc="Khang Việt,Jack - J97,Miu Lê,..."
                        />
                        <OverLaySong
                            img="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/0/6/4/606430a29783ea7f864de569bb8a45d0.jpg"
                            className={cx('five-item')}
                            children="Top 100 Pop Âu Mỹ Hay Nhất"
                            desc="Khang Việt,Jack - J97,Miu Lê,..."
                        />
                        <OverLaySong
                            img="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/5/f/c/c5fc615c43215c6b72676f42767855ee.jpg"
                            className={cx('five-item')}
                            children="Top 100 Nhạc..."
                            desc="Khang Việt,Jack - J97,Miu Lê,..."
                        />
                        <OverLaySong
                            img="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/8/e/7/f8e7c3b24c84778dbf8734c76e129cd3.jpg"
                            className={cx('five-item')}
                            children="Top 100 Nhạc Trữ Tình Hay"
                            desc="Khang Việt,Jack - J97,Miu Lê,..."
                        />
                    </Fragment>
                ) : (
                    <Fragment>
                        <OverLaySong
                            img="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/8/0/f/980fe220bd14602b466aeca6c0f8ba97.jpg"
                            className={cx('five-item')}
                            children="Top 100 Bài Hát Nhạc Trẻ Hay"
                            desc="Khang Việt,Jack - J97,Miu Lê,..."
                        />
                        <OverLaySong
                            img="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/0/6/4/606430a29783ea7f864de569bb8a45d0.jpg"
                            className={cx('five-item')}
                            children="Top 100 Pop Âu Mỹ Hay Nhất"
                            desc="Khang Việt,Jack - J97,Miu Lê,..."
                        />
                        <OverLaySong
                            img="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/5/f/c/c5fc615c43215c6b72676f42767855ee.jpg"
                            className={cx('five-item')}
                            children="Top 100 Nhạc..."
                            desc="Khang Việt,Jack - J97,Miu Lê,..."
                        />
                        <OverLaySong
                            img="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/8/e/7/f8e7c3b24c84778dbf8734c76e129cd3.jpg"
                            className={cx('five-item')}
                            children="Top 100 Nhạc Trữ Tình Hay"
                            desc="Khang Việt,Jack - J97,Miu Lê,..."
                        />
                        <OverLaySong
                            img="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/b/4/1/3b41c07f81c8f5cf9bd1e5eaac39ad28.jpg"
                            className={cx('five-item')}
                            children="Top 100 Nhạc Hàn Quốc Hay"
                            desc="Khang Việt,Jack - J97,Miu Lê,..."
                        />
                    </Fragment>
                )}
            </div>
        </div>
    );
}

export default Top100;
