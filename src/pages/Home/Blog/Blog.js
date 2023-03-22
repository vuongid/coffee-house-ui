import classNames from 'classnames/bind';

import styles from './Blog.module.scss';

const cx = classNames.bind(styles);

const blogs = [
    {
        title: 'Coffeeholic',
        children: [
            {
                title: 'SIGNATURE - BIỂU TƯỢNG VĂN HOÁ CÀ PHÊ CỦA THE COFFEE HOUSE ĐÃ QUAY TRỞ LẠI',
                description:
                    'Mới đây, các "tín đồ" cà phê đang bàn tán xôn xao về SIGNATURE - Biểu tượng văn hóa cà phê của The Coffee House đã quay trở lại.Một lời...',
                img: 'https://file.hstatic.net/1000075078/article/3__1__2b67342f4db64bb082944cf078afd910_grande.jpg',
                date: '12/02/2023',
            },
            {
                title: 'UỐNG GÌ KHI TỚI SIGNATURE BY THE COFFEE HOUSE?',
                description:
                    'Vừa qua, The Coffee House chính thức khai trương cửa hàng SIGNATURE by The Coffee House, chuyên phục vụ cà phê đặc sản, các món ăn đa bản sắc ấy...',
                img: 'https://file.hstatic.net/1000075078/article/_dsc2358_5075c84b1b114f72b968dad9e9e9ceaa_grande.jpg',
                date: '09/02/2023',
            },
            {
                title: 'CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON',
                description: 'CÀ PHÊ SỮA ESPRESSO THE COFFEE HOUSE - BẬT LON BẬT VỊ NGON',
                img: 'https://file.hstatic.net/1000075078/article/1__3__ec2969cff66c462d8d29959f1456bc08_grande.jpg',
                date: '09/02/2023',
            },
        ],
    },
    {
        title: 'Teaholic',
        children: [
            {
                title: 'BỘ SƯU TẬP CẦU TOÀN KÈO THƠM: "VÍA" MAY MẮN KHÔNG THỂ BỎ LỠ TẾT NÀY',
                description:
                    'Tết nay vẫn giống Tết xưa, không hề mai một nét văn hoá truyền thống mà còn thêm vào những hoạt động “xin vía” hiện đại, trẻ trung. Ví như...',
                img: 'https://file.hstatic.net/1000075078/article/cautoankeothom_thecoffeehouse_03_29cd435c9a574e1a867ac36f2c863bb6_grande.jpg',
                date: '12/01/2023',
            },
            {
                title: '“KHUẤY ĐỂ THẤY TRĂNG" - KHUẤY LÊN NIỀM HẠNH PHÚC: TRẢI NGHIỆM KHÔNG THỂ BỎ LỠ MÙA TRUNG THU NÀY',
                description:
                    'Năm 2022 là năm đề cao sức khỏe tinh thần nên giới trẻ muốn tận hưởng một Trung thu với nhiều trải nghiệm mới mẻ, rôm rả cùng bạn bè...',
                img: 'https://file.hstatic.net/1000075078/article/dscf0216_2890bcca44ae49aaaf843d5fa3db2fc6_grande.jpg',
                date: '09/02/2023',
            },
            {
                title: '“KHUẤY ĐỂ THẤY TRĂNG” - HOT TREND MỞ MÀN MÙA TRUNG THU HẤP DẪN ĐÔNG ĐẢO GIỚI TRẺ',
                description:
                    '“Khuấy để thấy trăng” - trải nghiệm “ có 1 không 2” được The Coffee House tung ra cho mùa trung thu năm nay, hứa hẹn làm giới trẻ háo...',
                img: 'https://file.hstatic.net/1000075078/article/hinh_cover_hero_c7bbff15ef674270ae8390da9c2be2ab_grande.jpg',
                date: '12/08/2022',
            },
        ],
    },
    {
        title: 'Blog',
        children: [
            {
                title: 'SIGNATURE BY THE COFFEE HOUSE  - "DẤU ẤN" MỚI CỦA NHÀ CÀ PHÊ',
                description:
                    'Ngày 11.01.2023, Chuỗi The Coffee House thông báo cửa hàng SIGNATURE by The Coffee House chính thức khai trương tại trung tâm thương mại Crescent Mall, Nguyễn Văn Linh, Quận...',
                img: 'https://file.hstatic.net/1000075078/article/signaturebythecoffeehouse_03_16b2ab7101e14d62835a4b231e73b65d_grande.jpg',
                date: '19/01/2023',
            },
            {
                title: 'CHIẾC LY ĐỔI MÀU "NGÀN NGƯỜI THEO ĐUỔI" ĐÃ QUAY TRỞ LẠI, LẸ CHÂN BẮT TREND NGAY KẺO TIẾC',
                description:
                    'Bộ sản phẩm Trà sữa Merry CloudTea trong chiếc ly đổi màu từ The Coffee House hiện đang“làm mưa làm gió" từ mạng xã hội tới đời thực, khiến giới...',
                img: 'https://file.hstatic.net/1000075078/article/dscf6292_d784e8350a0942c1965127ecf57587ee_grande.jpg',
                date: '09/02/2023',
            },
            {
                title: 'CŨNG LÀ ĂN BÁNH, THƯỞNG TRÀ, NGẮM TRĂNG - GEN Z LÀM GÌ CHO BỚT NHẠT?',
                description:
                    'Trung thu là dịp mà bất kỳ ai cũng có thể “bé lại” để niềm háo hức đón Tết Đoàn viên, ăn bánh, thưởng trà… vẫn đầy ắp trong lòng....',
                img: 'https://file.hstatic.net/1000075078/article/z3663478710700_0f36930c9ad300ade688f7ed1ddbd4f8_ceb536831696441fa7e8d9a2ad990c44_grande.jpg',
                date: '22/08/2022',
            },
        ],
    },
];

function Blog() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>
                <img
                    className={cx('title-img')}
                    src="https://file.hstatic.net/1000075078/file/coffee-2_2_92db24958ff14ac4b4249b3256f7a415.png"
                    alt=""
                />
                Chuyện Nhà
            </h2>
            {blogs.map((blog, index) => (
                <div key={index}>
                    <h3 className={cx('blog-title')}>{blog.title}</h3>
                    <div className={cx('row', 'blog-list')}>
                        {blog.children.map((item, index) => (
                            <div key={index} className={cx('col', 'l-4', 'm-6', 'c-12', 'blog-item')}>
                                <div
                                    className={cx('img')}
                                    style={{
                                        backgroundImage: `url(${item.img})`,
                                    }}
                                />
                                <div className={cx('info')}>
                                    <div className={cx('info-at')}>{item.date}</div>
                                    <h3 className={cx('info-title')}>{item.title}</h3>
                                    <p className={cx('info-description')}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Blog;