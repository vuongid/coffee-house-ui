import * as Yup from 'yup';
import classNames from 'classnames/bind';
import { toast } from 'react-toastify';
import { Formik, Form } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './EditBlog.module.scss';
import CustomQuill from '~/components/Quill/CustomQuill';
import { getBlog, updateBlog } from '~/services/blogService';

const cx = classNames.bind(styles);

function EditBlog() {
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate();
    const { slug } = useParams();

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getBlog(slug);
            setBlog(res);
        };
        fetchApi();
    }, [slug]);

    const initialValues = {
        title: blog?.title,
        category: blog?.category,
        // image: blog?.image,
        content: blog?.content,
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Vui lòng nhập tiêu đề'),
        category: Yup.string().required('Vui lòng chọn chủ đề'),
        // image: Yup.string().required('Vui lòng chọn ảnh sản phẩm'),
        content: Yup.string().required('Vui lòng nhập content'),
    });

    const handleSubmit = async (values) => {
        const { title, category, image, content } = values;
        const formData = new FormData();
        formData.append('title', title);
        formData.append('category', category);
        formData.append('image', image);
        formData.append('content', content);
        try {
            const res = await updateBlog(slug, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (res.message === 'Success') {
                toast.success('Sửa blog thành công', {
                    autoClose: 700,
                });
                navigate(-1);
            }
        } catch (error) {
            console.error(error);
        }
    };

    if (!blog) {
        return <div>loading</div>;
    }

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Thêm Sản Phẩm</h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ touched, errors, values, handleChange, setFieldValue }) => (
                    <Form className={cx('form')}>
                        <div className={cx('form-group')}>
                            <label htmlFor="title" className={cx('form-label')}>
                                Tiêu đề:
                            </label>
                            <input
                                className={cx('form-input')}
                                spellCheck="false"
                                type="text"
                                id="title"
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                            />
                            {touched.title && errors.title && <div className={cx('error')}>{errors.title}</div>}
                        </div>
                        <div className={cx('form-group')}>
                            <label htmlFor="category" className={cx('form-label')}>
                                Danh mục:
                            </label>
                            <select
                                className={cx('form-select')}
                                name="category"
                                defaultValue={blog.category}
                                onChange={handleChange}
                            >
                                <option value="">Select a category</option>
                                <option value="Coffeeholic">Coffeeholic</option>
                                <option value="Teaholic">Teaholic</option>
                                <option value="Blog">Blog</option>
                            </select>
                            {touched.category && errors.category && (
                                <div className={cx('error')}>{errors.category}</div>
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
                            <label htmlFor="content" className={cx('form-label')}>
                                Nội dung
                            </label>
                            <CustomQuill
                                className={cx('form-quill')}
                                id="content"
                                value={values.content}
                                onChange={(value) => setFieldValue('content', value)}
                            />
                            {touched.content && errors.content && <div className={cx('error')}>{errors.content}</div>}
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

export default EditBlog;
