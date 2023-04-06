import * as Yup from 'yup';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import styles from './AddProduct.module.scss';
import { addProduct } from '~/services/productService';
import { getAllCategory } from '~/services/categoryService';

const cx = classNames.bind(styles);

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Vui lòng nhập tên sản phẩm'),
    description: Yup.string().required('Vui lòng nhập mô tả sản phẩm'),
    image: Yup.string().required('Vui lòng chọn ảnh sản phẩm'),
    price: Yup.number().required('Vui lòng nhập giá sản phẩm'),
    category: Yup.string().required('Vui lòng chọn danh mục sản phẩm'),
});

function AddProduct() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAPI = async () => {
            const res = await getAllCategory();
            setCategories(res);
        };
        fetchAPI();
    }, []);

    const handleSubmit = async (values) => {
        const { name, description, image, price, category } = values;

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('idCategory', category);
        formData.append('image', image);

        try {
            await addProduct(formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            toast.success('Thêm sản phẩm mới thành công', {
                autoClose: 700,
            });
            navigate(-1);
        } catch (error) {
            console.error(error);
        }
    };

    const initialValues = { name: '', description: '', image: '', price: '', category: '' };

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Thêm Sản Phẩm</h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ setFieldValue, touched, errors, values, handleChange }) => (
                    <Form className={cx('form')}>
                        <div className={cx('form-group')}>
                            <label htmlFor="name" className={cx('form-label')}>
                                Tên:
                            </label>
                            <input
                                className={cx('form-input')}
                                spellCheck="false"
                                type="text"
                                id="name"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                            />
                            {touched.name && errors.name ? <div className={cx('error')}>{errors.name}</div> : null}
                        </div>

                        <div className={cx('form-group')}>
                            <label htmlFor="description" className={cx('form-label')}>
                                Mô tả:
                            </label>
                            <textarea
                                className={cx('form-textarea')}
                                rows={3}
                                spellCheck="false"
                                type="text"
                                id="description"
                                name="description"
                                value={values.description}
                                onChange={handleChange}
                            />
                            {touched.description && errors.description && (
                                <div className={cx('error')}>{errors.description}</div>
                            )}
                        </div>

                        <div className={cx('form-group')}>
                            <label htmlFor="image" className={cx('form-label')}>
                                Hình ảnh:
                            </label>
                            <input
                                className={cx('form-file')}
                                type="file"
                                onChange={(event) => {
                                    setFieldValue('image', event.currentTarget.files[0]);
                                }}
                            />
                            {touched.image && errors.image && <div className={cx('error')}>{errors.image}</div>}
                        </div>

                        <div className={cx('form-group')}>
                            <label htmlFor="price" className={cx('form-label')}>
                                Giá:
                            </label>
                            <input
                                className={cx('form-input')}
                                spellCheck="false"
                                type="text"
                                id="price"
                                name="price"
                                value={values.price}
                                onChange={handleChange}
                            />
                            {touched.price && errors.price && <div className={cx('error')}>{errors.price}</div>}
                        </div>

                        <div className={cx('form-group')}>
                            <label htmlFor="category" className={cx('form-label')}>
                                Danh mục:
                            </label>
                            <select className={cx('form-select')} name="category" onChange={handleChange}>
                                <option value="">Select a category</option>
                                {categories.map((category) => (
                                    <option key={category._id} value={category._id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                            {touched.category && errors.category && (
                                <div className={cx('error')}>{errors.category}</div>
                            )}
                        </div>

                        <button type="submit" className={cx('btn')}>
                            Thêm
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default AddProduct;
