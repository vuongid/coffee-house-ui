import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { getCategory, updateCategory } from '~/services/categoryService';

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
        navigate(-1);
    };

    if (!category) {
        return <div>Loading...</div>;
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ errors, touched }) => (
                <Form>
                    <div>
                        <label htmlFor="name">Tên danh mục</label>
                        <Field name="name" type="text" />
                        <ErrorMessage name="name" />
                    </div>
                    <button type="submit">Thêm danh mục</button>
                </Form>
            )}
        </Formik>
    );
}

export default EditCategory;
