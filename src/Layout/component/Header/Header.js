import classNames from 'classnames/bind';
import style from './Header.module.scss';

import {
    faArrowLeft,
    faArrowRight,
    faList,
    faSearch,
    faShirt,
    faUpload,
    faClose,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Search from '../Search';
import Setting from './Setting';
import Hover from '../../../components/Hover/Hover';
import { Link, useNavigate } from 'react-router-dom';
import TopicModal from './TopicModal/TopicModal';
import { createContext, Fragment, useContext, useState } from 'react';
import SideBarMobile from '../Sidebar/SideBarMobile/SideBarMobile';
import Modal from '../../../components/Modal/Modal';
import { Responsive } from '../../DefaultLayout/DefaultLayout';

const cx = classNames.bind(style);
export const MenuSideBarMobile = createContext();

function Header() {
    const { isMobile } = useContext(Responsive);
    let navigate = useNavigate();
    const [isOpenTopic, setIsOpenTopic] = useState([]);
    const [isOpenSideBarMobile, setIsOpenSideBarMobile] = useState(false);
    const [isOpenSearchMobile, setIsOpenSearchMobile] = useState(false);

    const handleOpenTopic = () => {
        setIsOpenTopic(isOpenTopic.concat(<TopicModal key={isOpenTopic.length} />));
    };

    const OpenSearchOnMobile = () => {
        setIsOpenSearchMobile(!isOpenSearchMobile);
    };

    const handleBack = () => {
        navigate(-1);
    };

    const handleForward = () => {
        navigate(1);
    };

    const handleOpenSideBarMobile = () => {
        setIsOpenSideBarMobile(!isOpenSideBarMobile);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('tools')}>
                <div className={cx('one')}>
                    <div className={cx('arrow-move')}>
                        <span className={cx('back-btn')} onClick={handleBack}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </span>
                        <span className={cx('forward-btn')}>
                            <FontAwesomeIcon icon={faArrowRight} onClick={handleForward} />
                        </span>
                    </div>

                    <MenuSideBarMobile.Provider value={{ isOpenSideBarMobile }}>
                        <div className={cx('side-bar-on-mobile')}>
                            <span className={cx('menubar-mobile-icon')} onClick={handleOpenSideBarMobile}>
                                <FontAwesomeIcon icon={faList} />
                            </span>

                            {isOpenSideBarMobile && (
                                <Modal>
                                    <div className={cx('sidebar-mobile-modal')}>
                                        <SideBarMobile />
                                        <span className={cx('close-btn')} onClick={handleOpenSideBarMobile}>
                                            <FontAwesomeIcon icon={faClose} />
                                        </span>
                                    </div>
                                </Modal>
                            )}
                        </div>
                    </MenuSideBarMobile.Provider>

                    {isMobile ? (
                        <Fragment>
                            <span className={cx('search-icon')} onClick={OpenSearchOnMobile}>
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                            {isOpenSearchMobile && (
                                <Modal classNames={cx('modal-search')}>
                                    <Search />
                                </Modal>
                            )}
                        </Fragment>
                    ) : (
                        <Search />
                    )}
                </div>
                {/* ON Mobile */}
                <div className={cx('logo-on-mobile')}>
                    <Link to="/">
                        <div className={cx('logo-on-mobile-link')} />
                    </Link>
                </div>

                <div className={cx('user')}>
                    <ul className={cx('list-option')}>
                        <li className={cx('option-item')} onClick={handleOpenTopic}>
                            <Hover tilte="Chủ đề">
                                <button className={cx('upload')}>
                                    <FontAwesomeIcon icon={faShirt} />
                                </button>
                            </Hover>
                        </li>

                        <li className={cx('option-item')}>
                            <Hover tilte="Tải lên">
                                <button className={cx('upload')}>
                                    <FontAwesomeIcon icon={faUpload} />
                                </button>
                            </Hover>
                        </li>

                        <li className={cx('option-item')}>
                            <Hover tilte="Cài đặt">
                                <button className={cx('setting-btn')}>
                                    <Setting />
                                </button>
                            </Hover>
                        </li>

                        <li className={cx('option-item', 'user')}>
                            <button className={cx('user-account')}>
                                <img
                                    src="https://tophinhanh.com/wp-content/uploads/2021/12/7_anh-sieu-nhan-gao-chibi.jpg"
                                    alt="Anh"
                                />
                            </button>
                        </li>
                    </ul>
                </div>

                {isOpenTopic}
            </div>
        </header>
    );
}

export default Header;
