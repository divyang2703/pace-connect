import React from 'react'
import Typed from 'react-typed';
import { Link } from 'react-scroll'

const Hero = () => {
    return (
        <div className='text-white' id='hero'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#5be2e6] font-bold p-2'>GROWING WITH SOCIAL MEDIA</p>
                <p className='font-semibold p-2'>Empower Your Pace with Pace Connect: Ignite Your Social Media Success!</p>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Effective, Affordable, for</p>
                    <br/>
                    <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-black-500' strings={['Leads','Growth','Clients','Business']} typeSpeed={120} backSpeed={140} loop />
                </div>
                <Link to='service' smooth={true} duration={1000}>
                <button className='bg-[#5be2e6] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
                </Link>
            </div>
        </div>
    )
}

export default Hero