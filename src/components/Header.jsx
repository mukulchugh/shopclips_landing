import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import MobileMenu from "./MobileMenu";
import shopclips_logo from "../images/shopclips_logo_tr.png";
// import MobileMenu from "./mobileMenu";


const data = [
  // {
  //   name: "About",
  //   link: "about",
  // },
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
  // {
  //   name: "Contact",
  //   link: "contact",
  // },
  // {
  //   name: "Blog",
  //   link: "blog",
  // }
];



const Header = ({location}) => {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  


  return (
  <header className={`fixed w-full z-30 inset-x-0 md:bg-opacity-90 transition lg:grid lg:px-12 px-4 duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-md h-min'}`}>
   <nav className="flex items-center justify-between md:p-4 lg:px-8" aria-label="Global">
       <div className="flex lg:flex-1">         
       <div className="flex items-center justify-between w-full lg:w-auto">
        <div className="flex justify-between gap-36 w-full mt-2 items-center">
          <div>
          <a href="/" className="flex items-center">
            <img
              className="h-auto w-20 m-0 -mr-4 p-0"
              src={shopclips_logo}
              alt="ShopClips Logo"
            />
            <span className="ml-2 text-xl font-bold tracking-tight text-black sm:text-2xl">
              ShopClips
            </span>
          </a>
          </div>
          <div className="lg:hidden">
          <MobileMenu />
        </div>
        </div>
        
      </div>
           </div>
           <div className="hidden lg:flex lg:gap-x-12">
           {data.map((item, index) => (
             <Link
               key={index}
               to={location?.pathname === '/' ? item.link : `${item.link}`}
               className='text-base font-medium text-gray-900 leading-6 hover:text-gray-700'
             >
               {item.name}
             </Link>
           ))}
             </div>
             <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center text-[16px] font-semibold gap-4">
               {/* <Link to="/" className="py-2 px-4 rounded-lg text-black">Login</Link> */}
               <Link to="/" className="bg-indigo-500 py-2 px-4 rounded-lg text-white">Join Waitlist</Link>
               </div>
               </nav>
          
 </header>
   );
 };

 export default Header;
