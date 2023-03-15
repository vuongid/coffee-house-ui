import axios from 'axios';
import { useEffect, useState } from 'react';
import Menu from './Menu';

// const menu = [
//     { name: 'Tất Cả', to: '/menu/1' },
//     { name: 'Cà Phê', to: '3' },
//     { name: 'CloudFee', to: '4' },
//     { name: 'CloudTea', to: '5' },
//     { name: 'Trà', to: '6' },
//     { name: 'Hi-', to: '7' },
//     { name: 'Bánh & Snack', to: '8' },
//     { name: 'Tại nhà', to: '9' },
// ];

function Sidebar() {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:3001/api/category/get-all')
            .then((response) => {
                setMenu(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <aside>
            <Menu menu={menu} />
        </aside>
    );
}

export default Sidebar;
