import React from 'react'
import { Link } from 'react-scroll'
import {

    FaFacebookSquare,
    FaInstagram,
    FaPhoneAlt,
    FaWhatsapp
} from 'react-icons/fa';
import {Link as LinkR} from 'react-router-dom'


const Footer = () => {
    return (
        <div className='max-w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black border border-t-black'>
        <div>
        <h2 className='w-full text-3xl font-bold text-[#0098b0]'>Pace Connect.</h2>
                <p className='py-2'>Empower Your Pace with Pace Connect: Ignite Your Social Media Success!</p>
                <p>Unleash Social Media Success. Expert marketing agency. Elevate your brand. Drive growth. Join the social media revolution today!</p>
            <div className='flex justify-between md:w-[75%] my-6 '>
                <LinkR to='https://shorturl.at/mIW35' target='_blank'>
                   <FaFacebookSquare size={25} />
                </LinkR>
                    <LinkR to='https://shorturl.at/mIW35' target='_blank'>
                        <FaInstagram size={25} />
                    </LinkR>
                    <LinkR to='https://wa.me/918208320287' target='_blank'>
                        <FaWhatsapp size={25} />
                    </LinkR>
                   <LinkR to='tel:918208320287' target='_blank'>
                   <FaPhoneAlt size={20} />     
                   </LinkR>
           </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div className='mx-auto'>
                    <h6 className='font-medium text-black-400 text-2xl border-b border-gray-600'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>
                            <Link to='hero' spy={true} smooth={true} duration={1000} className='cursor-pointer'>Home</Link>
                        </li>
                        <li className='py-2 text-sm'>
                            <Link to='about' spy={true} smooth={true} duration={1000} className='cursor-pointer'>About</Link>
                        </li>
                        <li className='py-2 text-sm'>
                            <Link to='contact' spy={true} smooth={true} duration={1000} className='cursor-pointer'>Contact</Link>
                        </li>
                        <li className='py-2 text-sm'>
                            <Link to='service' spy={true} smooth={true} duration={1000} className='cursor-pointer'>Service</Link>
                        </li>
                    </ul>
                </div>

                <div className='mx-auto'>
                    <h6 className='font-medium text-black-400 text-2xl border-b border-gray-600'>Head Office</h6>
                    <ul>
                        <li className='py-2 text-sm'>Shop no. 14 ,Mirchandani</li>
                        <li className='py-2 text-sm'>Daffodils, Sun city , Vasai</li>
                        <li className='py-2 text-sm'>West, Vasai-Virar,</li>
                        <li className='py-2 text-sm'>Maharashtra 401202</li>
                    </ul>
                </div>

            </div>


        </div>
    )
}

export default Footer