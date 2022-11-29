import classNames from 'classnames/bind';
import styles from './Singers.module.scss';
import Button from '../../../components/Button';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cx = classNames.bind(styles);

// const singer []

function Singers() {
    const display = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                },
            },
        ],
    };

    return (
        <div className={cx('wrapper')}>
            <Slider {...display} className={cx('slider')}>
                <Button to="/" className={cx('singers-link')}>
                    <div className={cx('singers-content')}>
                        <img
                            alt="anh"
                            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/hoa-minzy.png"
                        />
                    </div>
                </Button>
                <Button to="/" className={cx('singers-link')}>
                    <div className={cx('singers-content')}>
                        <img
                            alt="anh"
                            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/huong-ly.png"
                        />
                    </div>
                </Button>
                <Button to="/" className={cx('singers-link')}>
                    <div className={cx('singers-content')}>
                        <img
                            alt="anh"
                            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/mr-siro.png"
                        />
                    </div>
                </Button>
                <Button to="/" className={cx('singers-link')}>
                    <div className={cx('singers-content')}>
                        <img
                            alt="anh"
                            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/onlyc.png"
                        />
                    </div>
                </Button>
                <Button to="/" className={cx('singers-link')}>
                    <div className={cx('singers-content')}>
                        <img
                            alt="anh"
                            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/erik.png"
                        />
                    </div>
                </Button>
                <Button to="/" className={cx('singers-link')}>
                    <div className={cx('singers-content')}>
                        <img
                            alt="anh"
                            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/justatee.png"
                        />
                    </div>
                </Button>
                <Button to="/" className={cx('singers-link')}>
                    <div className={cx('singers-content')}>
                        <img
                            alt="anh"
                            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/duc-phuc.png"
                        />
                    </div>
                </Button>
                <Button to="/" className={cx('singers-link')}>
                    <div className={cx('singers-content')}>
                        <img
                            alt="anh"
                            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/karik.png"
                        />
                    </div>
                </Button>
            </Slider>
        </div>
    );
}

export default Singers;
