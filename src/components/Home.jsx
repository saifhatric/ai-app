import React from "react";
import { Companies } from "./utils";

import Cta from "./Cta";
import Features from "./Features";
import Testimonial from "./Testimonials";

const Home = () => {
    return (
        <div className="bg-primary w-full  ">

            <div className="  grid sm:grid-cols-2 w-full overflow-hidden">
                <div className="px-4 md:px-8 ">
                    <div className="text-5xl md:text-7xl text-gray-800 text-center mt-8 font-poppins ">
                        <h1 className="mb-2">Building digital</h1>

                        <h1 className="text-violet-600">experience</h1>
                    </div>
                    <div className="mt-4">
                        <p className="text-gray-700 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, adipisci beatae alias optio voluptatibus quis. Sint vel, cum ratione explicabo sed distinctio doloribus aliquid alias, harum suscipit fugiat esse quas.
                        </p>
                    </div>
                    <div className="mt-4 flex items-center space-x-4">
                        <input
                            type="text"
                            className="bg-white rounded h-full py-2.5 w-[75%] border border-gray-400/50 px-2"
                            placeholder="Enter you email"
                        />
                        <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-poppins text-white">
                            Submit
                        </button>
                    </div>
                </div>

                <div className=" mt-8 overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                        alt="image"
                        className="h-full w-[100%] rounded-[2rem] object-contain md:w-[500px] sm:ml-[8rem]"
                    />
                </div>
            </div>
            <div className="md:mt-[10rem] mt-10 flex flex-col items-center  justify-center space-y-8">
                <p className="text-center text-lg font-poppins leading-normal text-purple-500">
                    We’ve worked wit some great company
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 ">
                    {Companies.map((e) => (
                        <img src={e.img} alt={e.brand} key={e.brand} className="h-10 mb-6 " />
                    ))}
                </div>
            </div>
            {/* testimonials */}
            <div className="flex flex-col items-center justify-center border-y border-gray-300 py-10 bg-primary ">
                <Testimonial />
            </div>

            <Features />

            <Cta />
        </div>
    );
};

export default Home;



