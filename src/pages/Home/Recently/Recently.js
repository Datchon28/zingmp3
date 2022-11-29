import classNames from 'classnames/bind';
import style from './Recently.module.scss';
import Button from '../../../components/Button';
import images from '../../../assets/images';
import OverLaySong from '../../../components/OverLaySong/OverLaySong';

const cx = classNames.bind(style);

function Recently() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Gần Đây</h3>

            <div className={cx('list')}>
                <div className={cx('main')}>
                    <OverLaySong img={images.zingchart} className={cx('two-item__recently')} children="#zingchart" />
                </div>
                <div className={cx('main')}>
                    <OverLaySong
                        img={images.zingchart_week}
                        className={cx('two-item__recently')}
                        children="#zingchart Tuần..."
                    />
                </div>
            </div>
        </div>
    );
}

export default Recently;
