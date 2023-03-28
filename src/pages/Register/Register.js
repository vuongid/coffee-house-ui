import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

import styles from './Register.module.scss';
import { useDispatch } from 'react-redux';
import { authLogout } from '~/actions/auth';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authLogout());
        localStorage.removeItem('token');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const phoneRegExp = /(03|05|07|08|09)+([0-9]{8})\b/;
    const specialChars = /^[a-zA-Z0-9]+$/;

    const validationSchema = Yup.object().shape({
        userName: Yup.string()
            .required('Vui lòng nhập user name')
            .min(3, 'Tên người dùng phải có ít nhất 3 ký tự')
            .matches(specialChars, 'User name không chứa ký tự đặc biệt'),
        password: Yup.string()
            .required('Vui lòng nhập mật khẩu')
            .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
            .matches(/^\S*$/, 'Mật khẩu không được chứa khoảng trắng'),
        confirmPassword: Yup.string()
            .required('Vui lòng nhập lại mật khẩu')
            .oneOf([Yup.ref('password'), null], 'Mật khẩu không trùng khớp'),
        name: Yup.string().required('Vui lòng nhập tên'),
        email: Yup.string().required('Vui lòng nhập email').email('vui lòng nhập đúng email'),
        address: Yup.string().required('Vui lòng nhập địa chỉ'),
        phone: Yup.string()
            .required('Vui lòng nhập số điện thoại')
            .matches(phoneRegExp, 'Vui lòng nhập đúng số điện thoại'),
    });

    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
            confirmPassword: '',
            name: '',
            email: '',
            address: '',
            phone: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log(values);
            try {
                await axios.post('http://localhost:3001/api/user/add', values);
                console.log('User created successfully');
                navigate('/login');
            } catch (error) {
                if (error.response.status === 409) {
                    formik.errors.userName = 'User name đã tồn tại';
                }
                console.log(error.response.data.message);
            }
        },
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h1 className={cx('heading')}>Đăng Ký</h1>
                <form onSubmit={formik.handleSubmit} className={cx('form')}>
                    <label className={cx('title')} htmlFor="userName">
                        username
                    </label>
                    <input
                        spellCheck="false"
                        className={cx('input', { error: formik.errors.userName && formik.touched.userName })}
                        type="text"
                        id="userName"
                        name="userName"
                        value={formik.values.userName}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.userName && formik.errors.userName ? (
                        <div className={cx('error-text')}>{formik.errors.userName}</div>
                    ) : null}
                    <label className={cx('title')} htmlFor="password">
                        password
                    </label>
                    <input
                        spellCheck="false"
                        className={cx('input', { error: formik.errors.password && formik.touched.password })}
                        type="password"
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div className={cx('error-text')}>{formik.errors.password}</div>
                    ) : null}
                    <label className={cx('title')} htmlFor="confirmPassword">
                        confirmPassword
                    </label>
                    <input
                        spellCheck="false"
                        className={cx('input', {
                            error: formik.errors.confirmPassword && formik.touched.confirmPassword,
                        })}
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                        <div className={cx('error-text')}>{formik.errors.confirmPassword}</div>
                    ) : null}
                    <label className={cx('title')} htmlFor="name">
                        name
                    </label>
                    <input
                        spellCheck="false"
                        className={cx('input', { error: formik.errors.name && formik.touched.name })}
                        type="name"
                        id="name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className={cx('error-text')}>{formik.errors.name}</div>
                    ) : null}
                    <label className={cx('title')} htmlFor="email">
                        email
                    </label>
                    <input
                        spellCheck="false"
                        className={cx('input', { error: formik.errors.email && formik.touched.email })}
                        type="text"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className={cx('error-text')}>{formik.errors.email}</div>
                    ) : null}
                    <label className={cx('title')} htmlFor="address">
                        address
                    </label>
                    <input
                        spellCheck="false"
                        className={cx('input', { error: formik.errors.address && formik.touched.address })}
                        type="address"
                        id="address"
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.address && formik.errors.address ? (
                        <div className={cx('error-text')}>{formik.errors.address}</div>
                    ) : null}
                    <label className={cx('title')} htmlFor="phone">
                        phone
                    </label>
                    <input
                        spellCheck="false"
                        className={cx('input', { error: formik.errors.phone && formik.touched.phone })}
                        type="phone"
                        id="phone"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                        <div className={cx('error-text')}>{formik.errors.phone}</div>
                    ) : null}
                    <Button className={cx('submit-btn')} type="submit">
                        Đăng Ký
                    </Button>
                    <p className={cx('login')}>
                        Bạn đã có tài khoản <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Register;
