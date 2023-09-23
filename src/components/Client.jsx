// import React from 'react';
import { MdSupervisorAccount } from 'react-icons/md';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

//images import
import pc from '../assets/Pace Connect logo.jpg'
import paradise from '../assets/paradise_customs_logo-.jpeg'
import clean from '../assets/Pace clean Logo.png'
import HH from '../assets/Health Hattrick by Prachi Sawtekar (PNG format).png'
import els from '../assets/easy life solution official logo.jpg'
import SC from '../assets/Spick cleans logo.jpg'



const Client = () => {
  

  return (
    <div className=' justify-center py-8 px-6 mx-auto max-w-full lg:w-[900px] lg:mx-15'>
      <h1 className='flex justify-center text-3xl font-semibold'>
        <MdSupervisorAccount size={40} />
        &nbsp;Our Top Client
      </h1><br/>

      <Swiper className='carousel flex justify-center bg-white rounded-3xl border  '
      spaceBetween={50}
      slidesPerView={1}

      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        
      }}
      pagination={{
        clickable: true,
        
      }}
      // navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      >
        <div className='swiper-wrapper'>
          <SwiperSlide className=''>
            <img src={pc} alt='/' className='bg-white flex justify-center w-[400px] h-[450px] mt-16 py-8 mx-auto sm: p-5'  />
          </SwiperSlide>
          <SwiperSlide>
            <img src={els} alt='/' className='bg-white flex justify-center w-[410px] h-[350px] mt-[100px] py-8 mx-auto sm:w-[6rem],p-5' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={paradise} alt='/' className='bg-white flex justify-center w-[400px] h-[300px] mt-[130px] py-8 mx-auto sm:p-5' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={clean} alt='/' className='bg-white flex justify-center w-[550px] h-[450px] mt-12 py-8 mx-auto sm: p-5 md:w-[500px]' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={HH} alt='/' className='bg-white flex justify-center w-[400px] h-[350px] mt-[110px]  py-14 mx-auto sm: p-5 ' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SC} alt='/' className='bg-white flex justify-center w-[600px] h-[450px] mt-5 py-8 mx-auto sm: p-5' />
          </SwiperSlide>
        </div>
          
      </Swiper>
      
      
    </div>
  );
};

export default Client