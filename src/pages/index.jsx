import React from "react";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA"
import Features from "../components/Features";
import Hero from "../components/Hero";
import Integrations from "../components/Integrations";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import FAQ from "../components/FAQ";
import Pricing from "../components/Pricing";
import BasicSection from "../components/BasicSection";
import { ArrowDownRightIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

const Index = () => (
  <Layout nav={true}>
    <Seo title="ShopClips" />
    <Hero Heading={<><div className="flex items-center">Shoppable Clips <ArrowRightIcon width={45} className="mx-4" />  ShopClips <br/> </div><>For Shopify</></>} Description="
      Add shoppable videos to your shopify store to boost engagement, trust and sales with our interactive video platform.
    " />
    <BasicSection title="Boost your Shopify store sales with interactive and shoppable videos" 
    body="ShopClips can take your shopify store to the next level by adding shoppable videos, which simplifies the process of finding and purchasing your products, resulting in a better shopping experience for your customers." features={[
            "Convince customers with your best content",
            "Increase time on site and engagement",
            "Add videos to any page",
            "No impact on site load time",
            "Complete customisation and branding",
          ]} end="Let your products come alive and sell themselves!" />
    <Features />
    {/* <CTA /> */}
    {/* <Testimonials /> */}
    <Pricing />
    {/* <Integrations /> */}
    <FAQ />
  </Layout>
);

export default Index;
