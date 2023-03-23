import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

const Integrations = () => {
  const data = useStaticQuery(graphql`
  {
  integrations: allFile(
    filter: {relativeDirectory: {eq: "integration-logos"}}
    sort: {name: ASC}
  ) {
    edges {
      node {
        id
        name
        publicURL
      }
    }
  }
}
  `);
  return (
    <div className="text-white" id="cta-bg">
      <div className="container mx-auto py-12">
        <div className="grid xl:grid-cols-2 grid-cols-1 xl:gap-8 gap-10 xl:py-18 md:py-12 pt-12 pb-6 xl:px-0 md:px-12 px-0 items-center relative">
          <div className="flex flex-col gap-4 relative xl:text-left text-center">
            <h3 className="lg:text-display-lg md:text-display-lg text-display-md font-semibold">
              Integrate with your favorite tools
            </h3>
            <p className="md:text-body-lg text-body-md font-normal text-neutral-400">
              Connect ShopClips with your most favorite CMS and tools
            </p>
          </div>
          <div className="flex flex-row flex-wrap xl:gap-12 lg:gap-9 md:gap-18 gap-8 items-center justify-center justify-items-center relative">
            {data.integrations.edges.map(({ node }) => (
              <StaticImage
                src={node.publicURL}
                alt={node.name}
                key={node.id}
                className="shadow-xl rounded-full md:w-20 md:h-20 w-14 h-14"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Integrations;
