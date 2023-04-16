import React, { useState } from "react";
import { Switch } from "@headlessui/react";

const pricingData = [
  {
    title: "Starter",
    price: "25",
    features: ["Shopify Admin App", "Homepage Video Carousel", "Organise Video Carousel", "Analytics Dashboard"],
    description: "2500 Video Views/month Unlimited Videos",
  },
  {
    title: "Growth",
    price: "95",
    features: ["Shopify Admin App", "Homepage Video Carousel", "Organise Video Carousel", "Analytics Dashboard", "Live chat support"],
    description: "10,000 Video Views/month Unlimited Videos",
    isRecommended: true,

  },
  {
    title: "Scale",
    price: "390",
    features: ["Shopify Admin App", "Homepage Video Carousel", "Organise Video Carousel", "Analytics Dashboard", "Live chat support", "Customization"],
    description: "50,000 Video Views/month Unlimited Videos",
  },
  {
    title: "Enterprise",
    price: "50",
    features: ["Shopify Admin App", "Homepage Video Carousel", "Organise Video Carousel", "Analytics Dashboard", "Live chat support", "Full Customization", "Enterprise Security"],
    description: "100,000 Video Views/month Unlimited Videos",
    isEnterprise: true,
    
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section className="bg-gray-50" id="pricing">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Pricing</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    The right price for you, to grow your business
                </p>
            </div>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-2">
        <div className="pb-14">
          <Switch.Group
            as="div"
            className="flex items-center justify-center"
          >
           <div className="flex flex-col md:flex-row items-center gap-4 md:ml-60">
             <div>
               <Switch.Label className="mr-4 text-sm md:text-lg">Monthly</Switch.Label>
              <Switch
              checked={isMonthly}
              onChange={setIsMonthly}
              className={classNames(
                isMonthly ?  "bg-gray-200" : "bg-indigo-600",
                "relative inline-flex items-center h-6 rounded-full w-11 transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              )}
            > 
              <span className="sr-only">Use setting</span>
              <span
                className={classNames(
                  isMonthly ? "translate-x-1" : "translate-x-6",
                  "inline-block w-4 h-4 transform bg-white rounded-full transition-transform ease-in-out duration-200"
                )}
              />
            </Switch>
            <Switch.Label className="ml-4 text-sm md:text-lg">Yearly</Switch.Label>
            </div>
            <p className="text-indigo-500 text-sm md:text-lg">Billed once per year - <strong>Save 10%</strong></p>
           </div>
          </Switch.Group>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
          {pricingData.map((plan, i) => (
            <div key={i} className={`${plan?.isRecommended ? "outline outline-2 outline-indigo-500" : ""} relative z-0 shadow-lg flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow`}>
{
  plan?.isRecommended && <p className="bg-indigo-500 z-50 py-1 top-0 -mt-10 text-white mb-4 w-full rounded-md">
Recommended
   </p>
}
  <h3 className="mb-4 text-2xl font-semibold">{plan.title}</h3>
  <p className="font-light text-gray-500 sm:text-sm">
   {plan.description}
  </p>
  <div className="flex items-baseline justify-center my-8">
 {plan?.isEnterprise ? (
          <React.Fragment>
            <span className="mr-2 text-sm font-extrabold outline outline-1 px-4 py-2 w-full rounded-md">Let's Connect</span>
          </React.Fragment>

        ) : (
         <React.Fragment>
           <span className="mr-2 text-5xl font-extrabold">$
          {isMonthly ? plan.price : ((plan.price * 12) - (plan.price * 1.2)).toFixed(0).toString()}
                </span>
                <span className="text-gray-500 ">
                  {isMonthly ? "/month" : "/year"}
                </span>
         </React.Fragment>
                )}
  </div>
  


  <ul role="list" className="mb-8 space-y-4 text-left">
    {plan.features.map((feature, i) => (
        <li key={i} className="flex items-center space-x-3">
        {/* Icon */}
        <svg
          className="flex-shrink-0 w-5 h-5 text-green-500 "
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        <span>{feature}</span>
      </li>
    ))}
  </ul>
  <a
    href="/contact"
    className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
  >
    Get started
  </a>
</div>
            ))}
        </div>
        </div>
        </div>


        </section>
    );
}
