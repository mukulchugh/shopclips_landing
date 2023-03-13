import React, { useState, Fragment, useEffect} from "react";
import { Combobox, Transition } from "@headlessui/react";
import { COUNTRIES } from "./countries";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";

function ContactForm() {
    const [selected, setSelected] = useState('');
    const [query, setQuery] = useState('');

    const filteredCountries =
    query === ''
      ? COUNTRIES
      : COUNTRIES.filter((country) =>
          country.title
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )


    return (
                <div className="flex justify-center items-center">
                    <form className="bg-white shadow rounded py-30 lg:px-28 px-8" action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="523c5f1e-cc1c-418d-9ef5-13b50626245b" />
                    <div className="md:flex items-center mt-12">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Full Name</label>
                            <input required  arial-label="Please input name" type="text" name="Full Name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="John Doe"  />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Email Address</label>
                            <input required arial-label="Please input email address" type="email" name="Email" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="john@doe.com" />
                        </div>
                    </div>
                    <div className="md:flex items-center mt-8">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Company name</label>
                            <input required  arial-label="Please input company name" type="text" name="Company" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " placeholder="ACME,Inc." />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Country</label>
                            <div className="w-72">
      <Combobox value={selected} onChange={(v) => {
        setSelected(v)
      }}>
        <div className="relative mt-1">
        <div className="text-base flex items-center justify-between leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100">
        {selected ?  <img
              alt={`${selected.value}`}
              src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${selected.value}.svg`}
              className={"inline h-4 -mr-6 rounded-sm"}
            /> : <span className="bg-black inline h-4 -mr-6 w-6 rounded-sm p-0 m-0"></span>}
        <Combobox.Input
                name="Country"
                type="text"
              className="p-0 m-0 bg-transparent"
              displayValue={(country) => country.title}
              type="text"
              onChange={(event) => setQuery(event.target.value)}
              tabIndex={0} arial-label="Please input country name" type="name"  placeholder="e.g. India"
            />
           <Combobox.Button >
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>

<Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredCountries.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredCountries.map((country) => (
                  <Combobox.Option
                    key={country.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-4 ${
                        active ? 'bg-teal-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={country}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                              <img
              alt={`${country.value}`}
              src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country.value}.svg`}
              className={"inline mr-2 h-4 rounded-sm"}
            />
                          {country.title}
                        </span>

                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex flex-col mt-8">
                            <label className="text-base font-semibold leading-none text-gray-800">Message</label>
                            <textarea required aria-label="leave a message" name="Message" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
                        </div>
                    </div>

                   
    <input type="hidden" name="subject" value="ShopClips Contact Form Submission"/>

    <input type="hidden" name="replyto" value="contact@shopsclip.live"/>

                    <input type="hidden" name="redirect" value="localhost:8000/success" />
                    <p className="text-xs leading-3 text-gray-600 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                    <div className="flex items-center justify-center w-full">
                        <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">SUBMIT</button>
                    </div>


                </form>
                </div>
    );
}

export default ContactForm;
