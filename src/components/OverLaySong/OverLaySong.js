import classNames from 'classnames/bind';
import style from './OverLaySong.module.scss';
import Hover from '../Hover/Hover';
import MenuChild from './MenuChild/MenuChild';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEllipsis, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Fragment, useState } from 'react';

const cx = classNames.bind(style);

function OverLaySong({ img, className, children, desc, to, check = true, onlyPlay = false }) {
    const isHide = check;
    const isOnlyPlay = onlyPlay;

    const [open, setOpen] = useState(false);

    const handleOpenMenuChild = () => {
        setOpen(!open);
    };
    return (
        <Link to="/" className={cx('main')}>
            <div
                className={cx('wrapper', {
                    [className]: className,
                })}
            >
                <div className={cx('item')}>
                    <img alt="anh" src={img} className={cx('img')} />
                    {isHide && (
                        <div className={cx('button')}>
                            <Hover tilte="Thêm vào thư viện">
                                <span className={cx('icon-love')}>
                                    <FontAwesomeIcon icon={faHeart} />
                                </span>
                            </Hover>
                            <span className={cx('play-link')}>
                                <FontAwesomeIcon icon={faCirclePlay} />
                            </span>
                            <div>
                                <Hover className={cx('other')} tilte="Khác">
                                    <span className={cx('icon-menu')} onClick={handleOpenMenuChild}>
                                        <FontAwesomeIcon icon={faEllipsis} />
                                    </span>
                                </Hover>
                            </div>
                        </div>
                    )}

                    {isOnlyPlay && (
                        <div className={cx('button')}>
                            <span className={cx('play-link')}>
                                <FontAwesomeIcon icon={faCirclePlay} />
                            </span>
                        </div>
                    )}
                </div>

                {open && <MenuChild />}

                <Fragment>
                    <h4 className={cx('title')}>{children}</h4>
                    <span className={cx('description')}>{desc}</span>
                </Fragment>
            </div>
        </Link>
    );
}

export default OverLaySong;
