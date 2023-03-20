import React from "react";
import Testimonials from "../components/testimonials";
import CTA from "../components/cta"
import Features from "../components/features";
import Hero from "../components/hero";
import Integrations from "../components/integrations";
import Layout from "../components/layout";
import Seo from "../components/seo";
import FAQ from "../components/faq";

const IndexPage = () => (
  <Layout nav={true}>
    <Seo />
    <Hero />
    <Features />
    <Integrations />
    <FAQ />
    <Testimonials />
    <CTA />
  </Layout>
);

export default IndexPage;
