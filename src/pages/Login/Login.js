import axios from 'axios';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/components/Button';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
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
                        localStorage.setItem('token', JSON.stringify(response.data));
                        console.log('success');
                    }
                });
        } catch (error) {
            console.log(error.response.data.message);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('Login')}>
                <h1 className={cx('title')}>Đăng nhập</h1>
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
                    <Button type="submit">asd</Button>
                </form>
            </div>
        </div>
    );
}

export default Login;
