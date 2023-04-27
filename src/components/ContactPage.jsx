import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'


const ContactPage = () => {


    return (
        <div className="bg-primary">

            {/* main */}
            <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                <div className="grid items-center justify-items-center gap-x-4 gap-y-10 px-8  lg:grid-cols-2">
                    {/* contact from */}
                    <div className="flex  items-center justify-center ">
                        <div className="space-y-5 px-12">
                            <p className="text-4xl font-poppins leading-10 text-blue-900 text-center" >Get in touch</p>
                            <p className="text-xl leading-loose text-center text-dimWhite">
                                Our friendly team would love to hear from you.
                            </p>
                            <div className="grid w-full gap-x-4  gap-y-4 lg:grid-cols-2">
                                <div className="grid w-full  items-center gap-1.5">
                                    <label
                                        className="text-sm font-poppins leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="first_name"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 placeholder:text-gray-500 focus:outline-none  text-dimWhite"
                                        type="text"
                                        id="first_name"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="grid w-full  items-center gap-1.5">
                                    <label
                                        className="text-sm font-poppins leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="last_name"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-500 focus:outline-none  text-dimWhite"
                                        type="text"
                                        id="last_name"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                            <div className="grid w-full  items-center gap-1.5">
                                <label
                                    className="text-sm font-poppins leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-500 focus:outline-none  text-dimWhite"
                                    type="text"
                                    id="email"
                                    placeholder="Email"
                                />
                            </div>

                            <div className="grid w-full  items-center gap-1.5">
                                <label
                                    className="text-sm font-poppins leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea
                                    className="flex h-16 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-500 focus:outline-none  text-dimWhite"
                                    id="message"
                                    placeholder="Leave us a message"
                                    cols={3}
                                />
                            </div>
                            <button className="w-full rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-poppins leading-7 text-white  hover:text-gray-400 ">
                                Send message
                            </button>
                        </div>
                    </div>
                    <img
                        alt="Contact us"
                        className="hidden max-h-full w-full rounded-xl object-cover lg:block"
                        src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=800&q=80"
                    />
                </div>
                {/*  */}
            </div>
        </div>
    )
}

export default ContactPage
