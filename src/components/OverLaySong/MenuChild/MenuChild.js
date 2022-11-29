import classNames from 'classnames/bind';
import style from './MenuChild.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronRight,
    faCirclePlus,
    faCode,
    faComment,
    faCopy,
    faDownload,
    faShare,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function MenuChild() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('list')}>
                <li className={cx('item')}>
                    <div className={cx('row')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faCirclePlus} />
                        </span>
                        <span className={cx('title')}>Thêm vào danh sách phát</span>
                    </div>
                </li>

                <li className={cx('item')}>
                    <div className={cx('row')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faComment} />
                        </span>
                        <span className={cx('title')}>Bình luận</span>
                    </div>
                </li>

                <li className={cx('item')}>
                    <div className={cx('row')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faDownload} />
                        </span>
                        <span className={cx('title')}>Tải xuống</span>
                    </div>
                </li>

                <li className={cx('item')}>
                    <div className={cx('row')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faCopy} />
                        </span>
                        <span className={cx('title')}>Sao chép link</span>
                    </div>
                </li>

                <li className={cx('item')}>
                    <div className={cx('row')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faShare} />
                        </span>
                        <span className={cx('title')}>Chia sẻ</span>
                    </div>
                    <span className={cx('arrow')}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </span>

                    <div className={cx('list-choose-to-share')}>
                        <ul className={cx('list-link')}>
                            <li className={cx('item-link')}>
                                <div className={cx('row')}>
                                    <img
                                        className={cx('social-media')}
                                        src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
                                    />
                                    <span className={cx('title')}>Facebook</span>
                                </div>
                            </li>
                            <li className={cx('item-link')}>
                                <div className={cx('row')}>
                                    <img
                                        className={cx('social-media')}
                                        src="https://nongsankhaianh.com/wp-content/uploads/2021/10/icon-zalo.png"
                                    />

                                    <span className={cx('title')}>Zalo</span>
                                </div>
                            </li>
                            <li className={cx('item-link')}>
                                <div className={cx('row')}>
                                    <span className={cx('icon-code')}>
                                        <FontAwesomeIcon icon={faCode} />
                                    </span>
                                    <span className={cx('title')}>Mã Nhúng</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default MenuChild;
