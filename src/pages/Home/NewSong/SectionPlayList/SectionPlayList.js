import classNames from 'classnames/bind';
import style from './SectionPlayList.module.scss';
import OverLaySong from '../../../../components/OverLaySong/OverLaySong';

const cx = classNames.bind(style);

function SectionPlayList({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('list')}>
                <OverLaySong
                    className={cx('five-item')}
                    img={data.thumbnail}
                    children={data.title}
                    desc={data.artistsNames}
                />
            </div>
        </div>
    );
}

export default SectionPlayList;
