import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './CategoryList.module.scss';
import { deleteCategory, getAllCategory } from '~/services/categoryService';

const cx = classNames.bind(styles);

function CategoryList() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
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

    return (
        <div>
            <h1>Quản Lý Danh Mục</h1>
            <Link to="add">thêm sản phẩm</Link>
            <table className={cx('table')}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên danh mục</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
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
        </div>
    );
}

export default CategoryList;
