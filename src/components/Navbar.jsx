import { useState } from 'react'
import { navLinks } from './utils';
import { Link } from 'react-router-dom'
import { images2, close, menu, } from '../assets';
import Sidebar from './SideBar';
const Navbar = () => {
    const [click, setClick] = useState(false)
    return (
        <div >
            <nav className=" w-full fixed top-0 bg-black  px-8 py-5  md:py-4 flex justify-between items-center border-y border-gray-500  ">
                <div
                    className="text-3xl font-bold leading-none flex items-center space-x-4"

                >
                    <Link to={"/"} >
                        <div >
                            <img src={images2} className="w-16 rounded-2xl object-contain " alt="summrizer" />
                        </div>
                    </Link>

                </div>
                <div className="lg:hidden">
                    <button
                        onClick={() => setClick(!click)}
                        className="navbar-burger flex items-center fixed 
                        right-[1%] top-[1%]
                        text-gray-300 py-5 mr-2 sm:hidden">
                        <img src={click ? close : menu} className="w-[1.75rem] mr-2 "></img>

                    </button>
                </div>
                {click ? (
                    // <div className=''>
                    //     <ul className=" flex flex-row items-center grow mx-10 space-x-6">
                    //         {navLinks.map((link, index) => (

                    //             <li key={index} className='className="text-sm text-gray-400
                    //     hover:text-gray-600 "' >
                    //                 <Link to={link.adrress} onClick={() => setClick(false)}>
                    //                     {link.name}
                    //                 </Link>
                    //             </li>
                    //         ))}
                    //     </ul>
                    // </div>
                    <Sidebar setClick={setClick} />
                )
                    : ""}
                <ul className="hidden sm:flex sm:items-center grow mx-10 space-x-6">
                    {navLinks.map((link, index) => (

                        <li key={index} className='className="text-sm text-gray-400 
                        hover:text-gray-600 "' >
                            <Link to={link.adrress}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden sm:block">
                    <div className="flex items-center space-x-2">
                        <img
                            className="inline-block w-12 h-12 rounded-full"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                            alt="John Doe"
                        />
                        <span className="flex flex-col">
                            <span className="text-sm font-poppins  text-gray-200">
                                John Doe
                            </span>
                            <span className="text-sm font-poppins text-gray-500 dark:text-gray-400 cursor-pointer">
                                View Profile
                            </span>
                        </span>
                    </div>
                </div>
            </nav>
        </div >
    );
};


export default Navbar