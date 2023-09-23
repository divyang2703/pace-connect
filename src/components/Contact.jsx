import React from 'react'
import Logo from '../assets/Contactus.png'


const Contact = () => {
    return (
        <div className='w-full py-16 px-4' id='contact'>
            <h2 className='flex justify-center font-semibold text-2xl'>Contact Us</h2><br/>
            <div className='max-w-[1240px] mx-auto p-4 grid md:grid-cols-2 border border-white rounded-2xl'>
                <img className='w-[500px] mx-auto my-4 rounded-lg border' src={Logo} alt="logo" />
                <div>
                    <p className='text-[#0098b0] font-bold text-6xl py-6'>Pace Connect</p>
                    <h2 className='md:text-4xl sm:text-3xl text-2xl font-semibold py-4'>Use Pace Connect to amplify your social media presence and take your business to the next level.</h2>
                        <ul className='py-2'>
                            <li className='font-medium text-lg'>OFFICE NO: +918208320287</li>
                            <li className='font-medium text-lg'>Email: <a href='https://shorturl.at/cwACV' target='_blank' rel=" noreferrer">paceconnect23@gmail.com</a></li>
                            <li className='font-medium text-lg'>Head Office Address: Shop no. 14 ,Mirchandani Daffodils, Sun city , Vasai West, Vasai-Virar, Maharashtra 401202</li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact