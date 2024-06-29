import React from "react";
import { Link } from "react-router-dom";
import price_detils from "../components/Price"; 

const Pricing = () => {
  return (
    <div className="w-full py-20 px-4 bg-black" id="pricing">
      <div>
        <h3 className="font-bold flex justify-center items-center text-3xl md:text-5xl py-4 mt-2 text-white">
          Our Top Price
        </h3>
      </div>
      <div className="max-w-[1240px] mx-auto py-8 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
        {price_detils.map((item, index) => (
          <div
            key={index}
            className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg transition-transform duration-300 border bg-white ${item.title === 'Best Seller Service' ? 'bg-[#426e86]' : ''} lg:hover:scale-105`}
          >
            <h2 className="text-2xl font-bold text-center py-8 text-black">{item.title}</h2>
            <p className="text-center text-4xl font-bold text-black">{item.price}</p>
            <div className="font-medium py-8">
              <ul className="py-2 border-b mx-8 mt-8 text-black">
                {item.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
            <Link to={item.link} target="_blank">
              <button className="bg-[#0098b0] w-full  rounded-md font-medium my-6 mx-auto py-3 text-white">
                Contact Us
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
