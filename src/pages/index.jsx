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

const Index = () => (
  <Layout nav={true}>
    <Seo />
    <Hero />
    <BasicSection title="Work with tools you already use" body="Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions. Accelerate critical development work,
          eliminate toil, and deploy changes with ease." features={[
            "Continuous integration and deployment",
            "Development workflow",
            "Infrastructure as code",
            "Infrastructure automation",
            "Infrastructure as code",
          ]} end="Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions." />
     <BasicSection reverse title="Work with tools you already use" 
     body="Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
     features={[
            "Continuous integration and deployment",
            "Development workflow",
            "Infrastructure as code",
            "Infrastructure automation",
            "Infrastructure as code",
          ]} 
          end="Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions." />
    <Features />
    <CTA />
    <Testimonials />
    <Pricing />
    <Integrations />
    <FAQ />
  </Layout>
);

export default Index;
