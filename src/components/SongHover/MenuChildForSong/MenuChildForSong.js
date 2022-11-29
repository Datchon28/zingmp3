import classNames from 'classnames/bind';
import style from './MenuChildForSong.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBan,
  faChevronRight,
  faCirclePlus,
  faCode,
  faComment,
  faCopy,
  faDownload,
  faForward,
  faHeadphones,
  faHeart,
  faMicrophone,
  faPhone,
  faShare,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function MenuChildForSong({ thumb, songname }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('media')}>
        <div className={cx('thumb-song')}>
          <img alt="anh" src={thumb} />
        </div>
        <div className={cx('info-song')}>
          <span className={cx('title')}>{songname}</span>
          <div className={cx('loves-and-listens')}>
            <span className={cx('loves')}>
              <FontAwesomeIcon icon={faHeart} /> 471
            </span>
            <span className={cx('listens')}>
              <FontAwesomeIcon icon={faHeadphones} /> 1.8M
            </span>
          </div>
        </div>
      </div>

      <div className={cx('menu-choose-focus')}>
        <div className={cx('menu-choose-focus-list')}>
          <div className={cx('choose-focus-item')}>
            <span className={'icon-download'}>
              <FontAwesomeIcon icon={faDownload} />
            </span>
            <button className={cx('choose-focus-item-btn', 'download')}>Tải xuống</button>
          </div>
          <div className={cx('choose-focus-item')}>
            <span className={'icon-lyrics'}>
              <FontAwesomeIcon icon={faMicrophone} />
            </span>
            <button className={cx('choose-focus-item-btn', 'lyrics')}>Lời bài hát</button>
          </div>
          <div className={cx('choose-focus-item')}>
            <span className={'icon-block'}>
              <FontAwesomeIcon icon={faBan} />
            </span>
            <button className={cx('choose-focus-item-btn', 'block')}>Chặn</button>
          </div>
        </div>
      </div>

      <ul className={cx('list-choose')}>
        <li className={cx('item')}>
          <div className={cx('row')}>
            <span className={cx('icon')}>
              <FontAwesomeIcon icon={faCirclePlus} />
            </span>
            <span className={cx('item-name')}>Thêm vào danh sách phát</span>
          </div>
        </li>

        <li className={cx('item')}>
          <div className={cx('row')}>
            <span className={cx('icon')}>
              <FontAwesomeIcon icon={faForward} />
            </span>
            <span className={cx('item-name')}>Phát tiếp theo</span>
          </div>
        </li>

        <li className={cx('item')}>
          <div className={cx('row')}>
            <span className={cx('icon')}>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <span className={cx('item-name')}>Cài đặt nhạc chờ</span>
          </div>
        </li>

        <li className={cx('item')}>
          <div className={cx('row')}>
            <span className={cx('icon')}>
              <FontAwesomeIcon icon={faCirclePlus} />
            </span>
            <span className={cx('item-name')}>Thêm vào playlist</span>
          </div>
        </li>

        <li className={cx('item')}>
          <div className={cx('row')}>
            <span className={cx('icon')}>
              <FontAwesomeIcon icon={faComment} />
            </span>
            <span className={cx('item-name')}>Bình luận</span>
          </div>
        </li>

        <li className={cx('item')}>
          <div className={cx('row')}>
            <span className={cx('icon')}>
              <FontAwesomeIcon icon={faCopy} />
            </span>
            <span className={cx('item-name')}>Sao chép link</span>
          </div>
        </li>

        <li className={cx('item')}>
          <div className={cx('row')}>
            <span className={cx('icon')}>
              <FontAwesomeIcon icon={faShare} />
            </span>
            <span className={cx('item-name')}>Chia sẻ</span>
          </div>
          <span className={cx('arrow')}>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>

          <div className={cx('list-choose-to-share')}>
            <ul className={cx('list-link')}>
              <li className={cx('item-link')}>
                <div className={cx('row')}>
                  <img
                    alt="anh"
                    className={cx('social-media')}
                    src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
                  />
                  <span className={cx('item-name')}>Facebook</span>
                </div>
              </li>
              <li className={cx('item-link')}>
                <div className={cx('row')}>
                  <img
                    alt="anh"
                    className={cx('social-media')}
                    src="https://nongsankhaianh.com/wp-content/uploads/2021/10/icon-zalo.png"
                  />

                  <span className={cx('item-name')}>Zalo</span>
                </div>
              </li>
              <li className={cx('item-link')}>
                <div className={cx('row')}>
                  <span className={cx('icon-code')}>
                    <FontAwesomeIcon icon={faCode} />
                  </span>
                  <span className={cx('item-name')}>Mã Nhúng</span>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default MenuChildForSong;
