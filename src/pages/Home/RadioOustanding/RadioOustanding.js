import classNames from 'classnames/bind';
import style from './RadioOustanding.module.scss';

import { Responsive } from '../../../Layout/DefaultLayout/DefaultLayout';
import { Fragment, useContext } from 'react';
import RadioOustandingItem from './RadioOustandingItem';

const cx = classNames.bind(style);

function RadioOustanding() {
    const { isTablet } = useContext(Responsive);

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Radio Nổi Bật</h3>
            <div className={cx('list')}>
                {isTablet ? (
                    <Fragment>
                        <RadioOustandingItem
                            title="K-POP"
                            avatar="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/c/f/2/4/cf2428f7e56a8c2a52d84cb106891de2.jpg"
                            thumb="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/c/2/1/bc2115886f2e2e9f7cf2fa28a39cda12.jpg"
                        />
                        <RadioOustandingItem
                            title="Chạm"
                            avatar="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/7/7/8/d/778d152062edfbe0e4c4abf151858bf0.jpg"
                            thumb="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/2/3/5/e235117d191db9f7bbc82a3d31f17e60.jpg"
                        />
                        <RadioOustandingItem
                            title="XONE Radio"
                            avatar="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/0/8/2/5/0825d8cd559dee502625a25d540c636a.jpg"
                            thumb="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/1/4/8/4/1484770fd9ff1b95591d96ac65598d1c.jpg"
                        />
                        <RadioOustandingItem
                            title="Acoustic"
                            avatar="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/0/7/7/a/077a4a9905debaa87c3c63a3386dc39e.jpg"
                            thumb="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/0/7/7/a/077a4a9905debaa87c3c63a3386dc39e.jpg"
                        />
                        <RadioOustandingItem
                            title="Bolero"
                            avatar="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/3/0/5/1305cd954d22d89fef4354301613fd68.jpg"
                            thumb="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/4/8/c/e/48cefd41cfc03533d52303190f47e6ef.jpg"
                        />
                    </Fragment>
                ) : (
                    <Fragment>
                        <RadioOustandingItem
                            title="K-POP"
                            avatar="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/c/f/2/4/cf2428f7e56a8c2a52d84cb106891de2.jpg"
                            thumb="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/c/2/1/bc2115886f2e2e9f7cf2fa28a39cda12.jpg"
                        />
                        <RadioOustandingItem
                            title="Chạm"
                            avatar="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/7/7/8/d/778d152062edfbe0e4c4abf151858bf0.jpg"
                            thumb="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/2/3/5/e235117d191db9f7bbc82a3d31f17e60.jpg"
                        />
                        <RadioOustandingItem
                            title="XONE Radio"
                            avatar="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/0/8/2/5/0825d8cd559dee502625a25d540c636a.jpg"
                            thumb="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/1/4/8/4/1484770fd9ff1b95591d96ac65598d1c.jpg"
                        />
                        <RadioOustandingItem
                            title="Acoustic"
                            avatar="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/0/7/7/a/077a4a9905debaa87c3c63a3386dc39e.jpg"
                            thumb="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/0/7/7/a/077a4a9905debaa87c3c63a3386dc39e.jpg"
                        />
                        <RadioOustandingItem
                            title="Bolero"
                            avatar="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/3/0/5/1305cd954d22d89fef4354301613fd68.jpg"
                            thumb="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/4/8/c/e/48cefd41cfc03533d52303190f47e6ef.jpg"
                        />
                        <RadioOustandingItem
                            title="US-Uk"
                            avatar="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/b/0/d/a/b0da7c8ecd6521337682f3a86fa0170f.jpg"
                            thumb="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/d/4/f/f/d4ffcd5734d4dae6266fec08719324f0.jpg"
                        />
                        <RadioOustandingItem
                            title="V-POP"
                            avatar="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/4/6/b/146b49d11cc9b3bc591823bfedb8bce2.jpg "
                            thumb="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/f/d/7/9/fd79808d2180de9a421afa6aff38953e.jpg"
                        />
                    </Fragment>
                )}
            </div>
        </div>
    );
}

export default RadioOustanding;
