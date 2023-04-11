import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import moment from 'moment';

import config from '~/config';
import styles from './BlogCard.module.scss';

const cx = classNames.bind(styles);

function BlogCard({ blog, height = 56, rowContent = 2, vertical = false }) {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = blog.content;
    const content = tempElement.textContent || '';
    const date = moment(blog.createdAt);
    const formattedDate = date.format('DD/MM/YYYY');
    return (
        <div className={cx('blog-card', { flex: vertical })}>
            <Link className={cx({ 'image-link': vertical })} to={`/blog/${blog.category}/${blog.slug}`}>
                <div
                    className={cx('image')}
                    style={{
                        backgroundImage: `url(${config.IMAGES_URL.blogImage + blog.image})`,
                        paddingTop: `${height}%`,
                    }}
                ></div>
            </Link>
            <div className={cx('info', { padding: vertical })}>
                <Link to={`/blog/${blog.category}/${blog.slug}`} className={cx('title')}>
                    {blog.title}
                </Link>
                <p className={cx('date')}>{formattedDate}</p>
                <p className={cx('content')} style={{ WebkitLineClamp: rowContent }}>
                    {content}
                </p>
            </div>
        </div>
    );
}

export default BlogCard;
