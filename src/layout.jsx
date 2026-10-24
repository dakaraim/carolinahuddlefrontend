import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import (Outlet) from "react-router-dom";

const Layout = () => {
    return (
    <div id="layout">
        <Header />


        <Footer />
    </div>
)
};