
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import google from '../assets/Social/google.png';
import insta from '../assets/Social/instagram.png';
import fb from '../assets/Social/facebook.png';
import twitter from '../assets/Social/twitter.png';


// import required modules
import { Grid, Pagination,Navigation,Autoplay } from "swiper/modules";


const Team = () => {
  
  return (
    <div className='justify-center py-2 px-6 mx-auto w-full' id='team'>
        <h1 className='flex justify-center font-semibold text-2xl'>Our Team</h1>
        <Swiper className='carousel flex justify-center border border-black rounded-3xl'
      sspaceBetween={50}
      slidesPerView={1}

      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        
      }}
      pagination={{
        clickable: true,
        
      }}
      // navigation={true}
      modules={[Autoplay, Pagination, Navigation, Grid]}
      
      >
        <div className='swiper-wrapper'>
          <SwiperSlide>
          <div className='w-full py-16 px-4 '>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[400px] mx-auto my-4 ' src={fb} alt="/" />
                <div>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold pt-8'>Name</h1>
                    <p className='text-[#00df9a] font-bold'>Job Profile</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas eius odio provident sed inventore distinctio iusto dolor ipsam, modi rem asperiores eum eligendi incidunt facilis aperiam sequi voluptate nihil possimus cupiditate illo! Nisi deleniti animi tempora, beatae ipsa corrupti quo!</p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>Get Started</button>
                </div>
            </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='w-full py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[400px] mx-auto my-4 ' src={insta} alt="/" />
                <div>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold pt-8'>Name</h1>
                    <p className='text-[#00df9a] font-bold'>Job Profile</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam esse explicabo doloribus quis expedita, saepe quam earum pariatur quaerat consequuntur? Eum, quibusdam tempora! Voluptatum quibusdam tempora facilis neque culpa corrupti, incidunt ipsam, modi et asperiores mollitia harum aliquid! At, voluptas?</p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>Get Started</button>
                </div>
            </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='w-full  py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[400px] mx-auto my-4 ' src={google} alt="/" />
                <div>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold pt-8'>Name</h1>
                    <p className='text-[#00df9a] font-bold'>Job Profile</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deleniti recusandae laudantium tempore repellendus rem voluptates, aspernatur sunt doloribus. Repudiandae, minima cumque possimus ratione, saepe ad, accusamus tempore aliquam nulla voluptatem adipisci consectetur ducimus maiores fugit? Distinctio facilis aperiam debitis.</p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>Get Started</button>
                </div>
            </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='w-full  py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[400px] mx-auto my-4 ' src={twitter} alt="/" />
                <div>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold pt-8'>Name</h1>
                    <p className='text-[#00df9a] font-bold'>Job Profile</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident porro reprehenderit beatae amet, nostrum debitis! Nemo reprehenderit voluptatem doloribus quisquam illo! Delectus fugit optio vel, aspernatur voluptas quam quod culpa voluptates ratione, expedita porro commodi quidem nobis ad, laudantium ut?</p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>Get Started</button>
                </div>
            </div>
        </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  )
}

export default Team