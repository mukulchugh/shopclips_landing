import React, { useState } from "react";
import { Switch } from "@headlessui/react";

const pricingData = [
  {
    title: "Starter",
    price: "10",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Growth",
    price: "20",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Scale",
    price: "50",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isRecommended: true,
  },
  {
    title: "Enterprise",
    price: "50",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="lg:text-center">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Pricing</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    The right price for you, to grow your business
                </p>
            </div>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="pb-10">
          <Switch.Group
            as="div"
            className="flex items-center justify-center"
          >
            <Switch.Label className="mr-4 text-lg">Monthly</Switch.Label>
            <Switch
              checked={isMonthly}
              onChange={setIsMonthly}
              className={classNames(
                isMonthly ? "bg-indigo-600" : "bg-gray-200",
                "relative inline-flex items-center h-6 rounded-full w-11 transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              )}
            >
              <span className="sr-only">Use setting</span>
              <span
                className={classNames(
                  isMonthly ? "translate-x-6" : "translate-x-1",
                  "inline-block w-4 h-4 transform bg-white rounded-full transition-transform ease-in-out duration-200"
                )}
              />
            </Switch>
            <Switch.Label className="ml-4 text-lg">Yearly</Switch.Label>
          </Switch.Group>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
          {pricingData.map((plan, i) => (
            <div key={i} className={`${plan?.isRecommended ? "outline outline-2 outline-indigo-500" : ""} relative z-0 shadow-lg flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow`}>
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
          {isMonthly ? plan.price : (plan.price * 12).toFixed(0).toString()}
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
    href="#"
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
