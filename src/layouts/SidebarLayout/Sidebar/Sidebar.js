import Menu from './Menu';

const menu = [
    { title: 'Tất Cả', to: '/menu/1' },
    { title: 'Món Tết', to: '/menu/2' },
    { title: 'Cà Phê', to: '3' },
    { title: 'CloudFee', to: '4' },
    { title: 'CloudTea', to: '5' },
    { title: 'Trà', to: '6' },
    { title: 'Hi-', to: '7' },
    { title: 'Bánh & Snack', to: '8' },
    { title: 'Tại nhà', to: '9' },
];

function Sidebar() {
    return (
        <aside>
            <Menu menu={menu} />
        </aside>
    );
}

export default Sidebar;
