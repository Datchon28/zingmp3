import classNames from 'classnames/bind';
import style from './ChooseToday.module.scss';

import OverLaySong from '../../../components/OverLaySong/OverLaySong';
import { Responsive } from '../../../Layout/DefaultLayout/DefaultLayout';
import { useEffect, useState, useContext } from 'react';

const cx = classNames.bind(style);

function ChooseToday() {
    const url = `https://apizingmp3.herokuapp.com/api/home?page={playlist}`;

    const { isTablet } = useContext(Responsive);

    const [playList, setPlaylist] = useState([]);
    const [titles, setTitles] = useState();

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setPlaylist(data.data.items[4].items);
                setTitles(data.data.items[4].title);
            });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>{titles}</h3>

            <div className={cx('list')}>
                {playList
                    .map((item, index) => (
                        <OverLaySong
                            key={index}
                            img={item.thumbnail}
                            className={cx('five-item')}
                            children={item.title}
                            desc={item.sortDescription}
                        />
                    ))
                    .splice(0, isTablet ? 4 : 5)}
            </div>
        </div>
    );
}

export default ChooseToday;
