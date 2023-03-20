import React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";
import CTA from "./cta";
import Testimonials from "./testimonials";
import FAQ from "./faq";

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
