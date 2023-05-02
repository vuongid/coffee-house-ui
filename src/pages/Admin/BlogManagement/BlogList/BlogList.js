import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import config from '~/config';
import formatDate from '~/utils/formatDate';
import Pagination from '~/components/Pagination/Pagination';
import styles from './BlogList.module.scss';
import { deleteBlog, getBlogs } from '~/services/blogService';

const cx = classNames.bind(styles);

function BlogList() {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const navigate = useNavigate();
    const tableRef = useRef(null);
    const perPage = 5;
    const pageCount = Math.ceil(blogs.length / perPage);

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

    const handlePageClick = ({ selected: selectedPage }) => {
        window.scrollTo({
            top: tableRef.current.offsetTop,
        });
        setCurrentPage(selectedPage);
    };

    return (
        <>
            <h1>Blog list</h1>
            <Link to="add">Add blog</Link>
            <table className={cx('table')} ref={tableRef}>
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
                    {blogs.slice(currentPage * perPage, (currentPage + 1) * perPage).map((blog, index) => (
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
            <div className={cx('pagination')}>
                <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
            </div>
        </>
    );
}

export default BlogList;
