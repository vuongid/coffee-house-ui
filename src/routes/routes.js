import Home from '~/pages/Home';
import Menu from '~/pages/Menu';
import Product from '~/pages/Product';
import { SidebarLayout } from '~/layouts';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/Menu', component: Menu, layout: SidebarLayout },
    { path: '/Product', component: Product, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
