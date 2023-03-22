import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/components/Button';

import styles from './Register.module.scss';

const cx = classNames.bind(styles);

function Register() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/api/user/add', { name, password });
            console.log('User created successfully');
            navigate('/');
        } catch (err) {
            console.log(err.response.data.message);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('Register')}>
                <h1 className={cx('title')}>Đăng Ký</h1>
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
                    <Button type="submit" onClick={(e) => handleSubmit(e)}>
                        asd
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Register;
