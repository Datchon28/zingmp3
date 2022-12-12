import classNames from 'classnames/bind';
import style from '../NewRelease.module.scss';

import SongHover from '../../../../components/SongHover';

const cx = classNames.bind(style);

function Songs({ data }) {
    return (
        <SongHover
            id={data.encodeId}
            className={cx('media-new-release')}
            thumb={data.thumbnail}
            author={data.artistsNames}
            songname={data.title}
        />
    );
}

export default Songs;
