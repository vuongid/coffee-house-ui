import 'react-quill/dist/quill.core.css';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import config from '~/config';
import styles from './Blog.module.scss';
import { getBlog } from '~/services/blogService';

const cx = classNames.bind(styles);

function Blog() {
    const [blog, setBlog] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        const fetchApi = async () => {
            const res = await getBlog(id);
            setBlog(res);
        };
        fetchApi();
    }, [id]);

    if (!blog) {
        return <div className={cx('loader')} />;
    }

    return (
        <>
            <div
                className={cx('image')}
                style={{ backgroundImage: `url(${config.IMAGES_URL.blogImage + blog.image})` }}
            />
            <div className={cx('grid wide')}>
                <div className={cx('container')}>
                    <div className={cx('category')}>
                        <Link to="/blog">Blog</Link>
                        {' | '}
                        <Link to={`/blog/${blog.category}`}>{blog.category}</Link>
                    </div>
                    <h1 className={cx('title')}>{blog.title}</h1>
                    <div
                        className={cx('view ql-editor', 'content')}
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                </div>
            </div>
        </>
    );
}

export default Blog;
