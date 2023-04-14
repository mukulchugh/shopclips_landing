import { ArrowRightIcon } from "@heroicons/react/20/solid";
import React from "react";
import heroImg from "../images/hero_img.png";

const Email = () => {
        return (  
<div>  
  <div className="mx-auto max-w-screen-lg  py-12 md:py-32 sm:py-48 lg:py-32">
              <div className="mt-10 flex items-center justify-center gap-x-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 ">Email address</label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                  </div>
                  <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 " placeholder="Enter your email" type="email" id="email" required />
                </div>
                <div>
                  <button type="submit" className="flex items-center py-3 px-5 w-full justify-center text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-indigo-500 border-indigo-500 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 whitespace-nowrap">Get Started <ArrowRightIcon 
                    className="w-5 h-5 ml-2"/> </button>
                </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
            </form>
          </div>
              </div>
            </div>
          </div>
        );
    }
  
export default Email;
