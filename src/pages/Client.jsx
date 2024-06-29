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

//file import
import { clientImages } from '../components/Client';


const Client = () => {
  return (
    <div className='justify-center py-8 px-6 mx-auto max-w-full lg:w-[900px] lg:mx-15'>
      <h1 className='flex justify-center text-3xl font-semibold'>
        <MdSupervisorAccount size={40} />
        &nbsp;Our Top Clients
      </h1>

      <Swiper
        className='carousel flex justify-center bg-white rounded-3xl border'
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <div className='swiper-wrapper'>
          {clientImages.map((client, index) => (
            <SwiperSlide key={index}>
              <img src={client.image} alt={client.client_name} className='w-full h-[300px] mx-auto mt-8 rounded-lg object-contain' />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Client;