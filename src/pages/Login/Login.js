import * as Yup from 'yup';
import classNames from 'classnames/bind';
import { useFormik } from 'formik';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Login.module.scss';
import Button from '~/components/Button';
import { login } from '~/services/authService';
import { authRequest, mid } from '~/actions/auth';

const cx = classNames.bind(styles);

function Login() {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = useCallback(
        async (values) => {
            try {
                const res = await login(values);
                dispatch(authRequest(res.token));
                dispatch(mid(res.token));
                localStorage.setItem('token', JSON.stringify(res));
            } catch (error) {
                if (error.response.status === 404) {
                    formik.setFieldError('userName', 'User name không tồn tại');
                } else if (error.response.status === 401) {
                    formik.setFieldError('password', 'Sai password');
                }
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
    );

    useEffect(() => {
        if (user) {
            navigate(user.role === 'admin' ? '/admin' : '/');
        }
    }, [user, navigate]);

    const validationSchema = Yup.object().shape({
        userName: Yup.string().required('Vui lòng nhập user name'),
        password: Yup.string().required('Vui lòng nhập password'),
    });

    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: handleLogin,
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container', 'pd')}>
                <h1 className={cx('heading')}>Đăng nhập</h1>
                <form onSubmit={formik.handleSubmit} className={cx('form')}>
                    <label className={cx('title')} htmlFor="userName">
                        username
                    </label>
                    <input
                        className={cx('input', { error: formik.touched.userName && formik.errors.userName })}
                        type="text"
                        id="userName"
                        name="userName"
                        value={formik.values.userName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.userName && formik.errors.userName ? (
                        <div className={cx('error-text')}>{formik.errors.userName}</div>
                    ) : null}
                    <label className={cx('title')} htmlFor="password">
                        password
                    </label>
                    <input
                        className={cx('input', { error: formik.touched.password && formik.errors.password })}
                        type="password"
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div className={cx('error-text')}>{formik.errors.password}</div>
                    ) : null}
                    <Button className={cx('submit-btn')} type="submit">
                        Đăng Nhập
                    </Button>
                    <Link to="/register">Đăng ký tài khoản</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
