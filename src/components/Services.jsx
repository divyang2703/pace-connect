import React from "react";
import {Link }from 'react-router-dom'
import {FcServices} from 'react-icons/fc'
import Insta from '../assets/Social/instagram.png'
import FB from '../assets/Social/facebook.png'
import X from '../assets/Social/X.png'
import Linkedin from '../assets/Social/Linkedin.png'
import Google from '../assets/Social/google.png'
import WA from '../assets/Social/whatsapp.png'

const Services = () => {
  return (
    <div>
       <h1 className=' text-4xl flex justify-center items-center' id="service"><FcServices size={40}></FcServices>&nbsp;Services</h1>
      <div className=' grid grid-cols-1 md:grid-cols-3 gap-4  text-white px-5  py-9'>
                {/* first card */}
                <div className='justify-center py-4 px-9 mx-auto w-full border rounded-xl shadow-xl' >
                    <h6 className='text-3xl font-bold flex justify-center py-2'>Instagram</h6>
                    <img className='mx-auto w-[350px] h-[255px] rounded-lg  py-2 lg:w-[250px]' src={Insta} alt="/" />
                    <p className='p-2 mt-2 text-2xl font-semibold'>"Grow Your Instagram Game with Our Social Media Marketing Agency!"</p>
                    <p className='p-2 mt-2'>In today's digital landscape, Instagram is more than just a platform for sharing photos—it's a powerful marketing tool that can take your brand to new heights. Here's why you should partner with our Social Media Marketing Agency to harness the full potential of Instagram:</p>
                    <ul className='p-2 mt-2'>
                    <li className='py-2' >• Content Management</li>
                        <li className='py-2'>• Professional Dashboard Management and Analytics </li>
                        <li className='py-2'>• Weekly 7 posts and story correlated trending Hashtags Marketing</li>
                        <li className='py-2'>• PAID Instagram AD Manager</li>
                        <li className='py-2'>• PAID Reel Thumbnail and Algorithm Marketing</li>
                        <li className='py-2 text-2xl font-bold'>• And MANY MORE SERVICES!</li>
                    </ul>
                    <Link to='https://wa.me/918208320287' target='_blank'>
                        <button className='bg-[#5be2e6] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Contact us</button>
                    </Link>
                </div>
                {/* second card */}
                <div className='justify-center py-4 px-9 mx-auto w-full border rounded-xl shadow-xl' >
                    <h6 className='text-3xl font-bold flex justify-center py-2'>FaceBook</h6>
                    <img className='mx-auto w-[350px] h-[255px] rounded-lg duration-500 py-2 lg:w-[250px]' src={FB} alt="/" />
                    <p className='p-2 mt-2 text-2xl font-semibold'>"Grow your brand on Facebook with our expert social media marketing agency!"</p>
                    <p className='p-2 mt-2'>Experience Facebook marketing excellence with our agency. Tap into the world's largest social network to connect with your audience, drive engagement, and boost your brand's success.:</p>
                    <ul className='p-2 mt-2'>
                    <li className='py-2' >• Content Management</li>
                        <li className='py-2'>• Local Group Connect Marketing Strategy</li>
                        <li className='py-2'>• Weekly 7 posts and story of products</li>
                        <li className='py-2'>• PAID FaceBook AD Manager</li>
                        <li className='py-2'>• PAID Micro Influencer Marketing</li>
                        <li className='py-2 text-2xl font-bold'>• And MANY MORE SERVICES!</li>
                    </ul>
                    <Link to='https://wa.me/918208320287' target='_blank'>
                        <button className='bg-[#5be2e6] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Contact us</button>
                    </Link>
                </div>

                {/* third card */}
                <div className='justify-center py-4 px-9 mx-auto w-full border rounded-xl shadow-xl' >
                    <h6 className='text-3xl font-bold flex justify-center py-2'>WhatsApp</h6>
                    <img className='mx-auto w-[350px] h-[255px] rounded-lg duration-500 py-2 lg:w-[250px]' src={WA} alt="/" />
                    <p className='p-2 mt-2 text-2xl font-semibold'>"Grow Your WhatsApp Game with Our Social Media Marketing Agency!"</p>
                    <p className='p-2 mt-2'>Harness the potential of WhatsApp marketing with our agency. Engage customers directly, provide real-time support, and reach a global audience through this powerful messaging platform:</p>
                    <ul className='p-2 mt-2'>
                        <li className='py-2' >• Broadcast list creation and circulation</li>
                        <li className='py-2'>• Local Group Connect Marketing Strategy</li>
                        <li className='py-2'>• Weekly 7 status upload of products</li>
                        <li className='py-2'>• Product or Service Catalog creation and whatsapp link creation</li>
                        <li className='py-2'>• PAID API Setup</li>
                        <li className='py-2 text-2xl font-bold'>• And MANY MORE SERVICES!</li>
                    </ul>
                    <Link to='https://wa.me/918208320287' target='_blank'>
                        <button className='bg-[#5be2e6] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Contact us</button>
                    </Link>
                </div>

                {/* fourth card */}
                
                <div className='justify-center py-4 px-12 mx-auto w-full border rounded-xl shadow-xl' >
                    <h6 className='text-3xl font-bold flex justify-center py-2'>Google</h6>
                    <img className='mx-auto w-[350px] h-[255px] rounded-lg duration-500 py-2 lg:w-[250px]' src={Google} alt="/" />
                    <p className='p-2 mt-2 text-2xl font-semibold'>"Grow Your Google Game with Our Social Media Marketing Agency!"</p>
                    <p className='p-2 mt-2'>Optimize your presence on Google with our agency. From SEO to paid advertising, we'll help you conquer search results, drive traffic, and increase conversions for your business:</p>
                    <ul className='p-2 mt-2'>
                        <li className='py-2'>• Google customer interaction</li>
                        <li className='py-2'>• Google store set up</li>
                        <li className='py-2'>• Google Verification</li>
                        <li className='py-2' >• PAID Google SEO</li>
                        <li className='py-2'>• PAID Google ADS Management</li>
                        <li className='py-2 text-xl font-bold'>• And MANY MORE SERVICES!</li>
                    </ul>
                    <Link to='https://wa.me/918208320287' target='_blank'>
                        <button className='bg-[#5be2e6] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Contact us</button>
                    </Link>
                </div>

                {/* fifth card */}

                <div className='justify-center py-4 px-9 mx-auto w-full border rounded-xl shadow-xl' >
                    <h6 className='text-3xl font-bold flex justify-center py-2'>LinkedIn</h6>
                    <img className='mx-auto w-[350px] h-[255px] rounded-lg duration-500 py-2 lg:w-[250px]' src={Linkedin} alt="/" />
                    <p className='p-2 mt-2 text-2xl font-semibold'>"Grow Your Telegram Game with Our Social Media Marketing Agency!"</p>
                    <p className='p-2 mt-2'>Empower your brand on Telegram with our expert marketing agency. Leverage secure and fast messaging to grow your community, share updates, and connect with your audience effectively:</p>
                    <ul className='p-2 mt-2'>
                        <li className='py-2' >• Hashtags Marketing Tactic</li>
                        <li className='py-2' >• LinkedIn page Management</li>
                        <li className='py-2'>• LinkedIn Content Management</li>
                        <li className='py-2'>• Community Engagement</li>
                        <li className='py-2'>• Publishing Scheduling</li>
                        <li className='py-2'>• 7 posts in a week</li>
                        <li className='py-2 text-2xl font-bold'>• And MANY MORE SERVICES!</li>
                    </ul>
                    <Link to='https://wa.me/918208320287' target='_blank'>
                        <button className='bg-[#5be2e6] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Contact us</button>
                    </Link>
                </div>

                {/* sixth card */}

                <div className='justify-center py-4 px-9 mx-auto w-full border rounded-xl shadow-xl' >
                    <h6 className='text-3xl font-bold flex justify-center py-2'>X</h6>
                    <img className='mx-auto w-[350px] h-[250px] rounded-lg duration-500 py-2 lg:w-[250px]' src={X} alt="/" />
                    <p className='p-2 mt-2 text-2xl font-semibold'>"Grow Your Twitter Game with Our Social Media Marketing Agency!"</p>
                    <p className='p-2 mt-2'>Transform your Twitter game with our marketing agency. Amplify your voice, create trending conversations, and engage your audience on this dynamic social platform for brand success:</p>
                    <ul className='p-2 mt-2'>
                        <li className='py-2' >• Customize and brand your profile</li>
                        <li className='py-2'>• Twitter List Creation</li>
                        <li className='py-2'>• Twitter Chat Hosting</li>
                        <li className='py-2'>• Traffic Directed to your Website</li>
                        <li className='py-2'>• Twitter moments</li>
                        <li className='py-2'>• PAID Twitter ADS Management</li>
                        <li className='py-2 text-2xl font-bold'>• And MANY MORE SERVICES!</li>
                    </ul>
                    <Link to='https://wa.me/918208320287' target='_blank'>
                        <button className='bg-[#5be2e6] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Contact us</button>
                    </Link>
                </div>
        </div>
        
    </div>
  );
};

export default Services;
