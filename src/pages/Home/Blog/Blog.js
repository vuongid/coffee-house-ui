import classNames from 'classnames/bind';

import styles from './Blog.module.scss';
import { useEffect, useState } from 'react';
import { getHomeBlogs } from '~/services/blogService';
import BlogCard from '~/components/BlogCard/BlogCard';

const cx = classNames.bind(styles);

function Blog() {
    const [listBlog, setListBlog] = useState(null);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getHomeBlogs();
            setListBlog(res);
        };
        fetchApi();
    }, []);
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
            {listBlog &&
                listBlog.map((list, index) => (
                    <div key={index}>
                        <h3 className={cx('blog-title')}>{list.category}</h3>
                        <div className={cx('row')}>
                            {list.blogs.map((blog, index) => (
                                <div key={index} className={cx('col', 'l-4', 'm-6', 'c-12')}>
                                    <BlogCard blog={blog} height={48} rowContent={3} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default Blog;
