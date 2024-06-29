/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Link } from "react-scroll";
import {
  FaFacebookSquare,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";

const Footer = () => {
  return (
    <div className="max-w-full mx-auto py-16 px-4 text-white border-t-black">
      <div className="grid lg:grid-cols-4 gap-8">
        <div>
          <h2 className="w-full text-3xl font-bold text-[#0098b0]">
            Pace Connect.
          </h2>
          <p className="py-2">
            Empower Your Pace with Pace Connect: Ignite Your Social Media Success!
          </p>
          <p>
            Unleash Social Media Success. Expert marketing agency. Elevate your
            brand. Drive growth. Join the social media revolution today!
          </p>
          <div className="flex justify-between md:w-[75%] my-6 ">
            <LinkR
              to="https://www.facebook.com/PaceconnectOffical"
              target="_blank"
            >
              <FaFacebookSquare size={25} />
            </LinkR>
            <LinkR to="https://shorturl.at/mIW35" target="_blank">
              <FaInstagram size={25} />
            </LinkR>
            <LinkR to="https://wa.me/918208320287" target="_blank">
              <FaWhatsapp size={25} />
            </LinkR>
            <LinkR to="tel:918208320287" target="_blank">
              <FaPhoneAlt size={20} />
            </LinkR>
          </div>
        </div>
        <div className="lg:col-span-2 flex flex-col lg:flex-row justify-between mt-6">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h6 className="font-medium text-black-400 text-2xl border-b border-gray-600">
              Company
            </h6>
            <ul>
              <li className="py-2 text-sm">
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li className="py-2 text-sm">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li className="py-2 text-sm">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer"
                >
                  Contact
                </Link>
              </li>
              <li className="py-2 text-sm">
                <Link
                  to="service"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer"
                >
                  Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h6 className="font-medium text-black-400 text-2xl border-b border-gray-600">
              Head Office
            </h6>
            <ul>
              <li className="py-2 text-sm">Shop no. 14 ,Mirchandani</li>
              <li className="py-2 text-sm">Daffodils, Sun city , Vasai</li>
              <li className="py-2 text-sm">West, Vasai-Virar,</li>
              <li className="py-2 text-sm">Maharashtra 401202</li>
            </ul>
          </div>
        </div>
        <div className="w-full mt-6 lg:mt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470.4595146600839!2d72.81574856295286!3d19.38317183417858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7af8189d2361f%3A0xe963904714fe287d!2sparadise%20co.!5e0!3m2!1sen!2sin!4v1719664932800!5m2!1sen!2sin"
            width="300"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
