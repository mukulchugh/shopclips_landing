/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

const BrandShowcase = () => {
  const ref = React.useRef(null);

  return (
    <div className="py-12 sm:py-14 text-white mt-12" id="features">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600 uppercase">
          Our Brand Partners
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Trusted by the best in the industry
        </p>
      </div>
    <div className="mx-auto mt-2 max-w-2xl lg:mt-2 lg:max-w-screen-2xl">
    <div className="relative w-full overflow-hidden bg-white py-10">
      {/* Gradient overlays */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="flex animate-scroll will-change-transform">
        {/* <div className="flex shrink-0"> */}
          <img
            src="../brand-showcase.webp"  
            alt="Our Brand Partners"
            className="h-22 w-auto max-w-none object-contain"
            style={{
              imageRendering: '-webkit-optimize-contrast',
              transform: 'translateZ(0)',

            }}
            draggable="false"
          />
        {/* </div> */}
      </div>
    </div>
  </div>
</div>
</div>  
)
}

export default BrandShowcase
