
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai"
import { BsFillTelephoneForwardFill } from "react-icons/bs"
import { MdAttachMoney } from "react-icons/md"
import { images } from "../assets"
import PropTypes from 'prop-types';

const Sidebar = (setClick) => {
    return (
        <aside className="bg-primary  flex flex-col items-center w-14 top-[11%]
        right-[0%] py-8 overflow-hidden  border-l border-gray-700 fixed ">
            <nav className="flex flex-col items-center flex-1 space-y-6">


                <Link to="/"
                    onClick={() => setClick(false)}
                    className="p-1.5 text-gray-700 focus:outline-none transition-colors duration-200 rounded-lg hover:bg-gray-200"
                >

                    <AiFillHome className="w-6 h-6" />
                </Link >


                <Link to={"api/pricing"}
                    onClick={() => setClick(false)}

                    className="p-1.5 text-gray-700 focus:outline-none transition-colors duration-200 rounded-lg  hover:bg-gray-200"
                >


                    <MdAttachMoney className="w-6 h-6" />
                </Link >

                <Link to="api/contact"
                    onClick={() => setClick(false)}
                    className="p-1.5 text-gray-700 focus:outline-none transition-colors duration-200 rounded-lg  hover:bg-gray-200"
                >
                    <BsFillTelephoneForwardFill className="w-6 h-6" />
                </Link >

            </nav>

            <div className="flex flex-col mt-4 items-center ">
                <Link to="api/summarize-text"
                    onClick={() => setClick(false)}

                    className="p-1.5 text-gray-700 focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-200 dark:bg-gray-800 bg-gray-100"
                >

                    <img src={images} className="h-6 w-6 rounded-full object-contain" alt="ai-photo" />
                </Link>

                <div>
                    <img
                        className="object-cover w-8 h-8 rounded-full mt-4"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                        alt="User avatar"
                    />
                </div>
            </div>
        </aside >
    );
};
Sidebar.PropTypes = {
    setClick: PropTypes.bool
}
export default Sidebar
