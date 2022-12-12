import classNames from 'classnames/bind';
import style from '../Home.module.scss';

import Button from '../../../components/Button';
import images from '../../../assets/images';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
const cx = classNames.bind(style);

function Banner() {
    const url = `https://apizingmp3.herokuapp.com/api/home?page={param-page}`;

    const [banner, setBanner] = useState([]);

    useEffect(() => {
        axios(url).then((data) => {
            setBanner(data.data.data.items[0].items);
        });
    }, []);

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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 740,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className={cx('banner-wrapper')}>
            <div className={cx('banner-box')}>
                <div className={cx('banner-song', banner.length <= 0 && 'loading')}>
                    <Slider {...settings}>
                        {banner.map((item, index) => (
                            <Button to="/" className={cx('banner-link')} key={index}>
                                <div className={cx('-conbannertent')}>
                                    <img alt="anh" src={item.banner} />
                                </div>
                            </Button>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className={cx('banner-advertisement')}>
                <Button to="/" className={cx('advertisement-link')}>
                    <img alt="anh" src={images.advertisment} className={cx('advertisement-img')} />
                </Button>
            </div>
        </div>
    );
}

export default Banner;
