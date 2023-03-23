import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import Button from "../components/Button";

const Success = () => {
  return (
    <Layout nav={true}>
      <Seo title="Success" />
      <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Thank you for your message!
          </h1>
          <p className="mt-2 text-base text-gray-500">
            We will get back to you as soon as possible.
          </p>
          <div className="mt-6">
            <Button
              link="/"
              label="Go back to home page"
              size="lg"
              className="bg-indigo-500 text-white"
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Success;
