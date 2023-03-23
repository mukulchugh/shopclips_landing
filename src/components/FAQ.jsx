import React, {Fragment} from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'


const data = [
  {
    question: 'What is the best way to contact you?',
    answer: 'You can contact us via email at or via phone at 1-800-555-5555.'
  },
  {
    question: 'How long does it take to get a response?',
    answer: 'We try to respond to all emails within 24 hours.'
  },
  {
    question: 'How do I know if you received my email?',
    answer: 'We will send you an email to confirm that we received your message.'
  },
  {
    question: 'How do I know if you received my email?',
    answer: 'We will send you an email to confirm that we received your message.'
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
<section className="relative pt-24 pb-28 bg-blueGray-50 overflow-hidden">
          <div className="relative z-10 container px-4 mx-auto">
            <div className="md:max-w-4xl mx-auto">
              <p className="mb-7 text-sm text-indigo-600 text-center font-semibold uppercase tracking-px">Have any questions?</p>
              <h2 className="mb-16 text-6xl md:text-8xl xl:text-3xl text-center font-bold font-heading tracking-px-n leading-none">Frequently Asked Questions</h2>
              <div className="mb-11 flex flex-wrap -m-1">
               {data.map((item, index) => (
                    <Disclosure as="div" className="mx-auto w-full rounded-2xl bg-white p-2" key={index}>
          {({ open }) => (
            <div className={`${open ? 'border-indigo-600 hover:border-indigo-600' : ''} hover:border-gray-300 cursor-pointer py-4 px-4 bg-white bg-opacity-60 border-2  rounded-2xl shadow-10xl`}>
              <Disclosure.Button className="flex w-full justify-between rounded-lg font-semibold px-4 py-2 text-left text-lg  text-black  focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
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
              <Disclosure.Panel className="px-4 pt-2 pb-2 text-md text-gray-700 font-medium">
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
                <a className="font-semibold text-indigo-600 hover:text-indigo-700" href="#">Contact us</a>
              </p>
            </div>

        </section>
  )
}

export default FAQ;