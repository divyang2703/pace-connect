import React from "react";
import { Link } from 'react-router-dom';
import { FcServices } from 'react-icons/fc';
import service from "../components/Service";

const Services = () => {
    return (
        <div className="w-full py-10 px-4 ">
            <h1 className='text-4xl flex justify-center items-center mb-8' id="service">
                <FcServices size={40} />
                &nbsp;Services
            </h1>
            <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white'>
                {service.map((item, index) => (
                    <div key={index} className=' p-6 border rounded-xl shadow-xl flex flex-col items-center'>
                        <h6 className='text-2xl font-bold mb-4 text-center'>{item.title}</h6>
                        <img className='w-full h-56 object-contain rounded-lg mb-4' src={item.image} alt={item.title} />
                        <p className='mb-4 text-lg font-semibold text-center'>{item.description}</p>
                        <p className='mb-4 text-center'>{item.details}</p>
                        <ul className='mb-4 list-disc list-inside'>
                            {item.list.map((listItem, listIndex) => (
                                <li key={listIndex} className='py-1'>{listItem}</li>
                            ))}
                        </ul>
                        <Link to={item.link} target='_blank' className="w-full">
                            <button className='bg-[#5be2e6] w-full rounded-md font-medium py-3 text-black hover:bg-[#5be2e6]/90'>
                                Contact us
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
 