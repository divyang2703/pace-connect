import React from 'react'
import Logo from '../assets/Pace Connect logo.jpg';

const About = () => {
  return (
    <div className='w-full  py-16 px-4' id='about'>
      <h2 className='flex justify-center font-semibold text-2xl'>About Us</h2><br/>
      <div className='max-w-[1240px] mx-auto p-4 grid md:grid-cols-2 border border-black rounded-2xl'>
        <img className='w-[400px] mx-auto my-4 rounded-md' src={Logo} alt="logo" />
        <div>
          <p className='text-[#0098b0] font-bold text-6xl'>Pace Connect</p>
          <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Empower Your Pace with Pace Connect: Ignite Your Social Media Success!</h2>
          <p className='font-semibold'>
          We are a dynamic social media marketing agency dedicated to propelling businesses to new heights across major social media platforms. With our innovative strategies, we fuel your growth and success.
          </p>

        </div>
      </div>
    </div>
  )
}

export default About