import * as Yup from 'yup';
import classNames from 'classnames/bind';
import { toast } from 'react-toastify';
import { Formik, Form } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './EditProduct.module.scss';
import { getAllCategory } from '~/services/categoryService';
import { getProductBySlug, updateProduct } from '~/services/productService';

const cx = classNames.bind(styles);

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Vui lòng nhập tên sản phẩm'),
    description: Yup.string().required('Vui lòng nhập mô tả sản phẩm'),
    // image: Yup.string().required('Vui lòng chọn ảnh sản phẩm'),
    price: Yup.number().required('Vui lòng nhập giá sản phẩm'),
    category: Yup.string().required('Vui lòng chọn danh mục sản phẩm'),
});

function EditProduct() {
    const [categories, setCategories] = useState([]);
    const [product, setProduct] = useState();
    const navigate = useNavigate();
    const { slug } = useParams();

    useEffect(() => {
        const fetchAPI = async () => {
            const getCategories = await getAllCategory();
            const getProduct = await getProductBySlug(slug);
            setCategories(getCategories);
            setProduct(getProduct);
        };
        fetchAPI();
    }, [slug]);

    const handleSubmit = async (values) => {
        const { name, description, image, price, category } = values;

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('idCategory', category);
        formData.append('image', image);

        try {
            await updateProduct(product._id, values, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            toast.success('Sửa thông tin thành công', {
                autoClose: 700,
            });
            navigate(-1);
        } catch (error) {
            console.error(error);
        }
    };

    const initialValues = {
        name: product?.name,
        description: product?.description,
        // image: product?.image,
        price: product?.price,
        category: product?.idCategory._id,
    };

    if (!product) {
        return <div>loading</div>;
    }

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Sửa Sản Phẩm</h1>
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
                            <select
                                className={cx('form-select')}
                                defaultValue={product?.idCategory._id}
                                name="category"
                                onChange={handleChange}
                            >
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
                            Lưu
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default EditProduct;
