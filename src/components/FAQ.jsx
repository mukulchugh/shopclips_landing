import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import React,{ Fragment } from 'react'


const data = [
  {
    question: 'Why Video?',
    answer: 'Humans naturally relate to videos 10x more than text and some basic photos. Not only do videos grab attention, they keep it. Because they can combine movement, sound, and text, videos can pack a lot of information into a smaller package.'
  },
  {
    question: 'Will this have an impact on the load time of the website?',
    answer: 'Nope. As the videos are loaded on demand when the user clicks on the video. The videos are served via the CDNs (Content Delivery Networks) which doesn’t impact the website loading time at all.'
  },
  {
    question: 'How much increase in the conversion can I expect after integrating Shopclips plugin?',
    answer: 'Shoppable Short Clips have a conversion rate upto 10-15%. At some places, the conversions has increased from 1.8% to whopping 21%!!! More than 10x growth! So it is possible! It’s just we have to keep trying until we make it!'
  },
  {
    question: 'I don’t get much traffic on my online store. Should I integrate shoppable videos?',
    answer: 'Yes, definitely. Video shopping helps in increasing the user engagement and retention. We recommend you to start integrating shoppable videos as early as possible.'
  },

]

const FAQ = () => {
    const transitionClass = {
      enter: 'transition ease-out duration-200',
      enterFrom: 'opacity-0 translate-y-1',
      enterTo: 'opacity-100 translate-y-0',
      leave: 'transition ease-in duration-150',
      leaveFrom: 'opacity-100 translate-y-0',
      leaveTo: 'opacity-0 translate-y-1',
    };
  return (
<section className="relative pt-24 pb-28 bg-blueGray-50 overflow-hidden" id="faqs">
          <div className="relative z-10 container px-4 mx-auto">
            <div className="md:max-w-4xl mx-auto">
              <p className="mb-2 md:mb-7 text-sm text-indigo-600 text-center font-semibold uppercase tracking-px">Have any questions?</p>
              <h2 className="mb-6 md:mb-16 text-xl md:text-8xl xl:text-3xl text-center font-bold font-heading tracking-px-n leading-none">Frequently Asked Questions</h2>
              <div className="mb-11 flex flex-wrap -m-1">
               {data.map((item, index) => (
                    <Disclosure as="div" className="mx-auto w-full rounded-2xl bg-white p-2" key={index}>
          {({ open }) => (
            <div className={`${open ? 'border-indigo-600 hover:border-indigo-600' : ''} hover:border-gray-300 cursor-pointer py-4 px-4 bg-white bg-opacity-60 border-2 rounded-2xl shadow-10xl`}>
              <Disclosure.Button className="flex w-full justify-between rounded-lg font-semibold md:px-4 md:py-2 text-left text-xs md:text-lg  text-black  focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                <span>{item.question}</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform text-indigo-600' : ''
                  } h-5 w-5 text-gray-400`}
                />
              </Disclosure.Button>
              <Transition
          as={Fragment}
         {...transitionClass}
        >
              <Disclosure.Panel className="md:px-4 pt-2 pb-2 text-xs md:text-base text-gray-700 font-medium">
              {item.answer}
              </Disclosure.Panel>
              </Transition>
            </div>)}
            </Disclosure>
                ))}
              </div>
              </div>
              <p className="text-gray-600 text-center font-medium">
                <span>Still have any questions? </span>
                <a className="font-semibold text-indigo-600 hover:text-indigo-700" href="/contact">Contact us</a>
              </p>
            </div>

        </section>
  )
}

export default FAQ;
