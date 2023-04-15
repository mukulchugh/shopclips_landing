import React from "react";
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Bars3CenterLeftIcon, Bars3Icon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "gatsby";

export default function MobileMenu() {
  const data = [
   
   {
    name: "How It Works?",
    link: "#how-it-works",
  },
  {
    name: "Features",
    link: "#features",
  },
  {
    name: "Pricing",
    link: "#pricing",
  },
  {
    name: "FAQs",
    link: "#faqs",
  },
  {
    name: "Join Waitlist",
    link: "contact",
  }
  ];

  // console.log(location);

  return (
      <Menu as="div" className="mr-2 border-none outline-none relative">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-opacity-20 px-2 py-2 text-display-sm font-bold hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <Bars3Icon
              className="ml-2 -mr-1 h-9 w-9 p-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-700 font-bold"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="p-1">
             {data.map((item, index) => (
               <Menu.Item key={index}>
               {({ active }) => (
                 
                    <Link
                    to={location.pathname === '/' ? item.link : `/${item.link}`}
                    className={`${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    } group flex rounded-md items-center w-full px-2 py-2 text-[14px] font-semibold text-sm]`}
                  >

                      {item.name}
                  </Link>
                  
               )}
             </Menu.Item>
              ))}
              </div>
             </Menu.Items>
        </Transition>
      </Menu>

  )
}
