import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Button from '~/components/Button';
import BlogCard from '~/components/BlogCard';
import Pagination from '~/components/Pagination/Pagination';
import styles from './Blogs.module.scss';
import { getBlogsBySlug, getHomeBlogs, getNewBlogs } from '~/services/blogService';

const cx = classNames.bind(styles);

function Blog() {
    const [newBlogs, setNewBlogs] = useState(null);
    const [ListBlog, setListBlog] = useState(null);
    const [blogsBySlug, setBlogsBySlug] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const { slug } = useParams();
    const navigate = useNavigate();
    const headingRef = useRef(null);
    const perPage = 3;
    const pageCount = Math.ceil(blogsBySlug?.length / perPage);

    useEffect(() => {
        const fetchApi = async () => {
            const newBlogs = await getNewBlogs();
            const homeBlogs = await getHomeBlogs();
            setListBlog(homeBlogs);
            setNewBlogs(newBlogs);
        };
        fetchApi();
    }, []);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getBlogsBySlug(slug);
            setBlogsBySlug(res);
        };
        fetchApi();
    }, [slug]);

    useEffect(() => {
        setCurrentPage(0);
    }, [blogsBySlug]);

    const handleTab = (category) => {
        navigate(`/blog/${category}`);
    };

    const handlePageClick = ({ selected: selectedPage }) => {
        window.scrollTo({
            top: headingRef.current.offsetTop,
        });
        setCurrentPage(selectedPage);
    };

    return (
        <div>
            <div className={cx('header')}>
                <h1 className={cx('header-heading')} ref={headingRef}>
                    Chuyện Nhà
                </h1>
                <p className={cx('header-content')}>
                    The Coffee House sẽ là nơi mọi người xích lại gần nhau, đề cao giá trị kết nối con người và sẻ chia
                    thân tình bên những tách cà phê, ly trà đượm hương, truyền cảm hứng về lối sống hiện đại.
                </p>
                <div className={cx('header-tabs')}>
                    <Button className={cx('tab-btn', { active: !slug })} onClick={() => handleTab('')}>
                        Tất cả
                    </Button>
                    <Button
                        className={cx('tab-btn', { active: slug === 'Coffeeholic' })}
                        onClick={() => handleTab('Coffeeholic')}
                    >
                        Coffeeholic
                    </Button>
                    <Button
                        className={cx('tab-btn', { active: slug === 'Teaholic' })}
                        onClick={() => handleTab('Teaholic')}
                    >
                        Teaholic
                    </Button>
                    <Button className={cx('tab-btn', { active: slug === 'Blog' })} onClick={() => handleTab('Blog')}>
                        Blog
                    </Button>
                </div>
            </div>
            {slug ? (
                blogsBySlug && (
                    <>
                        <div className={cx('list-blog')}>
                            {blogsBySlug
                                .slice(currentPage * perPage, (currentPage + 1) * perPage)
                                .map((blog, index) => (
                                    <BlogCard key={index} blog={blog} vertical />
                                ))}
                        </div>
                        <div className={cx('pagination')}>
                            <Pagination key={blogsBySlug} pageCount={pageCount} onPageChange={handlePageClick} />
                        </div>
                    </>
                )
            ) : (
                <div className={cx('all-blog')}>
                    <div className={cx('grid wide pd')}>
                        <div className={cx('news-articles')}>
                            <div className={cx('row')}>
                                <div className={cx('col l-4 m-4 c-12')}>
                                    {newBlogs && <BlogCard blog={newBlogs[0]} height={100} rowContent={3} />}
                                </div>
                                <div className={cx('col l-8 m-8 c-12')}>
                                    {newBlogs && <BlogCard blog={newBlogs[1]} />}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('blog-1')}>
                        <div className={cx('grid pd')}>
                            <div className={cx('row')}>
                                <div className={cx('col l-5 m-5 c-12')}>
                                    <div className={cx('featured_img')}>
                                        <img
                                            className={cx('img')}
                                            src="https://file.hstatic.net/1000075078/file/photo_2021-11-25_09-31-52_52c6f13fcc06433db2362281059d1c09.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className={cx('col l-7 m-7 c-12')}>
                                    <h2 className={cx('title')}>{ListBlog && ListBlog[0].category}</h2>
                                    {ListBlog &&
                                        ListBlog[0].blogs.map((blog, index) => (
                                            <BlogCard key={index} blog={blog} rowContent={2} vertical />
                                        ))}
                                    <div className={cx('button')}>
                                        <Button onClick={() => handleTab('Coffeeholic')} className={cx('blog-btn')}>
                                            Tìm hiểu thêm
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('blog-2')}>
                        <div className={cx('grid pd')}>
                            <div className={cx('row')}>
                                <div className={cx('col l-7 m-7 c-12')}>
                                    <h2 className={cx('title')}>{ListBlog && ListBlog[1].category}</h2>
                                    {ListBlog &&
                                        ListBlog[1].blogs.map((blog, index) => (
                                            <BlogCard key={index} blog={blog} rowContent={2} vertical />
                                        ))}
                                    <div className={cx('button')}>
                                        <Button onClick={() => handleTab('Teaholic')} className={cx('blog-btn')}>
                                            Tìm hiểu thêm
                                        </Button>
                                    </div>
                                </div>
                                <div className={cx('col l-5 m-5 c-12', 'featured')}>
                                    <div className={cx('featured_img')}>
                                        <img
                                            className={cx('img')}
                                            src="https://file.hstatic.net/1000075078/file/teaholic_3f320cac87814da0912f45ccfebd4e0e.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('blog-1')}>
                        <div className={cx('grid pd')}>
                            <div className={cx('row')}>
                                <div className={cx('col l-5 m-5 c-12')}>
                                    <div className={cx('featured_img')}>
                                        <img
                                            className={cx('img')}
                                            src="https://file.hstatic.net/1000075078/file/blog_94b05e56224646bc86c6e72c73ac4258.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className={cx('col l-7 m-7 c-12')}>
                                    <h2 className={cx('title')}>{ListBlog && ListBlog[2].category}</h2>
                                    {ListBlog &&
                                        ListBlog[2].blogs.map((blog, index) => (
                                            <BlogCard key={index} blog={blog} rowContent={2} vertical />
                                        ))}
                                    <div className={cx('button')}>
                                        <Button onClick={() => handleTab('Blog')} className={cx('blog-btn')}>
                                            Tìm hiểu thêm
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Blog;
