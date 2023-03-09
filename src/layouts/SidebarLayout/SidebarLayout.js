import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import Sidebar from './Sidebar';

function SidebarLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default SidebarLayout;
