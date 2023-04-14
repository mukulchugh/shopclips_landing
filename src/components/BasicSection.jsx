import React from 'react'

const BasicSection = ({reverse=false, title, body, features, end}) => {
  return (
    <section className="bg-white" id="how-it-works">
  <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-12 lg:px-6">
    {/* Row */}
    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
      <div className="text-gray-500 sm:text-lg da ">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 ">
        {title}
        </h2>
        <p className="mb-8 font-light lg:text-lg">
          {body}
        </p>
        {/* List */}
        <ul
          role="list"
          className="pt-8 space-y-5 border-t border-gray-200 my-7"
        >
        {features.map((feature, i) => (
              <li key={i} className="flex space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-indigo-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-medium leading-tight text-gray-900 ">
               {feature}
              </span>
            </li>
  
        ))}
        </ul>
        <p className="mb-8 font-light lg:text-lg">
    {end}
        </p>
      </div>
      <img
        className={`${!reverse ? 'order-first' : 'order-last'} hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex`}
        src="https://img.freepik.com/free-vector/preferences-concept-illustration_114360-1384.jpg?w=2000"
        alt="dashboard feature image"
      />
    </div>
    </div>
</section>
  )
}

export default BasicSection