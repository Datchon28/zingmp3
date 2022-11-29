import classNames from 'classnames/bind';
import style from '../NewRelease.module.scss';
import Hover from '../../../../components/Hover/Hover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef, Fragment } from 'react';
import MenuChildForSong from '../../../../components/SongHover/MenuChildForSong/MenuChildForSong';
import SongHover from '../../../../components/SongHover';

const cx = classNames.bind(style);

function Songs({ data, id }) {
    return (
        <SongHover
            id={data.encodeId}
            className={cx('media-new-release')}
            thumb={data.thumbnail}
            author={data.artistsNames}
            songname={data.title}
        />

        // <div className={cx('item')} id={data.encodeId}>
        //     <div className={cx('thumb')}>
        //         <img alt="anh" src={data.thumbnail} />
        //         <div className={cx('icon-play')}>
        //             <span>
        //                 <FontAwesomeIcon icon={faPlay} />
        //             </span>
        //         </div>
        //     </div>
        //     <div className={cx('info')}>
        //         <h6>{data.title}</h6>
        //         <span>{data.artistsNames}</span>
        //         <p>{data.releaseDate}</p>
        //     </div>
        //     <div className={cx('other')}>
        //         <Hover tilte="Khác">
        //             <span>
        //                 <FontAwesomeIcon icon={faEllipsis} />
        //             </span>
        //         </Hover>
        //     </div>
        // </div>
    );
}

export default Songs;
