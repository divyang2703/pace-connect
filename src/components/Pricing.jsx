import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="w-full py-[20px] px-4 " id="pricing">
      <div>
        <h3 className=" font-bold flex justify-center items-center justify-items-center text-5xl py-4 mt-2 ">
          Our Top Price
        </h3>
      </div>
      <div className="max-w-[1240px] mx-auto py-8 grid md:grid-cols-3 gap-8">
        <div className="w-full  shadow-xl flex flex-col p-4 my-4 rounded-lg lg:hover:scale-105 duration-300 border">
          <h2 className="text-2xl font-bold text-center py-8">Basic Service</h2>
          <p className="text-center text-4xl font-bold">₹5000</p>
          <div className="font-medium py-8">
            
                <ul  className="py-2 border-b mx-8 mt-8">
                    <li>• 20-30 Creatives A Month.</li>
                    <li>• Performance Marketing (Ads).</li>
                    <li>• Email Marketing.</li>
                    <li>• Facebook Group Sharing.</li>
                    <li>• 3500 of ad credit.</li>
                    <li>• Instagram, Facebook, Linkedin, Twitter, google Management.</li>
                </ul>
            
          </div>
          <Link to='https://wa.me/918208320287' target='_blank'>
            <button className="bg-[#0098b0] w-[200px] rounded-md font-medium my-6 mx-16 py-3 text-black">
              Contact Us
            </button>
          </Link>
         
        </div>

        <div className="w-full  shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg lg:hover:scale-105 duration-300 border">
          <h2 className="text-2xl font-bold text-center py-8">
            Best Seller Service
          </h2>
          <p className="text-center text-4xl font-bold">₹10000</p>
          <div className="font-medium">
            
            <ul  className="py-2 border-b mx-8 mt-8">
                    <li>• 20-30 Creatives A Month.</li>
                    <li>• Performance Marketing (Ads).</li>
                    <li>• Medium Profile Influencer Collaboration.</li>
                    <li>• Email Marketing.</li>
                    <li>• Facebook Group Sharing.</li>
                    <li>• Instagram, Facebook, Linkedin, Twitter, google Management.</li>
                </ul>
            
          </div>
          <Link to='https://wa.me/918208320287' target='_blank'>
            <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-16 py-3 text-[#0098b0]">
              Contact Us
            </button>
          </Link>
         
        </div>

        <div className="w-full  shadow-xl flex flex-col p-4 my-4 rounded-lg lg:hover:scale-105 duration-300 border">
          <h2 className="text-2xl font-bold text-center py-8">
            Premium Service
          </h2>
          <p className="text-center text-4xl font-bold">₹15000</p>
          <div className=" font-medium">
            
            <ul  className="py-2 border-b mx-8 mt-8">
                    <li>• 20-30 Creatives A Month.</li>
                    <li>• Performance Marketing (Ads).</li>
                    <li>• High Profile Influencer Collaboration.</li>
                    <li>• Facebook Group Sharing.</li>
                    <li>• 5500 of ad credit.</li>
                    <li>• Instagram, Facebook, Linkedin, Twitter, google Management.</li>
                </ul>
            
          </div>
          <Link to='https://wa.me/918208320287' target='_blank'>
            <button className="bg-[#0098b0] w-[200px] rounded-md font-medium my-6 mx-16 py-3 text-black">
              Contact Us
            </button>
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default Pricing;
