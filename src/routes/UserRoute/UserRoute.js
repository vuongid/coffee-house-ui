import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { mid } from '~/actions/auth';

function UserRoute({ children }) {
    const { isLogin, token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        if (token) {
            dispatch(mid(token));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return isLogin ? <>{children}</> : <Navigate to="/login" />;
}

export default UserRoute;
