import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { deleteCategory, getAllCategory } from '~/services/categoryService';

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
            <Table striped bordered hover>
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
                                <Button variant="primary" onClick={() => handleUpdate(category._id)}>
                                    Edit
                                </Button>
                            </td>
                            <td>
                                <Button variant="danger" onClick={() => handleDelete(category._id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default CategoryList;
