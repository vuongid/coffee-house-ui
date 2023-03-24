import axios from 'axios';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { authLogout, authRequest, mid } from '~/actions/auth';
import Button from '~/components/Button';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLogin } = useSelector((state) => state.auth);
    console.log('isLogin', isLogin);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios
                .post('http://localhost:3001/api/auth/login', {
                    name,
                    password,
                })
                .then((response) => {
                    if (response.status === 200) {
                        navigate('/');
                        dispatch(authRequest(response.data.token));
                        dispatch(mid(response.data.token));
                        localStorage.setItem('token', JSON.stringify(response.data));
                        alert('success');
                        console.log('success');
                        setError('');
                    }
                });
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    const handleLogout = () => {
        dispatch(authLogout());
    };

    return isLogin ? (
        <Navigate to="/" />
    ) : (
        <div className={cx('wrapper')}>
            <div className={cx('Login')}>
                <h1 className={cx('title')}>Đăng nhập</h1>
                <Button primary onClick={handleLogout}>
                    logout
                </Button>
                <form onSubmit={handleSubmit} className={cx('form')}>
                    <label htmlFor="name">username</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="password">password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p>{error}</p>
                    <Button type="submit">Đăng Nhập</Button>
                </form>
            </div>
        </div>
    );
}

export default Login;
