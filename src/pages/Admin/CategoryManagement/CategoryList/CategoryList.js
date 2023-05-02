import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Pagination from '~/components/Pagination/Pagination';
import styles from './CategoryList.module.scss';
import { deleteCategory, getAllCategory } from '~/services/categoryService';

const cx = classNames.bind(styles);

function CategoryList() {
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const navigate = useNavigate();
    const perPage = 5;
    const pageCount = Math.ceil(categories.length / perPage);
    const tableRef = useRef(null);

    useEffect(() => {
        const fetchAPI = async () => {
            const res = await getAllCategory();
            setCategories(res);
        };
        fetchAPI();
    }, []);

    const handleDelete = async (id) => {
        await deleteCategory(id);
        const updatedCategories = categories.filter((category) => category._id !== id);
        setCategories(updatedCategories);
    };

    const handleUpdate = (id) => {
        navigate(`${id}`);
    };

    const handlePageClick = ({ selected: selectedPage }) => {
        window.scrollTo({
            top: tableRef.current.offsetTop,
        });
        setCurrentPage(selectedPage);
    };

    return (
        <div>
            <h1>Quản Lý Danh Mục</h1>
            <Link to="add">thêm sản phẩm</Link>
            <table className={cx('table')} ref={tableRef}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên danh mục</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {categories.slice(currentPage * perPage, (currentPage + 1) * perPage).map((category, index) => (
                        <tr key={index}>
                            <td>{currentPage * perPage + index + 1}</td>
                            <td>{category.name}</td>
                            <td>
                                <button className={cx('button')} onClick={() => handleUpdate(category._id)}>
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button className={cx('button')} onClick={() => handleDelete(category._id)}>
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
        </div>
    );
}

export default CategoryList;
