import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { mid } from '~/actions/auth';

function AdminRoute({ children }) {
    const { isLogin, user, token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        if (token) {
            dispatch(mid(token));
        }
    }, [dispatch, token]);

    if (isLogin && user?.role === 'admin') {
        return <>{children}</>;
    } else if (isLogin) {
        return <h1>Tài khoản của bạn không có quyền truy cập</h1>;
    } else {
        return <Navigate to="/login" />;
    }
}

export default AdminRoute;
