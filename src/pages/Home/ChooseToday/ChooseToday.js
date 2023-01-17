import classNames from 'classnames/bind';
import style from './ChooseToday.module.scss';

import OverLaySong from '../../../components/OverLaySong/OverLaySong';
import { Responsive } from '../../../Layout/DefaultLayout/DefaultLayout';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';

const cx = classNames.bind(style);

function ChooseToday() {
    const url = `https://apizingmp3.vercel.app/api/home?page={playlist}`;

    const { isTablet } = useContext(Responsive);

    const [playList, setPlaylist] = useState([]);
    const [titles, setTitles] = useState();

    useEffect(() => {
        axios.get(url).then((data) => {
            setPlaylist(data.data.data.items[4].items);
            setTitles(data.data.data.items[4].title);
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
