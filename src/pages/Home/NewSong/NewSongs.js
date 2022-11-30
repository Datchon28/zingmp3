import classNames from 'classnames/bind';
import style from './NewSongs.module.scss';

import NewSongItem from './NewSongItem';
import SectionPlayList from './SectionPlayList/SectionPlayList';
import { Responsive } from '../../../Layout/DefaultLayout/DefaultLayout';
import { useEffect, useState, useContext, Fragment } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import axios from 'axios';

const cx = classNames.bind(style);

function NewSongs() {
    const url = `https://apizingmp3.herokuapp.com/api/newreleasechart`;

    const [newSongs, setNewSongs] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);

    const { isTablet, isMobile } = useContext(Responsive);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
    };

    useEffect(() => {
        axios.get(url).then((data) => {
            setNewSongs(data.data.data.items);
            setNewAlbums(data.data.data.items);
        });
    });

    return (
        <div className={cx('main')}>
            <div className={cx('head')}>
                <h3 className={cx('title')}>Nhạc Mới</h3>
                <Link to="/newmusic">
                    <span>Tất cả</span>
                </Link>
            </div>
            <div className={cx('content')}>
                <div className={cx('newsong__content')}>
                    {newSongs.slice(0, isTablet ? 2 : 3).map((item, index) => (
                        <NewSongItem
                            key={index}
                            src={item.thumbnail}
                            name={item.title}
                            author={item.artistsNames}
                            rank={index + 1}
                            date={item.album.releaseDate}
                        />
                    ))}
                </div>

                <div className={cx('section-playlist__content')}>
                    {isMobile ? (
                        <Slider {...settings}>
                            {newAlbums
                                .map((item, index) => <SectionPlayList data={item.album} key={index} />)
                                .splice(0, isTablet ? 4 : 5)}
                        </Slider>
                    ) : (
                        <Fragment>
                            {newAlbums
                                .map((item, index) => <SectionPlayList data={item.album} key={index} />)
                                .splice(0, isTablet ? 4 : 5)}
                        </Fragment>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NewSongs;
