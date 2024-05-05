"use client"
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Graphic1 from '../../public/graphic1.svg';
import Graphic2 from '../../public/graphic2.svg';
import Graphic3 from '../../public/graphic3.svg';
import Link from 'next/link';
import { PiArrowBendDownRightBold } from 'react-icons/pi';
import useFetch from '@/hooks/useFetch';

const CategoryList = () => {
  const {data, loading} = useFetch(`/category/getCategory`)

  const CardTheme = [
    {theme1:'from-red-500', theme2:'to-orange-700'},
    {theme1:'from-orange-500', theme2:'to-amber-700'},
    {theme1:'from-amber-500', theme2:'to-yellow-700'},
    {theme1:'from-yellow-500', theme2:'to-lime-700'},
    {theme1:'from-lime-500', theme2:'to-teal-700'},
    {theme1:'from-teal-500', theme2:'to-cyan-700'},
    {theme1:'from-cyan-500', theme2:'to-blue-700'},
    {theme1:'from-blue-500', theme2:'to-violet-700'},
    {theme1:'from-violet-500', theme2:'to-fuchsia-700'},
    {theme1:'from-fuchsia-500', theme2:'to-rose-700'},
  ]
  const getColorCode = index => CardTheme[index % CardTheme.length];
  const Graphics = [
    {graphic:Graphic1},
    {graphic:Graphic2},
    {graphic:Graphic3},
  ]
  const getGraphics = index => Graphics[index % Graphics.length];
  return (
    <>
    {
      !loading ? 
      <section className='mx-auto xl:max-w-7xl lg:max-w-6xl md:max-w-4xl lg:px-8 md:px-6 px-4 py-8 select-none'>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay, Keyboard]}
          // direction={'vertical'}
          spaceBetween={10}
          slidesPerView={1}
          // navigation
          pagination={{ dynamicBullets: true, clickable: true }}
          grabCursor={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          // loop={'loop'}
          breakpoints={{
            450: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1250: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className='relative rounded-xl overflow-hidden *:items-stretch !pb-8

          [&_.swiper-button-next]:!bg-gray-100 dark:[&_.swiper-button-next]:!bg-theme2 [&_.swiper-button-next]:!text-theme1 dark:[&_.swiper-button-next]:!text-white [&_.swiper-button-next]:!rounded-xl md:[&_.swiper-button-next]:!ring-4 [&_.swiper-button-next]:!ring-2 [&_.swiper-button-next]:!ring-gray-100 [&_.swiper-button-next]:shadow-lg [&_.swiper-button-next]:shadow-theme2/70 dark:[&_.swiper-button-next]:shadow-white/70 dark:[&_.swiper-button-next]:!ring-theme2 [&_.swiper-button-next]:!size-8 [&_.swiper-button-next]:after:!text-lg [&_.swiper-button-next]:after:content-["next"] [&_.swiper-button-next]:after:!font-extrabold [&_.swiper-button-next]:!right-4 [&_.swiper-button-next]:!top-4 max-md:[&_.swiper-button-next]:!hidden [&_.swiper-button-next]:mt-0
          
          [&_.swiper-button-prev]:!bg-gray-100 dark:[&_.swiper-button-prev]:!bg-theme2 [&_.swiper-button-prev]:!text-theme1 dark:[&_.swiper-button-prev]:!text-white [&_.swiper-button-prev]:!rounded-xl md:[&_.swiper-button-prev]:!left-4 md:[&_.swiper-button-prev]:!ring-4 [&_.swiper-button-prev]:!ring-2 [&_.swiper-button-prev]:!ring-gray-100 [&_.swiper-button-prev]:shadow-lg [&_.swiper-button-prev]:shadow-theme2/70 dark:[&_.swiper-button-prev]:shadow-white/70 dark:[&_.swiper-button-prev]:!ring-theme2 [&_.swiper-button-prev]:!size-8 [&_.swiper-button-prev]:after:!text-lg [&_.swiper-button-prev]:after:content-["prev"] [&_.swiper-button-prev]:after:!font-extrabold [&_.swiper-button-prev]:!left-auto [&_.swiper-button-prev]:!right-4 [&_.swiper-button-prev]:!top-4 max-md:[&_.swiper-button-prev]:!hidden [&_.swiper-button-prev]:mt-0 [&_.swiper-button-disabled]:!hidden
          
          [&_.swiper-pagination]:!bottom-0 md:*:[&_.swiper-pagination]:!size-3 *:[&_.swiper-pagination]:!size-2 *:[&_.swiper-pagination]:!bg-theme1 dark:*:[&_.swiper-pagination]:!bg-white'
        >
          {
            data?.data?.data?.map((res, index)=>(
              <SwiperSlide key={res?._id} className='!h-auto'>
                <Link href="" className='h-full'>
                  <div className={`rounded-xl relative overflow-hidden h-full flex flex-col items-stretch bg-gradient-to-tr ${getColorCode(index)?.theme1} ${getColorCode(index)?.theme2} z-20`}>
                      <div className="z-10 opacity-60 sm:ml-24 ml-40 mix-blend-overlay">
                        <Image src={getGraphics(index)?.graphic} alt="graphic" width={300} height={300} loading='lazy' quality={70} className='w-full' />
                      </div>
                      <div className="z-30 p-4 pt-0 grow flex flex-col -mt-10">
                          <div className="md:text-xl text-lg font-bold text-white capitalize pr-20">
                              {res?.categoryName}
                          </div>
                          <div className="md:text-base text-sm text-white/80">
                              {res?.blogCount} Blogs
                          </div>
                          <div className="flex items-end grow pt-4">
                              <div className="size-6 text-white">
                                  <PiArrowBendDownRightBold className='size-full' />
                              </div>
                              <div className="size-14 absolute top-4 left-4">
                                <Image src={res?.image} alt="graphic" width={100} height={100} loading='lazy' quality={70} className='size-full object-contain object-center' />
                              </div>
                          </div>
                      </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </section>
      :
      <section className='mx-auto xl:max-w-7xl lg:max-w-6xl md:max-w-4xl lg:px-8 md:px-6 px-4 py-8 select-none animate-pulse grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
            <div className='h-full'>
              <div className="rounded-xl relative overflow-hidden h-full flex flex-col items-stretch skeleton-text z-20">
                  <div className="z-10 opacity-60 ml-24 mix-blend-overlay">
                    <Image src={Graphic1} alt="graphic" width={300} height={300} loading='lazy' quality={70} className='w-full opacity-0' />
                  </div>
                  <div className="z-30 p-4 pt-0 grow flex flex-col items-start gap-2 -mt-10">
                      <div className="md:text-xl text-lg font-bold capitalize pr-20 bg-white dark:bg-theme2 skeleton-text">
                          xxxxxx
                      </div>
                      <div className="md:text-base text-sm bg-white dark:bg-theme2 skeleton-text">
                          xxxxxxxx
                      </div>
                      <div className="flex items-end grow pt-4">
                          <div className="size-6 bg-white dark:bg-theme2 skeleton-text">
                              xxxx
                          </div>
                          <div className="border-4 rounded-full size-16 block absolute top-4 left-4 bg-white dark:bg-theme2 skeleton-text"></div>
                      </div>
                  </div>
              </div>
            </div>
            <div className='h-full max-sm:hidden'>
              <div className="rounded-xl relative overflow-hidden h-full flex flex-col items-stretch skeleton-text z-20">
                  <div className="z-10 opacity-60 ml-24 mix-blend-overlay">
                    <Image src={Graphic1} alt="graphic" width={300} height={300} loading='lazy' quality={70} className='w-full opacity-0' />
                  </div>
                  <div className="z-30 p-4 pt-0 grow flex flex-col items-start gap-2 -mt-10">
                      <div className="md:text-xl text-lg font-bold capitalize pr-20 bg-white dark:bg-theme2 skeleton-text">
                          xxxxxx
                      </div>
                      <div className="md:text-base text-sm bg-white dark:bg-theme2 skeleton-text">
                          xxxxxxxx
                      </div>
                      <div className="flex items-end grow pt-4">
                          <div className="size-6 bg-white dark:bg-theme2 skeleton-text">
                              xxxx
                          </div>
                          <div className="border-4 rounded-full size-16 block absolute top-4 left-4 bg-white dark:bg-theme2 skeleton-text"></div>
                      </div>
                  </div>
              </div>
            </div>
            <div className='h-full max-md:hidden'>
              <div className="rounded-xl relative overflow-hidden h-full flex flex-col items-stretch skeleton-text z-20">
                  <div className="z-10 opacity-60 ml-24 mix-blend-overlay">
                    <Image src={Graphic1} alt="graphic" width={300} height={300} loading='lazy' quality={70} className='w-full opacity-0' />
                  </div>
                  <div className="z-30 p-4 pt-0 grow flex flex-col items-start gap-2 -mt-10">
                      <div className="md:text-xl text-lg font-bold capitalize pr-20 bg-white dark:bg-theme2 skeleton-text">
                          xxxxxx
                      </div>
                      <div className="md:text-base text-sm bg-white dark:bg-theme2 skeleton-text">
                          xxxxxxxx
                      </div>
                      <div className="flex items-end grow pt-4">
                          <div className="size-6 bg-white dark:bg-theme2 skeleton-text">
                              xxxx
                          </div>
                          <div className="border-4 rounded-full size-16 block absolute top-4 left-4 bg-white dark:bg-theme2 skeleton-text"></div>
                      </div>
                  </div>
              </div>
            </div>
            <div className='h-full max-lg:hidden'>
              <div className="rounded-xl relative overflow-hidden h-full flex flex-col items-stretch skeleton-text z-20">
                  <div className="z-10 opacity-60 ml-24 mix-blend-overlay">
                    <Image src={Graphic1} alt="graphic" width={300} height={300} loading='lazy' quality={70} className='w-full opacity-0' />
                  </div>
                  <div className="z-30 p-4 pt-0 grow flex flex-col items-start gap-2 -mt-10">
                      <div className="md:text-xl text-lg font-bold capitalize pr-20 bg-white dark:bg-theme2 skeleton-text">
                          xxxxxx
                      </div>
                      <div className="md:text-base text-sm bg-white dark:bg-theme2 skeleton-text">
                          xxxxxxxx
                      </div>
                      <div className="flex items-end grow pt-4">
                          <div className="size-6 bg-white dark:bg-theme2 skeleton-text">
                              xxxx
                          </div>
                          <div className="border-4 rounded-full size-16 block absolute top-4 left-4 bg-white dark:bg-theme2 skeleton-text"></div>
                      </div>
                  </div>
              </div>
            </div>
      </section>
    }
    </>
  )
}

export default CategoryList