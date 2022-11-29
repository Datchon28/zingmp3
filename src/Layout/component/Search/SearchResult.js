import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function SearchResult({ data }) {
    return (
        <Fragment>
            <li className={cx('result-item')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon-search')} />

                <span className={cx('name-song-result')}>{data.title}</span>
            </li>
        </Fragment>
    );
}

export default SearchResult;
