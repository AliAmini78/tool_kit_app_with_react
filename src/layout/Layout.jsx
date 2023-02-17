import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import './Layout.scss';

const Layout = () => {
  return (
    <div dir="rtl">
    <Header />
    
    <Outlet />

    <Footer/>
    </div>
  )
};

export default Layout;