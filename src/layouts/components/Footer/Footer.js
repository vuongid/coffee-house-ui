import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { PhoneIcon, AddressIcon } from '~/components/Icons';
import styles from './Footer.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faShare } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className="grid wide">
                <div className={cx('container')}>
                    <div className="row">
                        <div className="col l-3 m-6 c-12">
                            <div className={cx('info')}>
                                <h3 className={cx('info-title')}>Giới thiệu</h3>
                                <div className={cx('info-list')}>
                                    <Link className={cx('info-item')}>Về chúng tôi</Link>
                                    <Link className={cx('info-item')}>Sản phẩm</Link>
                                    <Link className={cx('info-item')}>Khuyến mãi</Link>
                                    <Link className={cx('info-item')}>Chuyện cà phê</Link>
                                    <Link className={cx('info-item')}>Cửa hàng</Link>
                                    <Link className={cx('info-item')}>Tuyển dụng</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col l-3 m-6 c-12">
                            <div className={cx('info')}>
                                <h3 className={cx('info-title')}>Điều khoản</h3>
                                <div className={cx('info-list')}>
                                    <Link className={cx('info-item')}>Điều khoản sử dụng</Link>
                                    <Link className={cx('info-item')}>Chính sách bảo vệ</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col l-3 m-6 c-12">
                            <div className={cx('info')}>
                                <div className={cx('info-hotline')}>
                                    <p>
                                        <span className={cx('hotline-icon')}>{PhoneIcon}</span>
                                        <span>Đặt hàng 1800 6936</span>
                                    </p>
                                    <p>
                                        <span className={cx('hotline-icon')}>{AddressIcon}</span>
                                        <span>Liên hệ</span>
                                    </p>
                                </div>
                                <div className={cx('info-address')}>
                                    <p>
                                        Tầng 3-4 Hub Building
                                        <br />
                                        195/10E Điện Biên Phủ, P.15 ,
                                        <br />
                                        Q.Bình Thạnh, TP.Hồ Chí Minh
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col l-3 m-6 c-12">
                            <div className={cx('info')}>
                                <div className={cx('info-page')}>
                                    <div className={cx('page-top')}>
                                        <img className={cx('page-logo')} src={images.pageLogo} alt="" />
                                        <div className={cx('page-detail')}>
                                            <a
                                                className={cx('detail-title')}
                                                href="https://www.facebook.com/The.Coffee.House.2014/"
                                            >
                                                The Coffee House
                                                <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                                            </a>
                                            <p className={cx('detail-like')}>666.713 lượt thích</p>
                                        </div>
                                    </div>
                                    <div className={cx('page-bottom')}>
                                        <Button
                                            className={cx('page-btn')}
                                            leftIcon={
                                                <FontAwesomeIcon
                                                    icon={faFacebookSquare}
                                                    className={cx('facebook-icon')}
                                                />
                                            }
                                        >
                                            Thích trang
                                        </Button>
                                        <Button
                                            className={cx('page-btn')}
                                            leftIcon={<FontAwesomeIcon icon={faShare} className={cx('share-icon')} />}
                                        >
                                            Chia sẻ
                                        </Button>
                                    </div>
                                </div>
                                <div className={cx('info-social')}>
                                    <a
                                        href="https://www.facebook.com/The.Coffee.House.2014/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={cx('social-link')}
                                    >
                                        <FontAwesomeIcon className={cx('social-icon')} icon={faFacebookSquare} />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/thecoffeehousevn/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={cx('social-link')}
                                    >
                                        <FontAwesomeIcon className={cx('social-icon')} icon={faInstagram} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col l-12 m-12 c-12">
                            <div className={cx('address')}>
                                <p>Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN</p>
                                <p>
                                    Mã số DN: 0312867172 do sở kế hoạch và đầu tư tp. HCM cấp ngày 23/07/2014. Người đại
                                    diện: NGÔ NGUYÊN KHA
                                </p>
                                <p>
                                    Địa chỉ: 86-88 Cao Thắng, phường 04, quận 3, tp Hồ Chí Minh Điện thoại: (028) 7107
                                    8079 Email: hi@thecoffeehouse.vn
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
