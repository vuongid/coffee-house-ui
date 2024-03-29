import Home from '~/pages/Home';
import Menu from '~/pages/Menu';
import Product from '~/pages/Product';
import { SidebarLayout } from '~/layouts';
import Blogs from '~/pages/Blogs';
import Blog from '~/pages/Blog/Blog';
import Cloudfee from '~/pages/Cloudfee';
import Store from '~/pages/Store';
import Cart from '~/pages/Cart';
import Register from '~/pages/Register/';
import Login from '~/pages/Login';
import Admin from '~/pages/Admin/Admin';
import CategoryList from '~/pages/Admin/CategoryManagement/CategoryList';
import AddCategory from '~/pages/Admin/CategoryManagement/AddCategory';
import EditCategory from '~/pages/Admin/CategoryManagement/EditCategory';
import AdminLayout from '~/layouts/AdminLayout';
import ProductList from '~/pages/Admin/ProductManagement/ProductList';
import AddProduct from '~/pages/Admin/ProductManagement/AddProduct';
import EditProduct from '~/pages/Admin/ProductManagement/EditProduct';
import BlogList from '~/pages/Admin/BlogManagement/BlogList';
import AddBlog from '~/pages/Admin/BlogManagement/AddBlog';
import EditBlog from '~/pages/Admin/BlogManagement/EditBlog';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/menu', component: Menu, layout: SidebarLayout },
    { path: '/menu/:slug', component: Menu, layout: SidebarLayout },
    { path: '/product/:slug', component: Product },
    { path: '/blog', component: Blogs },
    { path: '/blog/:slug', component: Blogs },
    { path: '/blog/:category/:id', component: Blog },
    { path: '/store', component: Store },
    { path: '/store/:slug', component: Store },
    { path: '/inspiration', component: Cloudfee },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
];

const userRoutes = [{ path: '/cart', component: Cart }];

const adminRoutes = [
    { path: '/admin', component: Admin, layout: AdminLayout },
    { path: '/admin/category-list', component: CategoryList, layout: AdminLayout },
    { path: '/admin/category-list/add', component: AddCategory, layout: AdminLayout },
    { path: '/admin/category-list/:slug', component: EditCategory, layout: AdminLayout },
    { path: '/admin/product-list', component: ProductList, layout: AdminLayout },
    { path: '/admin/product-list/add', component: AddProduct, layout: AdminLayout },
    { path: '/admin/product-list/:slug', component: EditProduct, layout: AdminLayout },
    { path: '/admin/blog-list', component: BlogList, layout: AdminLayout },
    { path: '/admin/blog-list/add', component: AddBlog, layout: AdminLayout },
    { path: '/admin/blog-list/:slug', component: EditBlog, layout: AdminLayout },
];

export { publicRoutes, userRoutes, adminRoutes };
