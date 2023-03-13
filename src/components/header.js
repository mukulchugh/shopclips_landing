import React from "react";
import { Link } from "gatsby";

import Button from "./button";
import { Menu } from "@headlessui/react";
import MobileMenu from "./mobileMenu";


const Header = () => {
  return (
<header className="absolute inset-x-0 top-0 z-50 text-black flex lg:grid px-12">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <strong>ShopClips</strong>
              </a>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
            <a href="/about" className="text-sm leading-6 ">About</a>
              <a href="#features" className="text-sm leading-6 ">Features</a>
              <a href="#pricing" className="text-sm leading-6">Pricing</a>
              <a href="#reviews" className="text-sm leading-6 ">Reviews</a>
              <a href="/blog" className="text-sm leading-6 ">Blog</a>
              <a href="/contact" className="text-sm leading-6 ">Contact</a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center text-[16px] font-semibold gap-4">
              <button className="bg-white py-2 px-4 rounded-lg text-black">Login</button>
              <button className="bg-indigo-500 py-2 px-4 rounded-lg text-white">Sign Up</button>
            </div>
          </nav>
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <MobileMenu />
            </div>
        </header>
  );
};

export default Header;
