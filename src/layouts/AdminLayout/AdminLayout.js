import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function AdminLayout({ children }) {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/admin">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/admin/category-list">Quản lý danh mục</Nav.Link>
                        <Nav.Link href="/admin/product">Quản lý sản phẩm</Nav.Link>
                        <Nav.Link href="/admin/blog">Quản lý blog</Nav.Link>
                        <NavDropdown title="user-name" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="grid wide">{children}</div>
        </>
    );
}

export default AdminLayout;
