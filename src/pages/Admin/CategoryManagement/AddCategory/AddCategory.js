import * as Yup from 'yup';
import classNames from 'classnames/bind';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';

import styles from './AddCategory.module.scss';
import { addCategory } from '~/services/categoryService';

const cx = classNames.bind(styles);

function AddCategory() {
    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Vui lòng nhập danh mục không được bỏ trống'),
    });
    const initialValues = {
        name: '',
    };
    const handleSubmit = async (values) => {
        const res = await addCategory(values);
        if (res.message === 'created') {
            navigate(-1);
            toast.success('Thêm danh mục thành công', {
                autoClose: 700,
            });
        }
    };

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Thêm Danh Mục</h1>
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
                            value={values.description}
                            onChange={handleChange}
                        />
                        {touched.name && errors.name && <div className={cx('error')}>{errors.name}</div>}
                        <button className={cx('submit-btn')} type="submit">
                            Thêm danh mục
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default AddCategory;
