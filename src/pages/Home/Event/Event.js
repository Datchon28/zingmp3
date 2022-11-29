import classNames from 'classnames/bind';
import styles from './Event.module.scss';

import { Responsive } from '../../../Layout/DefaultLayout/DefaultLayout';
import { Fragment, useContext } from 'react';
import EventItems from './EventItems';

const cx = classNames.bind(styles);

function Event() {
    const { isTablet } = useContext(Responsive);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <h3>Sự Kiện</h3>
                <div className={cx('directional')}>
                    <span className={cx('back-btn')}></span>
                    <span className={cx('forward-btn')}></span>
                </div>
            </div>

            <div className={cx('content')}>
                <div className={cx('list')}>
                    {isTablet ? (
                        <Fragment>
                            <EventItems
                                thumb={
                                    'https://photo-resize-zmp3.zmdcdn.me/w600_r12x7_webp/event/d/2/b/9/d2b986241206ec46c9617f90da42bd0b.jpg'
                                }
                                title={'BORN PINK'}
                                author={'BLACKPINK'}
                                date={'11:00 THỨ SÁU, 16 THÁNG 9'}
                            />
                            <EventItems
                                thumb={
                                    'https://photo-resize-zmp3.zmdcdn.me/w600_r12x7_webp/event/6/e/d/2/6ed24e2f794b20d0c488603cd28cab18.jpg'
                                }
                                title={'BORN PINK'}
                                author={'BLACKPINK'}
                                date={'11:00 THỨ SÁU, 16 THÁNG 9'}
                            />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <EventItems
                                thumb={
                                    'https://photo-resize-zmp3.zmdcdn.me/w600_r12x7_webp/event/d/2/b/9/d2b986241206ec46c9617f90da42bd0b.jpg'
                                }
                                title={'BORN PINK'}
                                author={'BLACKPINK'}
                                date={'11:00 THỨ SÁU, 16 THÁNG 9'}
                            />
                            <EventItems
                                thumb={
                                    'https://photo-resize-zmp3.zmdcdn.me/w600_r12x7_webp/event/6/e/d/2/6ed24e2f794b20d0c488603cd28cab18.jpg'
                                }
                                title={'BORN PINK'}
                                author={'BLACKPINK'}
                                date={'11:00 THỨ SÁU, 16 THÁNG 9'}
                            />
                            <EventItems
                                thumb={
                                    'https://photo-resize-zmp3.zmdcdn.me/w600_r12x7_webp/event/a/7/c/a/a7ca676d54709ccdebe19f532d9caf7f.jpg'
                                }
                                title={'BORN PINK'}
                                author={'BLACKPINK'}
                                date={'11:00 THỨ SÁU, 16 THÁNG 9'}
                            />
                        </Fragment>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Event;
