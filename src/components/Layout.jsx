import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, nav }) => (
  <React.Fragment className="flex flex-col">
    {nav === true ? <Header /> : ""}
    <div>
      <main>{children}</main>
    </div>
    <Footer />
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  nav: PropTypes.bool,
};

export default Layout;
