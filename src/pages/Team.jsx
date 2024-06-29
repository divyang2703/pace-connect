import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import icon from "../assets/icon-4399701_1920.png";
import team from "../components/Team";

const Team = () => {
  return (
    <div className="justify-center py-2 px-6 mx-auto w-full" id="team">
      <h1 className="flex justify-center font-semibold text-2xl">Our Team</h1>
      <Swiper
        className="carousel flex justify-center border border-white rounded-3xl"
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        <div className="swiper-wrapper">
          {team.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="w-full py-16 px-4">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                  <img className="w-[400px] mx-auto my-4" src={icon} alt="/" />
                  <div>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold pt-8">
                      {member.name}
                    </h1>
                    <p className="text-[#0098b0] font-bold">
                      {member.position}
                    </p>
                    <p>{member.description}</p>
                    <div className="py-6">
                      {member.socials.map((social, idx) => {
                        let IconComponent;
                        switch (social.name) {
                          case "facebook":
                            IconComponent = FaFacebookSquare;
                            break;
                          case "instagram":
                            IconComponent = FaInstagram;
                            break;
                          case "linkedin":
                            IconComponent = FaLinkedin;
                            break;
                          case "Gmail":
                            IconComponent = BiLogoGmail;
                            break;
                          default:
                            IconComponent = null;
                        }
                        if (IconComponent) {
                          return (
                            <Link key={idx} to={social.link} target="_blank">
                              <IconComponent
                                size={25}
                                className="inline-block mx-2"
                              />
                            </Link>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Team;
