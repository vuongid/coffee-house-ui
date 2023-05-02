import classNames from 'classnames/bind';
import { toast } from 'react-toastify';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import config from '~/config';
import Pagination from '~/components/Pagination';
import styles from './ProductList.module.scss';
import { deleteProduct, getProductList } from '~/services/productService';

const cx = classNames.bind(styles);

function ProductList() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const perPage = 5;
    const pageCount = Math.ceil(products.length / perPage);
    const tableRef = useRef(null);

    const navigate = useNavigate();
    useEffect(() => {
        const fetchApi = async () => {
            const res = await getProductList();
            setProducts(res);
        };
        fetchApi();
    }, []);

    const handleDelete = async (id) => {
        await deleteProduct(id);
        const updatedProducts = products.filter((product) => product._id !== id);
        setProducts(updatedProducts);
        toast.success('Xóa sản phẩm thành công', {
            autoClose: 700,
        });
    };

    const handleUpdate = (slug) => {
        navigate(slug);
    };

    function handlePageClick({ selected: selectedPage }) {
        window.scrollTo({
            top: tableRef.current.offsetTop,
        });
        setCurrentPage(selectedPage);
    }

    return (
        <div>
            <h1>Quản Lý Danh Mục</h1>
            <Link to="add">thêm sản phẩm</Link>
            <table className={cx('table')} ref={tableRef}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Mô tả</th>
                        <th>Tên danh mục</th>
                        <th>Giá tiền</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.slice(currentPage * perPage, (currentPage + 1) * perPage).map((product, index) => (
                        <tr key={index}>
                            <td>{currentPage * perPage + index + 1}</td>
                            <td>
                                <img
                                    src={config.IMAGES_URL.productImage + product.image}
                                    alt=""
                                    style={{ width: '100px' }}
                                />
                            </td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.idCategory?.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <button className={cx('button')} onClick={() => handleUpdate(product.slug)}>
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button className={cx('button')} onClick={() => handleDelete(product._id)}>
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

export default ProductList;
