import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Button from '~/components/Button/Button';
import styles from './Couldfee.module.scss';
import { arrowRight } from '~/components/Icons';

const cx = classNames.bind(styles);

function Cloudfee() {
    return (
        <>
            <div className={cx('banner')}>
                <img src="https://hrv.hstatic.net/s_1000266602/_KV-marvel-2.jpg" alt="Cloudfee - thế hệ mới" />
            </div>
            <div className={cx('Couldfee-bg')}>
                <div className={cx('top-desc')}>
                    Được kết hợp từ
                    <b> Could </b>
                    (Đám mây) và cof
                    <b>Fee </b>
                    (Cà Phê),
                    <b> CouldFee </b>
                    gợi mở
                    <br />
                    về một thế hệ cà phê mới, êm mượt như mây.
                </div>
                <div className={cx('product')}>
                    <div className={cx('grid wide pd')}>
                        <div className={cx('row', 'couldfee')}>
                            <div className={cx('col l-6 m-6 c-12', 'info-could')}>
                                <span className={cx('subtitle')}>CLOuDFEE</span>
                                <div className={cx('main-title')}>Creme Brulee</div>
                                <div className={cx('cloud-desc')}>
                                    <b>Thức uống "chiều chuộng bản thân" bậc nhất </b>
                                    cho những ai thích vị ngọt ngào hay muốn thưởng thức sự kết hợp độc đáo giữa món
                                    tráng miệng và thức uống.
                                </div>
                                <div className={cx('could-link')}>
                                    <Link to="/menu/cloudfee">
                                        Êm mượt như mây, Chill là ghiền ngay!
                                        <span className={cx('arrow-icon')}>{arrowRight}</span>
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('col l-6 m-6 c-12', 'img-cloud')}>
                                <img src="https://hrv.hstatic.net/s_1000266602/_creme-brulee.png" alt="" />
                            </div>
                        </div>
                        <div className={cx('row', 'couldfee', 'right')}>
                            <div className={cx('col l-6 m-6 c-12', 'info-could')}>
                                <span className={cx('subtitle')}>CLOuDFEE</span>
                                <div className={cx('main-title')}>Creamy</div>
                                <div className={cx('cloud-desc')}>
                                    <b>Thức uống "đánh thức" năng lượng ngày mới </b>
                                    hợp cho những ai mới bước vào thế giới cà phê hoặc ghiền cà phê nhưng muốn khám phá
                                    thêm nhiều hương vị mới.
                                </div>
                                <div className={cx('could-link')}>
                                    <Link to="/menu/cloudfee">
                                        Êm mượt như mây, Chill là ghiền ngay!
                                        <span className={cx('arrow-icon')}>{arrowRight}</span>
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('col l-6 m-6 c-12', 'img-cloud')}>
                                <img src="https://hrv.hstatic.net/s_1000266602/_creamy.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('video')}>
                    <div className={cx('grid wide pd')}>
                        <div className={cx('video-title')}>CÀ PHÊ CÓ DÀNH CHO TẤT CẢ MỌI NGƯỜI?</div>
                        <div className={cx('video-box')}>
                            <div className={cx('box-frame')}>
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/t5I96ycncPA"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen=""
                                ></iframe>
                            </div>
                        </div>
                        <div className={cx('cloud-desc')}>
                            Bạn có biết, mỗi ngày có hơn 2 tỷ cốc cà phê được uống trên toàn thế giới? Có người pha cùng
                            sữa, có người rót thêm kem béo, hay kết hợp cùng… rượu whiskey, nhưng không phải ai cũng có
                            thể thưởng thức cà phê một cách ngon lành. Bằng niềm khao khát mang ẩm thực thế giới vào
                            từng ly cà phê bản địa, Edward Teonadi - Giám đốc phát triển sản phẩm tại The Coffee House
                            đã tạo nên thế hệ cà phê mới mang tên CloudFee. Và giờ đây, bất kỳ ai ghé Nhà cũng có thể
                            tìm thấy hương vị cà phê cho riêng mình.
                        </div>
                        <div className={cx('could-link')}>
                            <Link to="/menu/cloudfee">
                                Đọc trọn câu chuyện
                                <span className={cx('arrow-icon')}>{arrowRight}</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cx('story')}>
                    <div className={cx('grid  pd', 'story-wide')}>
                        <div className={cx('row', 'couldfee', 'right')}>
                            <div className={cx('col l-6 m-6 c-12', 'info-could')}>
                                <div className={cx('main-title')}>CÀ PHÊ NGON CHỈ CÓ VỊ ĐẮNG?</div>
                                <div className={cx('cloud-desc')}>
                                    Từ ý tưởng về CloudFee của Edward, anh Phạm Phúc Thịnh - barista của The Coffee
                                    House nhận ra: Cà phê không nhất thiết phải đắng, phải chua thì mới ngon. Đôi khi
                                    một chút biến tấu, một chút ngọt ngào để yêu chiều bản thân mới thật sự quan trọng.
                                    Và đó là cách CloudFee Creme Brulee ra đời.
                                </div>
                                <Button className={cx('story-btn')} href="https://youtu.be/o9G8v4j-P3w" target="_blank">
                                    Xem video nghe Thịnh kể chuyện
                                </Button>
                            </div>
                            <div className={cx('col l-6 m-6 c-12', 'img-cloud')}>
                                <img
                                    src="https://file.hstatic.net/1000075078/file/thinh_93cf92a5395043a2b634af4de08c0163.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className={cx('row', 'couldfee')}>
                            <div className={cx('col l-6 m-6 c-12', 'info-could')}>
                                <div className={cx('main-title')}>CÀ PHÊ ĐÂU CHỈ LÀ THỨC UỐNG</div>
                                <div className={cx('cloud-desc')}>
                                    Trong ly cà phê dành cho người mình thương có gì? Khi nghe Edward chia sẻ về thế hệ
                                    cà phê mới CloudFee, anh Nguyễn Hoàng Hiếu - barista của The Coffee House chợt nhớ
                                    tới vợ mình. Cô ngại vị đắng của cà phê, nhưng cần một thức uống tỉnh táo mỗi sáng.
                                    Và CloudFee Creamy là món quà anh tặng cho người phụ nữ anh yêu.
                                </div>
                                <Button className={cx('story-btn')} href="https://youtu.be/LdmG0hSq_Ig" target="_blank">
                                    Hiếu bật mí trong video này
                                </Button>
                            </div>
                            <div className={cx('col l-6 m-6 c-12', 'img-cloud')}>
                                <img
                                    src="https://file.hstatic.net/1000075078/file/hieu_ed120096122f4c279ff41696f8b97eb3.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('customer')}>
                    <div className={cx('grid  pd', 'customer-wide')}>
                        <div className={cx('customer-title')}>CHUYỆN CÀ PHÊ</div>
                        <div className={cx('customer-item')}>
                            <div className={cx('customer-img')}>
                                <img
                                    src="https://file.hstatic.net/1000075078/file/photo_2022-06-27_13-21-31_1f8c8a00f22e467c8d705e8a95331ae8.jpg"
                                    alt=""
                                />
                            </div>
                            <div className={cx('customer-info')}>
                                <div className={cx('customer-desc')}>
                                    Hơn cả một loại thức uống để ngày mới tươi ngay hay yêu chiều khẩu vị vào buổi
                                    chiều, mỗi ly CloudFee còn gắn liền với một câu chuyện thú vị.
                                </div>
                                <Button className={cx('customer-btn')}>CÙNG ĐÓN CHỜ</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cloudfee;
