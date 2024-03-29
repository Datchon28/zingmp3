import classNames from 'classnames/bind';
import style from './NewRelease.module.scss';

import { useEffect, useState } from 'react';
import Songs from './Songs/Songs';
import Albums from './Albums/Album';
import axios from 'axios';

const cx = classNames.bind(style);

function NewRelease() {
    let BgcBtnSong;
    let BgcbBtnAlbum;

    const [hideSongs, setHideSongs] = useState(true);
    const [hideAlbums, setHideAlbums] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleHideSongs = () => {
        setHideSongs(true);
        setHideAlbums(false);
    };

    const handleHideAlbums = () => {
        setHideAlbums(true);
        setHideSongs(false);
    };

    if (hideSongs) {
        BgcBtnSong = 'bgc-primary';
    } else {
        BgcBtnSong = 'transperant';
    }

    if (hideAlbums) {
        BgcbBtnAlbum = 'bgc-primary';
    } else {
        BgcbBtnAlbum = 'transperant';
    }

    const url = `https://apizingmp3.vercel.app/api/home?page={new-release}`;
    const [newReleaseSongsVietNam, setNewReleaseSongsVietNam] = useState([]);
    const [newReleaseSongsOther, setNewReleaseSongsOther] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await axios.get(url).then((data) => {
                setNewReleaseSongsVietNam(data.data.data.items[2].items.vPop);
                setNewReleaseSongsOther(data.data.data.items[2].items.others);
            });
            setLoading(false);
        };
        fetchData();
    }, [url]);

    return (
        <div className={cx('main')}>
            <h3 className={cx('title')}>Mới Phát Hành</h3>
            <div className={cx('menu')}>
                <div className={cx('menu-list')}>
                    <button className={cx('song', BgcBtnSong)} onClick={handleHideSongs}>
                        VIỆT NAM
                    </button>
                    <button className={cx('album', BgcbBtnAlbum)} onClick={handleHideAlbums}>
                        QUỐC TẾ
                    </button>
                </div>
                <span className={cx('all')}>TẤT CẢ ></span>
            </div>
            <div className={cx('menu-item')}>
                <div className={cx('item-list')}>
                    {hideSongs === true &&
                        newReleaseSongsVietNam
                            .map((item, index) => <Songs loading={loading} data={item} key={index} />)
                            .slice(0, 12)}
                    {hideAlbums === true &&
                        newReleaseSongsOther.map((item, index) => <Albums data={item} key={index} />).slice(0, 12)}
                </div>
            </div>
        </div>
    );
}

export default NewRelease;
