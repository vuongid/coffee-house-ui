import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { adminRoutes, userRoutes, publicRoutes } from '~/routes/routes';
import { DefaultLayout } from '~/layouts/';
import { Fragment } from 'react';
import UserRoute from './routes/UserRoute/UserRoute';
import AdminRoute from './routes/AdminRoute/AdminRoute';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <ToastContainer />
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    {userRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <UserRoute>
                                        <Layout>
                                            <ToastContainer />
                                            <Page />
                                        </Layout>
                                    </UserRoute>
                                }
                            />
                        );
                    })}
                    {adminRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <AdminRoute>
                                        <Layout>
                                            <ToastContainer />
                                            <Page />
                                        </Layout>
                                    </AdminRoute>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
