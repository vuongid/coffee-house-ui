import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import images from '~/assets/images';
import Button from '~/components/Button';
import Carousel from '~/components/Carousel';
import Product from '~/components/Product';
import Blog from './Blog';
import styles from './Home.module.scss';
import Store from './Store';

const cx = classNames.bind(styles);

const bannerImages = [
    {
        img: images.banner1,
    },
    {
        img: images.banner2,
    },
    {
        img: images.banner3,
    },
    {
        img: images.banner4,
    },
];

function Home() {
    const [products, setProducts] = useState();
    useEffect(() => {
        axios
            .get('http://localhost:3001/api/product?limit=6')
            .then((response) => setProducts(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            {/* Banner */}
            <section className={cx('banner')}>
                <Carousel images={bannerImages} />
            </section>
            {/* Menu */}
            <section className={cx('menu')}>
                <div className="grid wide pd">
                    <div className="row">
                        <div className={cx('col l-6 m-12 c-12', 'menu-img')}>
                            <a className={cx('menu-img-link')} href="/">
                                <img
                                    className={cx('img')}
                                    src="https://file.hstatic.net/1000075078/file/highlight_cc022d45647d43e9bfbe1248b4573788.jpg"
                                    alt=""
                                />
                            </a>
                        </div>
                        {products?.map((product) => (
                            <div key={product._id} className={cx('col l-3 m-6 c-6')}>
                                <Product product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Cloudtea */}
            <section className={cx('cloudtea')}>
                <div className={cx('grid wide pd')}>
                    <div className={cx('row')}>
                        <div className={cx('col l-6 m-6 c-12')}>
                            <img
                                className={cx('cloudtea-img')}
                                src="https://file.hstatic.net/1000075078/file/cloudtea_1_44b35a015ef14a1ba798b209937eeeb7.png"
                                alt=""
                            />
                        </div>
                        <div className={cx('col l-6 m-6 c-12')}>
                            <div className={cx('cloudted-info')}>
                                <img
                                    className={cx('cloudted-info-img')}
                                    alt=""
                                    src="https://file.hstatic.net/1000075078/file/tagline_2_2a16d1acfd32480299bfd999e9e67afb.png"
                                />
                                <div className={cx('cloudtea-info-desc')}>
                                    Bộ sưu tập “Cầu Toàn Kèo Thơm” không chỉ là thức uống chăm da giữ dáng, mà còn là
                                    “vía may mắn” để năm mới thêm trọn vẹn. Với nền trà tốt cho sức khoẻ cùng hương vị
                                    mãng cầu và thơm giúp giải ngấy, topping đầy đặn, “Cầu Toàn Kèo Thơm” mang ý nghĩa
                                    sung túc cho năm 2023. Chiếc ly mèo đáng yêu còn như một lời chúc may mắn Nhà gửi
                                    đến bạn.
                                </div>
                                <Button primary full>
                                    Thử Ngay
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Store */}
            <section className={cx('store')}>
                <Store />
            </section>
            {/* Blog */}
            <section className={cx('blog')}>
                <div className={cx('grid wide pd')}>
                    <Blog />
                </div>
            </section>
        </>
    );
}

export default Home;
