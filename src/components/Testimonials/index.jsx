import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

const Testimonials = () => {

  const data = [
    {

      name: "Judith Black",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Unsplash_wordmark_logo.svg/2560px-Unsplash_wordmark_logo.svg.png",
      designation: "CEO, Company"
    },
    {

      name: "Judith Black",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Unsplash_wordmark_logo.svg/2560px-Unsplash_wordmark_logo.svg.png",
      designation: "CEO, Company"
    
    },
    {
      name: "Judith Black",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Unsplash_wordmark_logo.svg/2560px-Unsplash_wordmark_logo.svg.png",
      designation: "CEO, Company"
    
    },
  ];

  return (
    <section className="relative isolate overflow-hidden text-white py-24 px-6 sm:py-16 lg:px-8 bg-gray-100" id="reviews">
      {/* add title  */}
      <div className="max-w-7xl mx-auto py-4 px-4 sm:py-6 sm:px-6 lg:px-8">
            <div className="lg:text-center">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Customer Feedback</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    What our customers are saying
                </p>
            </div>
        </div>
        <hr />


    <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
       {data.map((item, index) => (
         <SwiperSlide className="mx-auto w-full h-auto py-16" key={index}>
         <img className="mx-auto h-12" src={item.logo} alt="" />
         <figure className="mt-10">
           <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
             <div className="flex w-full justify-center items-center">
              <p className="w-1/2">
              {item.quote}
              </p>
             </div>
           </blockquote>
           <figcaption className="mt-10">
             <img
               className="mx-auto h-10 w-10 rounded-full"
               src={item.image}
               alt=""
             />
             <div className="mt-4 flex items-center justify-center space-x-3 text-base">
               <div className="font-semibold text-gray-900">{item.name}</div>
               <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                 <circle cx={1} cy={1} r={1} />
               </svg>
               <div className="text-gray-600">{item.designation}</div>
             </div>
           </figcaption>
         </figure>
       </SwiperSlide>
          
        ))}
      </Swiper>
  </section>

   
  );
}


export default Testimonials