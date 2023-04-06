import { Link } from 'react-router-dom';

function AdminLayout({ children }) {
    return (
        <>
            <div>
                <Link to={'/admin/category-list'}>Quản lý danh mục</Link>
                <Link to={'/admin/product-list'}>React-Bootstrap</Link>
                <Link to={'/admin/blog-list'}>Quản lý sản phẩm</Link>
            </div>
            <div className="grid wide">{children}</div>
        </>
    );
}

export default AdminLayout;
