import React from "react";

const Cta = () => {
    return (
        <section className="container px-10 md:px-0 py-10 mx-auto">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-dimWhite sm:text-4xl lg:text-5xl">
                        Get full access to Platform
                    </h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        nesciunt eos facilis debitis voluptas iure consectetur odit fugit
                        voluptate recusandae?
                    </p>
                </div>

                <form action="#" method="POST" className="max-w-xl mx-auto mt-12">
                    <div className="flex flex-col items-center sm:flex-row sm:justify-center">
                        <div className="flex w-full max-w-sm items-center space-x-2">
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                type="email"
                                placeholder="Email"
                            />
                            <button className="active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-poppins transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:ring-offset-1 dark:hover:bg-indigo-700 dark:hover:text-gray-100 disabled:opacity-50 dark:focus:ring-indigo-400 disabled:pointer-events-none dark:focus:ring-offset-gray-900 bg-indigo-600 dark:bg-indigo-600 text-white hover:bg-indigo-700 h-10 py-2 px-4">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </form>

                <div className="flex items-center justify-center px-8 mt-8 sm:px-0">
                    <svg
                        className="flex-shrink-0 w-5 h-5 text-gray-600 dark:text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                    </svg>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                        {" "}
                        Your data is complely secured with us. We don&apos;t share with
                        anyone.{" "}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Cta;
