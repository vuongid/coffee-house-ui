import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import images from '~/assets/images';
import Button from '~/components/Button';
import Carousel from '~/components/Carousel';
import Product from '~/components/Product';
import { getProducts } from '~/services/productService';
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
        const fetchAPI = async () => {
            const res = await getProducts(6);
            setProducts(res);
        };
        fetchAPI();
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
                                <img className={cx('img')} src={images.banner5} alt="" />
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
                            <img className={cx('cloudtea-img')} src={images.cloudtea} alt="" />
                        </div>
                        <div className={cx('col l-6 m-6 c-12')}>
                            <div className={cx('cloudted-info')}>
                                <img className={cx('cloudted-info-img')} alt="" src={images.tagline} />
                                <div className={cx('cloudtea-info-desc')}>
                                    Bộ sưu tập “Cầu Toàn Kèo Thơm” không chỉ là thức uống chăm da giữ dáng, mà còn là
                                    “vía may mắn” để năm mới thêm trọn vẹn. Với nền trà tốt cho sức khoẻ cùng hương vị
                                    mãng cầu và thơm giúp giải ngấy, topping đầy đặn, “Cầu Toàn Kèo Thơm” mang ý nghĩa
                                    sung túc cho năm 2023. Chiếc ly mèo đáng yêu còn như một lời chúc may mắn Nhà gửi
                                    đến bạn.
                                </div>
                                <Button primary full className={cx('cloudtea-btn')}>
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
