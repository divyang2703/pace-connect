import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import icon from "../assets/icon-4399701_1920.png";

// import Swiper core and required modules
import { Grid, Pagination, Navigation, Autoplay } from "swiper/modules";

const Team = () => {
  return (
    <div className="justify-center py-2 px-6 mx-auto w-full" id="team">
      <h1 className="flex justify-center font-semibold text-2xl">Our Team</h1>
      <Swiper
        className="carousel flex justify-center border border-white rounded-3xl"
        sspaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation, Grid]}
      >
        <div className="swiper-wrapper">
          <SwiperSlide>
            <div className="w-full py-16 px-4 ">
              <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[400px] mx-auto my-4 " src={icon} alt="/" />
                <div>
                  <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold pt-8">
                    Aman Khan
                  </h1>
                  <p className="text-[#0098b0] font-bold">
                    Founder, Graphic Designing and Sales & Marketing Head
                  </p>
                  <p>
                    I'm Aman Khan, the driving force behind Pace Connect,
                    serving as the head of Graphic Designing and Sales &
                    Marketing. With expertise in both creative design and
                    strategic marketing, I'm dedicated to helping you achieve
                    your goals. let's bring your vision to life. Get in Touch
                    with me at
                  </p>
                  <div className="py-6">
                    <Link to="https://shorturl.at/hjlFN" target="_blank">
                      <FaFacebookSquare
                        size={25}
                        className="inline-block mx-2"
                      />
                    </Link>
                    <Link
                      to="https://www.instagram.com/k_aman_10/"
                      target="_blank"
                    >
                      <FaInstagram size={25} className="inline-block mx-2" />
                    </Link>
                    <Link
                      to="https://www.linkedin.com/in/aman-khan-22b5bb1a4"
                      target="_blank"
                    >
                      <FaLinkedin size={25} className="inline-block mx-2" />
                    </Link>
                    <FaXTwitter size={25} className="inline-block mx-2" />
                    <Link to="https://shorturl.at/cwACV" target="_blank">
                      <BiLogoGmail size={25} className="inline-block mx-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full py-16 px-4">
              <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[400px] mx-auto my-4 " src={icon} alt="/" />
                <div>
                  <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold pt-8">
                    Vishwesh Sharma
                  </h1>
                  <p className="text-[#0098b0] font-bold">
                    Founder, verification manager , social media manager
                    ,Advertising manager
                  </p>
                  <p>
                    Greetings, I am Vishwesh Sharma, the founder of Pace
                    Connect. My educational background includes a Bachelor's
                    degree in Mass Media with a specialization in Journalism, as
                    well as a Master's degree in Sports Management. Within Pace
                    Connect, I assume responsibility for overseeing all aspects
                    of our social media presence. Additionally, I am actively
                    engaged in the advertising domain, where I provide valuable
                    assistance to businesses seeking to enhance their growth on
                    various social media platforms.
                  </p>
                  <div className="py-6">
                    <Link
                      to="https://www.instagram.com/_vishwesh_sharma/"
                      target="_blank"
                    >
                      <FaInstagram size={25} className="inline-block mx-2" />
                    </Link>
                    <Link
                      to="https://www.linkedin.com/in/vishwesh-sharma"
                      target="_blank"
                    >
                      <FaLinkedin size={25} className="inline-block mx-2" />
                    </Link>
                    <Link to="https://shorturl.at/cwACV" target="_blank">
                      <BiLogoGmail size={25} className="inline-block mx-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Team;
