

const Testimonial = () => {
    return (
        <section className="container mx-auto px-10 md:px-0 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Array.from({ length: 2 }).map((_, index) => (
                    <div
                        key={index}
                        className="flex flex-col shadow-md shadow-indigo-500/50 rounded-md border border-indigo-500/50"
                    >
                        <div className="flex flex-col justify-between flex-1 p-8">
                            <div className="flex space-x-2 mb-4">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-6 h-6 text-yellow-500"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                ))}
                            </div>
                            <div className="flex-1 pt-2">
                                <blockquote>
                                    <p className="text-lg text-dimWhite">
                                        “Finally, I&apos;ve found a template that covers all bases
                                        for a bootstrapped startup. We were able to launch in days,
                                        not months.”
                                    </p>
                                </blockquote>
                            </div>

                            <div className="mt-8 pt-4 border-t border-gray-300 dark:border-gray-800">
                                <div className="flex items-center">
                                    <img
                                        className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                                        alt=""
                                    />
                                    <div className="min-w-0 ml-3">
                                        <p className="text-base font-poppins text-gray-800 dark:text-gray-200 truncate">
                                            Theresa Webb
                                        </p>
                                        <p className="text-base text-gray-500 truncate">
                                            Web Designer
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonial;