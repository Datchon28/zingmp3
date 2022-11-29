import classNames from 'classnames/bind';
import style from './NewSongsFull.module.scss';

import SongHover from '../../../../components/SongHover';
import { useState, useEffect } from 'react';
import axios from 'axios';

const cx = classNames.bind(style);

function NewSongFull({ data }) {
    const url = `https://apizingmp3.herokuapp.com/api/newreleasechart`;
    const [newSongs, setNewSongs] = useState([]);

    useEffect(() => {
        axios.get(url).then((data) => {
            setNewSongs(data.data.data.items);
        });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <header className={cx('title')}>
                <h3>Nhạc Mới</h3>
            </header>

            <div className={cx('list')}>
                {newSongs.map((item, index) => (
                    <SongHover
                        id={item.encodeId}
                        key={index}
                        rank={index + 1}
                        songname={item.title}
                        thumb={item.thumbnail}
                        author={item.artistsNames}
                    />
                ))}
            </div>
        </div>
    );
}

export default NewSongFull;
