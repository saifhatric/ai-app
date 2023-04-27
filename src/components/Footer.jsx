import React from 'react'

const Footer = () => {
    return (
        <section className='bg-primary border-t border-t-gray-500'>
            <footer className="container mx-auto py-10 px-10 ">
                <div className="flex flex-col md:flex-row justify-center items-center ">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#4F46E5"
                            className="h-10 w-10"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                                clipRule="evenodd"
                            />
                            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                        </svg>
                    </div>
                    <div className="mt-4 grow md:mt-0 md:ml-12">
                        <p className="text-base font-poppins text-gray-500">© 2023 DevUI Component Library</p>
                    </div>
                </div>
                <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
                    <div className="mb-8 lg:mb-0">
                        <p className="mb-6 text-lg font-poppins text-dimWhite">Company</p>
                        <ul className="flex flex-col space-y-4 text-[14px] font-poppins text-gray-500 dark:text-gray-400">
                            <li className="hover:text-purple-700 cursor-pointer">About us</li>
                            <li className="hover:text-purple-700 cursor-pointer">Company History</li>
                            <li className="hover:text-purple-700 cursor-pointer">Our Team</li>
                            <li className="hover:text-purple-700 cursor-pointer">Our Vision</li>
                            <li className="hover:text-purple-700 cursor-pointer">Press Release</li>
                        </ul>
                    </div>
                    <div className="mb-8 lg:mb-0">
                        <p className="mb-6 text-lg font-poppins text-dimWhite">Our Stores</p>
                        <ul className="flex flex-col space-y-4 text-[14px] font-poppins text-gray-500 dark:text-gray-400">
                            <li className="hover:text-purple-700 cursor-pointer">Washington</li>
                            <li className="hover:text-purple-700 cursor-pointer">New Hampshire</li>
                            <li className="hover:text-purple-700 cursor-pointer">Maine</li>
                            <li className="hover:text-purple-700 cursor-pointer">Texas</li>
                            <li className="hover:text-purple-700 cursor-pointer">Indiana</li>
                        </ul>
                    </div>

                    <div className="mb-8 lg:mb-0">
                        <p className="mb-6 text-lg font-poppins text-dimWhite">Legal</p>
                        <ul className="flex flex-col space-y-4 text-[14px] font-poppins text-gray-500 dark:text-gray-400">
                            <li className="hover:text-purple-700 cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-purple-700 cursor-pointer">Terms of Service</li>
                            <li className="hover:text-purple-700 cursor-pointer">Cookie Policy</li>
                            <li className="hover:text-purple-700 cursor-pointer">Disclaimer</li>
                            <li className="hover:text-purple-700 cursor-pointer">Media Policy</li>
                        </ul>
                    </div>
                    <div className="mb-8 lg:mb-0">
                        <p className="mb-6 text-lg font-poppins text-dimWhite">Social Links</p>
                        <ul className="flex flex-col space-y-4 text-[14px] font-poppins text-gray-500 dark:text-gray-400">
                            <li className='hover:text-purple-700 cursor-pointer'>Facebook</li>
                            <li className='hover:text-purple-700 cursor-pointer'>Twitter</li>
                            <li className='hover:text-purple-700 cursor-pointer'>Instagram</li>
                            <li className='hover:text-purple-700 cursor-pointer'>Linkedin</li>
                            <li className='hover:text-purple-700 cursor-pointer'>YouTube</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer