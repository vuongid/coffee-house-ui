import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import config from '~/config';
import styles from './BlogCard.module.scss';
import formatDate from '~/utils/formatDate';

const cx = classNames.bind(styles);

function BlogCard({ blog, height = 56, rowContent = 2, vertical = false }) {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = blog.content;
    const content = tempElement.textContent || '';

    return (
        <div className={cx('blog-card', { flex: vertical })}>
            <Link className={cx({ 'image-link': vertical })} to={`/blog/${blog.category}/${blog._id}`}>
                <div
                    className={cx('image')}
                    style={{
                        backgroundImage: `url(${config.IMAGES_URL.blogImage + blog.image})`,
                        paddingTop: `${height}%`,
                    }}
                ></div>
            </Link>
            <div className={cx('info', { padding: vertical })}>
                <Link to={`/blog/${blog.category}/${blog._id}`} className={cx('title')}>
                    {blog.title}
                </Link>
                <p className={cx('date')}>{formatDate(blog.createdAt)}</p>
                <p className={cx('content')} style={{ WebkitLineClamp: rowContent }}>
                    {content}
                </p>
            </div>
        </div>
    );
}

export default BlogCard;
