import classNames from 'classnames/bind';
import styles from './ChartsWeekItem.module.scss';

import SongItems from './SongItems';

const cx = classNames.bind(styles);

function ChartsWeekItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('list-song')}>
                {data.slice(0, 5).map((item, index) => (
                    <SongItems data={item} key={index} rank={index} />
                ))}
            </div>
        </div>
    );
}

export default ChartsWeekItem;
