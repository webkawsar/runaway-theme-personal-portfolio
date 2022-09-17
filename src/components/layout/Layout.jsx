import React from "react";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

const Layout = ({ children }) => {
  return (
    <>
      <div id="page_wrapper">
        <div className="row">
          <Header />
            {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
