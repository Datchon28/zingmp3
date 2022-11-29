import classNames from 'classnames/bind';
import style from '../NewRelease.module.scss';
import Hover from '../../../../components/Hover/Hover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SongHover from '../../../../components/SongHover';
import { faEllipsis, faPlay } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function Albums({ data }) {
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

export default Albums;
