import * as Yup from 'yup';
import classNames from 'classnames/bind';
import { toast } from 'react-toastify';
import { Formik, Form } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './EditCategory.module.scss';
import { getCategory, updateCategory } from '~/services/categoryService';

const cx = classNames.bind(styles);

function EditCategory() {
    const { slug } = useParams();
    const [category, setCategory] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAPI = async () => {
            const res = await getCategory(slug);
            setCategory(res);
        };
        fetchAPI();
    }, [slug]);

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Vui lòng nhập danh mục không được bỏ trống'),
    });

    const initialValues = {
        name: category?.name,
    };

    const handleSubmit = async (values) => {
        await updateCategory(slug, values);
        toast.success('Sửa danh mục thành công', {
            autoClose: 700,
        });
        navigate(-1);
    };

    if (!category) {
        return <div className={cx('loader')} />;
    }

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Sửa Danh Mục</h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ errors, touched, values, handleChange }) => (
                    <Form className={cx('form')}>
                        <label htmlFor="name" className={cx('form-label')}>
                            Tên danh mục
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
                        {touched.name && errors.name && <div className={cx('error')}>{errors.name}</div>}
                        <button className={cx('submit-btn')} type="submit">
                            Sửa danh mục
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default EditCategory;
