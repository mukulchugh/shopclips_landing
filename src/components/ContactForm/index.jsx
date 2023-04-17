import React, { useState, Fragment, useEffect} from "react";
import { Combobox, Switch, Transition } from "@headlessui/react";
import { COUNTRIES } from "./countries";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";

function ContactForm() {
    const [selected, setSelected] = useState({title: 'India', value: 'IN'});
    const [query, setQuery] = useState('');
    const [agreed, setAgreed] = useState(false)
    const [dialCode , setDialCode] = useState('+91')

    console.log(selected);

    useEffect(() => {
      const country = COUNTRIES.find((country) => country.value === selected.value)
      setDialCode(country.dial_code)
    }, [selected])


    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }

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
      <section className="h-auto py-32 w-full overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Join our Waitlist
          </h2>
          <p className="text-gray-600 text-center ">
          Welcome to the world of video commerce! The inevitable future of online shopping! {<br/>}
          Hehe! And yes, using Shopclips is indeed as fun as it sounds!
          </p>
                <div className="flex justify-center items-center">
                    {/* <form className="" action="https://api.web3forms.com/submit" method="POST"> */}
                    <form className="w-full p-0 m-0" action="https://public.herotofu.com/v1/59f91c00-dc47-11ed-ab6b-17ab4aa044e2" method="post" acceptCharset="UTF-8">
                    <input type="hidden" name="access_key" value="523c5f1e-cc1c-418d-9ef5-13b50626245b" />
                    <div className="md:flex items-center mt-12 justify-between">
                        <div className="w-full flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Full Name*</label>
                            <input required  aria-label="Please input name" type="text" name="Full Name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="John Doe"  />
                        </div>
                        <div className="w-full flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Email Address*</label>
                            <input required aria-label="Please input email address" type="email" name="Email" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="john@doe.com" />
                        </div>
                    </div>
                    <div className="md:flex  items-center mt-8 justify-center">
                        <div className="w-full flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Company name*</label>
                            <input required  aria-label="Please input company name" type="text" name="Company" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " placeholder="ACME,Inc." />
                        </div>
                        <div className="w-full flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Website</label>
                            <input aria-label="Please input website" type="url" name="Website" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " placeholder="ACME.com" />
                        </div>
                    </div>
                    <div className="md:flex items-center mt-8 justify-center">
                        
                          <div className="flex flex-col ">
                            <label className="text-base font-semibold leading-none text-gray-800">Country</label>
                            <div className="w-full">
      <Combobox value={selected} onChange={(v) => {
        setSelected(v)
      }}>
        <div className="relative mt-1">
        <div className="text-base w-full flex p-0 items-center justify-between leading-none text-gray-900 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100">
        {selected ?  <img
              alt={`${selected.value}`}
              src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${selected.value}.svg`}
              className={"inline h-5 ml-4 rounded-sm border-[1px] border-black p-0 mx-4 w-auto shadow-lg shadow-slate-300"}
            /> : <span className="bg-black inline h-4 ml-6 w-6 rounded-sm p-0 m-0"></span>}
        <Combobox.Input
              name="Country"
              type="text"
              className="m-0 bg-transparent border-none mr-16 py-[0.8rem] px-2"
              displayValue={(country) => country.title}
              onChange={(event) => setQuery(event.target.value)}
              tabIndex={0} 
              aria-label="Please input country name"  
              placeholder="e.g. India"
            />
           <Combobox.Button>
              <ChevronUpDownIcon
                className="h-6 w-auto text-gray-400 mr-12"
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
                        <div className="w-full flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Phone Number</label>
                          <span className="flex items-center gap-2">
                              <input aria-label="Please input country code" type="text" name="Country Code" value={dialCode} readOnly className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 md:w-1/5 w-18" placeholder={setDialCode} />
                            <input aria-label="Please input phone number" type="number" name="Number" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 w-full" placeholder="7888955543" />
                          </span>
                        </div>
                      
                    </div>
                    <div>
                        <div className="w-full flex flex-col mt-8 justify-center">
                            <label className="text-base font-semibold leading-none text-gray-800 flex justify-start">Any Message?</label>
                            <textarea aria-label="leave a message" name="Message" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
                        </div>
                    </div>

                   
    <input type="hidden" name="subject" value="ShopClips Contact Form Submission"/>
    <input type="hidden" name="replyto" value="contact@shopsclip.live"/>
                    <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2 mt-4">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              agree to our terms of service, privacy policy and how we use data as stated
              .
            </Switch.Label>
          </Switch.Group>
                    <div className="flex items-center justify-center w-full">
                        <button className="w-full mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">SUBMIT</button>
                    </div>
                    <input type="hidden" name="redirect" value="/success" />
                </form>
                </div>
            </div>
            </section>  
    );
}

export default ContactForm;
