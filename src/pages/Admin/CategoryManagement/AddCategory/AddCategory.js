import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { addCategory } from '~/services/categoryService';
import classNames from 'classnames/bind';

import styles from './AddCategory.module.scss';

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
        }
    };

    return (
        // <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        //     {({ errors, touched }) => (
        //         <Form>
        //             <div>
        //                 <label htmlFor="name">Tên danh mục</label>
        //                 <Field name="name" type="text" />
        //                 <ErrorMessage name="name" />
        //             </div>
        //             <button type="submit">Thêm danh mục</button>
        //         </Form>
        //     )}
        // </Formik>
        <div className={cx('wrapper')}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <Form className={cx('form')} onSubmit={handleSubmit}>
                        <FormGroup controlId="name">
                            <FormLabel>Tên danh mục</FormLabel>
                            <FormControl
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={touched.name && !!errors.name}
                            />
                            <ErrorMessage name="name" />
                        </FormGroup>
                        <Button className={cx('submit-btn')} variant="primary" type="submit">
                            Thêm danh mục
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default AddCategory;
