import React from "react";
import FAQ from "../components/faq";
import Testimonials from "../components/faq";
import CTA from "../components/cta"
import Features from "../components/features";
import Hero from "../components/hero";
import Integrations from "../components/integrations";
import Layout from "../components/layout";
import Seo from "../components/seo";

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
