import classNames from 'classnames/bind';
import OverLaySong from '../../../components/OverLaySong/OverLaySong';
import styles from './RadioOustanding.module.scss';

const cx = classNames.bind(styles);

function RadioOustandingItem({ title, thumb, avatar }) {
    return (
        <div className={cx('box')}>
            <OverLaySong
                onlyPlay={true}
                check={false}
                className={cx('raido-oustanding')}
                img={thumb}
                children={title}
                desc="470 đang nghe"
            />

            <div className={cx('avatar-raido')}>
                <img alt="anh" src={avatar} />
            </div>
        </div>
    );
}

export default RadioOustandingItem;
