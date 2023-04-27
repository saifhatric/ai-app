import React from 'react';
import { ArrowRightIcon, } from '@heroicons/react/24/outline'
import { FeaturesData } from "./utils";

const Features = () => {
    return (
        <div className=" 0 py-10 bg-primary">
            <div className="flex flex-col items-center justify-center space-y-4">
                <p className="text-center text-xl font-poppins leading-normal text-purple-700">
                    Our capabilities
                </p>
                <p className="w-[80%] text-center text-[2rem] font-poppins leading-12 text-dimWhite">
                    We’re Here Every Step Of The Way
                </p>
                <p className="w-3/4 text-center text-xl leading-loose text-gray-600">
                    Strike a Balance Between Great Design
                    and Functional Development.
                </p>
            </div>
            <div className="grid w-full sm:grid-cols-3 ">
                {FeaturesData.map((item, index) => (
                    <div
                        key={index}
                        className="my-12  px-8  "
                    >
                        <div key={item.title} className="mb-8 space-y-5 text-dimBlue">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full border-8 border-gray-700 bg-yellow-400 p-3">
                                {<item.image className="text-primary" />}
                            </div>
                            <div className="flex w-full flex-col space-y-2">
                                <p className="w-full text-xl font-poppins text-gray-200">{item.title}</p>
                                <p className="w-full text-base leading-normal text-gray-600">
                                    {item.description}
                                </p>
                            </div>

                            <a href={item.link} className="flex items-center space-x-2">
                                <p className="text-base font-poppins leading-normal text-purple-700">
                                    Learn more
                                </p>
                                <ArrowRightIcon className="h-4 w-4 rounded-lg stroke-2 text-purple-700" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Features