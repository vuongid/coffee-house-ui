import Home from '~/pages/Home';
import Menu from '~/pages/Menu';
import Product from '~/pages/Product';
import { SidebarLayout } from '~/layouts';
import Blog from '~/pages/Blog';
import Hiring from '~/pages/Hiring';
import Store from '~/pages/Store';
import Cart from '~/pages/Cart';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/menu', component: Menu, layout: SidebarLayout },
    { path: '/menu/:slug', component: Menu, layout: SidebarLayout },
    { path: '/product', component: Product, layout: SidebarLayout },
    { path: '/product/:slug', component: Product },
    { path: '/blog', component: Blog },
    { path: '/store', component: Store },
    { path: '/hiring', component: Hiring },
    { path: '/cart', component: Cart },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
