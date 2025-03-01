import { ArrowRightIcon } from "@heroicons/react/20/solid";
import React, {Fragment, useEffect, useState} from "react";
import heroImg from "../images/hero_img.svg";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Button from "./Button";
import { Dialog, Transition } from '@headlessui/react'


const Hero = ({Heading, Description}) => {
  const [open, setOpen] = useState(false);

  return (
          <>
<Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={setOpen}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block h-[700px] w-[900px] z-50 w-full max-w-xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <iframe
                  src="https://calendly.com/abhinav-shopclips/30min"
                  width="100%"
                  height="100%"
                  title="Schedule a Meeting"
                ></iframe>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
            <section className="overflow-hidden text-black h-auto " id="hero-bg">
                <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
<div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <svg className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-4rem)] sm:h-[50rem]" viewBox="0 0 1155 678">
              <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
              <defs>
                <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9089FC" />
                   <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        <div className="relative isolate px-6 pt-14 lg:px-8">
<div>
  <div className="mx-auto max-w-screen-lg  py-12 md:py-32 sm:py-48 lg:py-34 lg:pb-8">
            <div className="text-center flex flex-col justify-center items-center">
              <h1 className="text-display-[4px] p-0 md:-mb-2 font-bold tracking-tight text-black md:text-display-xl">{Heading}</h1>
              <p className="mt-4 md:text-body-xl md:leading-8 text-gray-400 text-body-xs md:px-24">{Description}</p>
              {/* <div className="mt-10 flex items-center justify-center gap-x-6">
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
              </div> */}
  <div className="mt-10 flex items-center justify-center gap-x-4">
<Button label="Get Started for Free" url={true} link="https://apps.shopify.com/shopclips-shoppable-clips" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"/>
<Button icon={false} onPress={()=> {
  setOpen(true);
}} label="Book a Demo" className="inline-flex items-center justify-center px-5 py-[11.5px] text-base font-medium rounded-md border border-black bg-transparent text-black hover:bg-black hover:text-white
transition-all
duration-900
ease-in-out
"/>



</div>
            </div>
          </div>
          </div>
          {/* <div>
</div> */}
{/* <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
              <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
              <defs>
                <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div> */}
        </div>
<StaticImage placeholder="blurred" layout="fullWidth" src="../images/hero_img.png" alt="hero" className="md:w-full h-auto bg-transparent object-cover p-0 md:my-24 m-0 mb-16 scale-150  md:scale-100" />
    </section>
    </>
        );
    }

export default Hero;




