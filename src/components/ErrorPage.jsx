import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <section className='w-full h-full bg-primary font-poppins'>
            <div className="container flex flex-col lg:flex-row px-8 py-12 mx-auto ">
                <div className="flex flex-col justify-center">
                    <div>

                        <h1 className="my-6 text-3xl font-semibold text-indigo-500  md:text-3xl ">
                            We can&apos;t find that page
                        </h1>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">
                            Sorry, the page you are looking for doesn&apos;t exist or has been
                            moved.
                        </p>

                        <div className="flex items-center mt-6 gap-x-3 ">
                            <button className="inline-flex items-center rounded-md border border-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-black dark:text-white">
                                <span className="w-4 h-4 mr-2 text-dimWhite" >←</span>
                                <span className='text-gray-500'> Take me Back</span>
                            </button>

                            <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500 justify-center">
                                <Link to={"/"}> Go Home</Link>
                            </button>
                        </div>
                    </div>
                    <div className="mt-10 space-y-6">
                        <div>
                            <a
                                href="#"
                                className="inline-flex items-center text-sm text-indigo-500 gap-x-2 dark:text-indigo-400 hover:underline"
                            >
                                <span>Documentation</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 rtl:rotate-180"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </a>

                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Dive in to learn all about our product.
                            </p>
                        </div>

                        <div>
                            <a
                                href="#"
                                className="inline-flex items-center text-sm text-indigo-500 gap-x-2 dark:text-indigo-400 hover:underline"
                            >
                                <span>Our blog</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 rtl:rotate-180"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </a>

                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Read the latest posts on our blog.
                            </p>
                        </div>

                        <div>
                            <a
                                href="#"
                                className="inline-flex items-center text-sm text-indigo-500 gap-x-2 dark:text-indigo-400 hover:underline"
                            >
                                <span>Chat to support</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 rtl:rotate-180"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </a>

                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Our friendly team is here to help.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <img
                        src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NDA0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                        alt="404"
                        className="object-cover h-full w-full rounded-md"
                    />
                </div>
            </div>
        </section>
    );
};



export default ErrorPage;