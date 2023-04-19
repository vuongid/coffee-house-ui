import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import config from '~/config';
import styles from './BlogList.module.scss';
import { deleteBlog, getBlogs } from '~/services/blogService';
import formatDate from '~/utils/formatDate';

const cx = classNames.bind(styles);

function BlogList() {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchApi = async () => {
            const res = await getBlogs();
            setBlogs(res);
        };
        fetchApi();
    }, []);

    const handleEdit = async (id) => {
        navigate(id);
    };

    const handleDelete = async (id) => {
        const res = await deleteBlog(id);
        if (res.message === 'Success') {
            const updatedBlogs = blogs.filter((blog) => blog._id !== id);
            setBlogs(updatedBlogs);
        }
    };

    return (
        <>
            <h1>Blog list</h1>
            <Link to="add">Add blog</Link>
            <table className={cx('table')}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Hình ảnh</th>
                        <th>Tiêu đề</th>
                        <th>Chủ đề</th>
                        <th>Ngày tạo</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                <img
                                    src={`${config.IMAGES_URL.blogImage + blog.image}`}
                                    alt=""
                                    style={{ width: '100px' }}
                                />
                            </td>
                            <td>{blog.title}</td>
                            <td>{blog.category}</td>
                            <td>{formatDate(blog.createdAt)}</td>
                            <td>
                                <button className={cx('button')} onClick={() => handleEdit(blog._id)}>
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button className={cx('button')} onClick={() => handleDelete(blog._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default BlogList;
