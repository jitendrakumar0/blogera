"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { BsStars } from "react-icons/bs";
import { PiArrowBendDownRightBold } from "react-icons/pi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectCreative, Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';
import useFetch from '@/hooks/useFetch';

const Featured = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  
  const {data, loading} = useFetch(`/blog/getBannerBlogs?pageSize=3`)

  return (
    <>
    {
      !loading ? 
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectCreative, Autoplay, Keyboard]}
        // direction={'vertical'}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ dynamicBullets: true, clickable: true }}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -500],
          },
          next: {
            translate: [0, '100%', 0],
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={'loop'}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className='[&_.swiper-button-next]:!bg-gray-100 dark:[&_.swiper-button-next]:!bg-theme2 [&_.swiper-button-next]:!text-theme1 dark:[&_.swiper-button-next]:!text-white [&_.swiper-button-next]:!rounded-xl md:[&_.swiper-button-next]:!ring-4 [&_.swiper-button-next]:!ring-2 [&_.swiper-button-next]:!ring-gray-100 [&_.swiper-button-next]:shadow-lg [&_.swiper-button-next]:shadow-theme2/70 dark:[&_.swiper-button-next]:shadow-white/70 dark:[&_.swiper-button-next]:!ring-theme2 [&_.swiper-button-next]:!size-8 [&_.swiper-button-next]:after:!text-lg [&_.swiper-button-next]:after:content-["next"] [&_.swiper-button-next]:after:!font-extrabold [&_.swiper-button-next]:!bottom-4 [&_.swiper-button-next]:!right-4 [&_.swiper-button-next]:!top-auto max-md:[&_.swiper-button-next]:!hidden
        
        [&_.swiper-button-prev]:!bg-gray-100 dark:[&_.swiper-button-prev]:!bg-theme2 [&_.swiper-button-prev]:!text-theme1 dark:[&_.swiper-button-prev]:!text-white [&_.swiper-button-prev]:!rounded-xl md:[&_.swiper-button-prev]:!ring-4 [&_.swiper-button-prev]:!ring-2 [&_.swiper-button-prev]:!ring-gray-100 [&_.swiper-button-prev]:shadow-lg [&_.swiper-button-prev]:shadow-theme2/70 dark:[&_.swiper-button-prev]:shadow-white/70 dark:[&_.swiper-button-prev]:!ring-theme2 [&_.swiper-button-prev]:!size-8 [&_.swiper-button-prev]:after:!text-lg [&_.swiper-button-prev]:after:content-["prev"] [&_.swiper-button-prev]:after:!font-extrabold [&_.swiper-button-prev]:!bottom-4 [&_.swiper-button-prev]:!left-auto [&_.swiper-button-prev]:!right-4 [&_.swiper-button-prev]:!top-auto [&_.swiper-button-prev]:!-translate-x-[150%] max-md:[&_.swiper-button-prev]:!hidden
        
        [&_.swiper-pagination]:!bottom-5 md:*:[&_.swiper-pagination]:!size-3 *:[&_.swiper-pagination]:!size-2 *:[&_.swiper-pagination]:!bg-theme1 dark:*:[&_.swiper-pagination]:!bg-white
        
        h-dvh min-h-[500px] md:min-h-[700px] select-none'
      >
        {
          data?.data?.data?.map((data)=>(
              <SwiperSlide key={data?._id}>
                <section className='h-full bg-white dark:bg-theme2 flex items-center relative before:absolute before:inset-0 before:z-10 before:bg-gradient-to-br before:from-gray-100 before:via-gray-100/90 before:to-gray-100/90 dark:before:mix-blend-multiply dark:before:from-theme2/90 dark:before:via-theme2/90 dark:before:to-theme2/70'>
                  <Image loading='lazy' quality={50} className='!absolute inset-0 !z-0 object-cover !size-full' blurDataURL={data?.image} placeholder="blur" src={data?.image} alt="hero background" width={4144} height={2780} />
                  <div className="flex flex-col items-center text-center mx-auto xl:max-w-7xl lg:max-w-6xl md:max-w-4xl lg:px-8 md:px-6 px-4 gap-4 relative z-20 py-28">
                    <div className="w-full text-black dark:text-white font-extrabold text-2xl sm:text-3xl md:text-4xl text-balance leading-normal">{data?.title}</div>
                    <div className="w-full font-medium text-sm sm:text-base md:text-lg text-black/80 dark:text-white/80 text-balance">{data?.shortDesc}</div>
                    <div className="flex justify-center gap-6 items-center pt-4">
                      <Link href="" className='btn-theme1'><BsStars /> Get Started</Link>
                      <Link href={data?.slugUrl} className='btn-outline-theme1'>Learn More <PiArrowBendDownRightBold /></Link>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
          )) 
        }
          <div className="autoplay-progress absolute left-4 bottom-4 z-10 *:!z-20 md:size-10 size-7 flex items-center backdrop-blur-md justify-center font-bold text-theme1 dark:text-white md:text-sm text-xs" slot="container-end">
            <svg viewBox="0 0 48 48" className='absolute left-0 top-0 !z-10 size-full bg-white/20 dark:bg-theme2 rounded-full [stroke-width:4px] fill-none stroke-theme1 dark:stroke-white [stroke-dasharray:125.6] [transform:rotate(-90deg)] [stroke-dashoffset:calc(125.6_*_(1_-_var(--progress)))] [--progress:0]' ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
      </Swiper>
      :
      <section className='h-dvh min-h-[500px] md:min-h-[700px] select-none flex items-center relative bg-white dark:bg-theme2 animate-pulse'>
        <div className="flex flex-col items-center text-center mx-auto xl:max-w-7xl lg:max-w-6xl md:max-w-4xl lg:px-8 md:px-6 px-4 gap-4 relative z-20 py-28">
          <div className="font-semibold text-2xl sm:text-3xl md:text-4xl text-balance leading-normal skeleton-text">Explore the Unseen: Blogera Unveiled</div>
          <div className="font-medium text-sm sm:text-base md:text-lg text-balance skeleton-text">Dive into the extraordinary world of Blogera where every article is a key unlocking a realm of insights and creativity. Join us on a journey of discovery, as we navigate through stories, ideas, and perspectives that inspire and enrich your mind.</div>
          <div className="flex justify-center gap-6 items-center pt-4">
            <Link href="" className='btn-theme1 skeleton-text'>Get Started</Link>
            <Link href="" className='btn-outline-theme1 skeleton-text'>Learn More</Link>
          </div>
        </div>
      </section>
    }
    </>
  )
}

export default Featured