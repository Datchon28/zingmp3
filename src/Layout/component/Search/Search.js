import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useContext, useEffect, useRef, useState } from 'react';
import { faMagnifyingGlass, faCircleXmark, faSpinner, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Wrapper from '../../../components/Popper/Wrapper';
import SearchResult from './SearchResult';
import useDebounce from '../../../hooks/songContext/useDebounce';
import axios from 'axios';
import { Responsive } from '../../DefaultLayout/DefaultLayout';

const cx = classNames.bind(styles);

function Search() {
    const { isMobile } = useContext(Responsive);
    const inputRef = useRef();
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setsearchResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const debounce = useDebounce(searchValue, 600);

    const handleChange = (e) => {
        const search = e.target.value;
        setSearchValue(search);
    };

    const handleRemove = () => {
        setSearchValue('');
        setIsLoading(false);
    };

    useEffect(() => {
        if (!debounce) {
            setIsLoading(false);
            return;
        }

        const fetchApi = async () => {
            setIsLoading(true);

            await axios
                .get(`https://apizingmp3.herokuapp.com/api/search?keyword={${debounce}}`)
                .then((data) => {
                    setsearchResult(data.data.data.songs);
                })
                .catch((error) => console.log(error));

            setIsLoading(false);
        };
        fetchApi();
    }, [debounce]);

    return (
        <div className={cx('wrapper')}>
            <HeadlessTippy
                trigger="click"
                interactive
                hideOnClick={isMobile ? false : 'toggle'}
                placement="bottom-end"
                render={(attrs) => (
                    <Wrapper className={cx('wrapper-search')} {...attrs}>
                        <h4 className={cx('title-search')}>Đề xuất cho bạn</h4>
                        <ul className={cx('list-result')}>
                            {searchResult
                                .map((item, index) => <SearchResult data={item} key={index} />)
                                .splice(0, isMobile ? 12 : 6)}
                        </ul>
                    </Wrapper>
                )}
            >
                <div className={cx('content')}>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <input
                        ref={inputRef}
                        placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
                        className={cx('input')}
                        onChange={handleChange}
                        value={searchValue}
                    />

                    {isLoading === true && (
                        <span className={cx('icon-load')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </span>
                    )}

                    {isLoading === false && searchValue && (
                        <button className={cx('clear')} onClick={handleRemove}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
