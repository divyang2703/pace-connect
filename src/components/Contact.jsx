import React from 'react'
import Logo from '../assets/Pace Connect logo.jpg'


const Contact = () => {
    return (
        <div className='w-full py-16 px-4' id='contact'>
            <h2 className='flex justify-center font-semibold text-2xl'>Contact Us</h2><br/>
            <div className='max-w-[1240px] mx-auto p-4 grid md:grid-cols-2 border border-black rounded-2xl'>
                <img className='w-[500px] mx-auto my-4 rounded-lg border' src={Logo} alt="logo" />
                <div>
                    <p className='text-[#0098b0] font-bold text-6xl'>Pace Connect</p>
                    <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Empower Your Pace with Pace Connect: Ignite Your Social Media Success!</h2>
                        <ul className='py-2'>
                            <li className='font-medium text-lg'>OFFICE NO: +918208320287</li>
                            <li className='font-medium text-lg'>Aman: +917757856110</li>
                            <li className='font-medium text-lg'>Sahil: +917709997861</li>
                            <li className='font-medium text-lg'>Vishwesh: +918208663834</li>
                            <li className='font-medium text-lg'>Email: <a href='https://shorturl.at/cwACV' target='_blank' rel=" noreferrer">paceconnect23@gmail.com</a></li>
                            <li className='font-medium text-lg'>Head Office Address: Shop no. 14 ,Mirchandani Daffodils, Sun city , Vasai West, Vasai-Virar, Maharashtra 401202</li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact