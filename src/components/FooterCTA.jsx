import { ArrowDownIcon, ArrowRightCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import React from 'react'

const FooterCTA = () => {
  return (
    <section>
        <div className="bg-slate-900">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block text-white">Ready to dive in?</span>
                    <span className="block text-indigo-500">Start your free trial today.</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="ml-3 inline-flex rounded-md shadow">
                        <a href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white">
                            Learn more
                        </a>
                    </div>
                    <div className="inline-flex rounded-md shadow">
                        <a href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600">
                            Get started
                            <ArrowRightIcon
                                className="-mr-1 ml-3 h-5 w-5"
                                aria-hidden="true"
                            />

                        </a>
                    </div>
                  
                </div>
            </div>
        </div>
    </section>
  )
}

export default FooterCTA