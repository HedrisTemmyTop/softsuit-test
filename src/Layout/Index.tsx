import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <section className="main">
        <Sidebar />
        <Outlet />
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
