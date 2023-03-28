import { useEffect, useState } from 'react';
import { getAllCategory } from '~/services/categoryService';
import Menu from './Menu';

function Sidebar() {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            const res = await getAllCategory();
            setMenu(res);
        };
        fetchAPI();
    }, []);

    return (
        <aside>
            <Menu menu={menu} />
        </aside>
    );
}

export default Sidebar;
