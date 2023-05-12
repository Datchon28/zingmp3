import classNames from 'classnames/bind';
import style from './SingerLover.module.scss';
import OverLaySong from '../../../components/OverLaySong/OverLaySong';
import images from '../../../assets/images';
import { Responsive } from '../../../Layout/DefaultLayout/DefaultLayout';
import { Fragment, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(style);

function SingerLover() {
    const { isTablet } = useContext(Responsive);
    const [singers, setSingers] = useState([])
    const url = 'https://apizingmp3.vercel.app/api/home?page={playlist}'

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(url).then((data) => {
                setSingers(data.data.data.items[5].items)
            });
        };
        fetchData();
    },[url])

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Nghệ Sĩ Yêu Thích</h3>
            <div className={cx('list')}>
                {isTablet ? (
                    singers.splice(0,4).map((item, index) => (
                        <div className={cx('singer')} key={index} id={item.encodeId}>
                            <OverLaySong check={false} onlyPlay={true} img={item.thumbnail} className={cx('singer-box')}>
                                <div className={cx('info-singer')} >
                                    <h4>{item.artists[0].name}</h4>
                                </div>
                            </OverLaySong>
                            <div className={cx('desc')}>
                                <span >{item.sortDescription}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    singers.map((item, index) => (
                       <div className={cx('singer')} key={index} id={item.encodeId}>
                            <OverLaySong check={false} onlyPlay={true} img={item.thumbnail} className={cx('singer-box')}>
                                <div className={cx('info-singer')} >
                                    <h4>{item.artists[0].name}</h4>
                                </div>
                            </OverLaySong>
                            <div className={cx('desc')}>
                                <span >{item.sortDescription}</span>
                            </div>
                       </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default SingerLover;
