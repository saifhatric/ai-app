import { images2 } from "../assets/index"

const Footer = () => {
    const year = new Date()
    return (
        <section className='bg-primary border-t border-t-gray-500 flex '>
            <footer className="container mx-auto py-10 px-10 ">
                <div className="flex flex-col md:flex-row justify-center items-center ">
                    <div >
                        <img src={images2} className="w-16 rounded-2xl " alt="summrizer" />
                    </div>
                    <div className="mt-4 grow md:mt-0 md:ml-12">
                        <p className="text-base font-poppins text-gray-500"> Copyright &copy;{year.getFullYear()} Summiz Company.</p>
                    </div>
                    <div className="mt-4 grow md:mt-0 md:ml-12">
                        <p className="text-base font-poppins text-secondary">Devloped_By Saif Benzamit.</p>
                    </div>
                </div>
                <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
                    <div className="mb-8 lg:mb-0">
                        <p className="mb-6 text-lg font-poppins text-dimWhite">Company</p>
                        <ul className="flex flex-col space-y-4 text-[14px] font-poppins text-gray-500 dark:text-gray-400">
                            <li className="hover:text-purple-700 cursor-pointer">Our Team</li>
                            <li className="hover:text-purple-700 cursor-pointer">Our Vision</li>
                            <li className="hover:text-purple-700 cursor-pointer">Press Release</li>
                        </ul>
                    </div>


                    <div className="mb-8 lg:mb-0">
                        <p className="mb-6 text-lg font-poppins text-dimWhite">Legal</p>
                        <ul className="flex flex-col space-y-4 text-[14px] font-poppins text-gray-500 dark:text-gray-400">
                            <li className="hover:text-purple-700 cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-purple-700 cursor-pointer">Terms of Service</li>
                            <li className="hover:text-purple-700 cursor-pointer">Cookie Policy</li>

                        </ul>
                    </div>
                    <div className="mb-8 lg:mb-0">
                        <p className="mb-6 text-lg font-poppins text-dimWhite">Social Links</p>
                        <ul className="flex flex-col space-y-4 text-[14px] font-poppins text-gray-500 dark:text-gray-400">
                            <li className='hover:text-purple-700 cursor-pointer'>Twitter</li>
                            <li className='hover:text-purple-700 cursor-pointer'>Instagram</li>
                            <li className='hover:text-purple-700 cursor-pointer'>Linkedin</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer