import React, { useState } from 'react';

import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

function DefaultLayout({ children }) {
    const [totalQuantity, setTotalQuantity] = useState(JSON.parse(localStorage.getItem('cart'))?.totalQuantity);
    const handleSetTotalQuantity = (quantity) => {
        setTotalQuantity(quantity);
    };
    return (
        <div>
            <Header totalQuantity={totalQuantity} />
            {React.cloneElement(children, { setTotalQuantity: handleSetTotalQuantity })}
            <Footer />
        </div>
    );
}

export default DefaultLayout;
