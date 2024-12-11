import React from 'react';
import slide1 from '../assets/slide01.jpg'
import slide2 from '../assets/slide02.jpg'
import slide3 from '../assets/slide03.jpg'
import bgNoise from '../assets/bg-noise.gif'
import imdbLogo from '../assets/imdb-logo.svg'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';



import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';



const Slider = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className='bg-cover object-fit bg-right-top bg-no-repeat' style={{             
                    'backgroundImage': `url(${slide1})`, 
                }}>
                    <div className='h-screen text-white bg-black/50 md:bg-transparent' >
                        <div className='space-y-4 w-11/12 md:w-1/2 py-36 px-6 lg:px-10'>
                            <h4 className='font-extrabold spacing text-xs text-white/50 tracking-widest lg:text-md border-l-4 pl-4 border-[#e90101]'>NEW RELEASES</h4>
                            <h1 className='font-bold text-3xl md:text-5xl lg:text-7xl'>Inside Woman</h1>
                            <div className='flex flex-wrap items-center space-y-3'>
                                <div className='w-10 h-10 font-bold'>
                                    <CircularProgressbar
                                        text={7.1}
                                        styles={buildStyles({
                                            textSize: '30px',
                                            pathColor: `#28a745`,
                                            textColor: '#ffffff',
                                            trailColor: '#d6d6d6',
                                            backgroundColor: '#3e98c7',
                                        })} />
                                </div>
                                <div className='h-5'>
                                    <img className="h-full ml-3 mr-1" src={imdbLogo} alt="imdb-logo" />
                                </div>
                                <sup className='text-sm'>Score</sup>


                                <h3 className='text-lg ml-4'>2024</h3>


                                <div className='mx-4 pl-1 border-2 border-white h-[20px] leading-[18px] inline-block'>4K <b className='bg-white text-black px-1'>Ultra HD</b></div>

                                <h3 className='font-light text-md'>2hr 20 min</h3>
                                <div className="font-light badge badge-outline text-sm p-2 mx-4">CC</div>

                            </div>
                            <p className=' font-light lg:leading-8'>
                            That is, until she plays her first game of chess. While working as a handyman in an old house, an ex-convict discovers countless horrors revolving around a town's twisted secrets.</p>
                            <button className='btn md:btn-md lg:btn-lg text-white font-bold rounded-none border-[#e90101] bg-[#e90101] hover:bg-transparent hover:border-2 hover:border-[#e90101]'>DISCOVER NOW</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-cover object-fit bg-center bg-no-repeat' style={{             
                    'backgroundImage': `url(${slide2})`, 
                }}>
                    <div className='h-screen text-white bg-black/50 md:bg-transparent' >
                        <div className='space-y-4 w-11/12 md:w-1/2 py-36 px-6 lg:px-10'>
                            <h4 className='font-extrabold spacing text-xs text-white/50 tracking-widest lg:text-md border-l-4 pl-4 border-[#e90101]'>NEW RELEASES</h4>
                            <h1 className='font-bold text-3xl md:text-5xl lg:text-7xl'>Inside Woman</h1>
                            <div className='flex flex-wrap items-center space-y-3'>
                                <div className='w-10 h-10 font-bold'>
                                    <CircularProgressbar
                                        text={7.1}
                                        styles={buildStyles({
                                            textSize: '30px',
                                            pathColor: `#28a745`,
                                            textColor: '#ffffff',
                                            trailColor: '#d6d6d6',
                                            backgroundColor: '#3e98c7',
                                        })} />
                                </div>
                                <div className='h-5'>
                                    <img className="h-full ml-3 mr-1" src={imdbLogo} alt="imdb-logo" />
                                </div>
                                <sup className='text-sm'>Score</sup>


                                <h3 className='text-lg ml-4'>2024</h3>


                                <div className='mx-4 pl-1 border-2 border-white h-[20px] leading-[18px] inline-block'>4K <b className='bg-white text-black px-1'>Ultra HD</b></div>

                                <h3 className='font-light text-md'>2hr 20 min</h3>
                                <div className="font-light badge badge-outline text-sm p-2 mx-4">CC</div>

                            </div>
                            <p className=' font-light lg:leading-8'>
                            That is, until she plays her first game of chess. While working as a handyman in an old house, an ex-convict discovers countless horrors revolving around a town's twisted secrets.</p>
                            <button className='btn md:btn-md lg:btn-lg text-white font-bold rounded-none border-[#e90101] bg-[#e90101] hover:bg-transparent hover:border-2 hover:border-[#e90101]'>DISCOVER NOW</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-cover object-fit bg-right-top bg-no-repeat' style={{             
                    'backgroundImage': `url(${slide3})`, 
                }}>
                    <div className='h-screen text-white bg-black/50 md:bg-transparent' >
                        <div className='space-y-4 w-11/12 md:w-1/2 py-36 px-6 lg:px-10'>
                            <h4 className='font-extrabold spacing text-xs text-white/50 tracking-widest lg:text-md border-l-4 pl-4 border-[#e90101]'>NEW RELEASES</h4>
                            <h1 className='font-bold text-3xl md:text-5xl lg:text-7xl'>Inside Woman</h1>
                            <div className='flex flex-wrap items-center space-y-3'>
                                <div className='w-10 h-10 font-bold'>
                                    <CircularProgressbar
                                        text={7.1}
                                        styles={buildStyles({
                                            textSize: '30px',
                                            pathColor: `#28a745`,
                                            textColor: '#ffffff',
                                            trailColor: '#d6d6d6',
                                            backgroundColor: '#3e98c7',
                                        })} />
                                </div>
                                <div className='h-5'>
                                    <img className="h-full ml-3 mr-1" src={imdbLogo} alt="imdb-logo" />
                                </div>
                                <sup className='text-sm'>Score</sup>


                                <h3 className='text-lg ml-4'>2024</h3>


                                <div className='mx-4 pl-1 border-2 border-white h-[20px] leading-[18px] inline-block'>4K <b className='bg-white text-black px-1'>Ultra HD</b></div>

                                <h3 className='font-light text-md'>2hr 20 min</h3>
                                <div className="font-light badge badge-outline text-sm p-2 mx-4">CC</div>

                            </div>
                            <p className=' font-light lg:leading-8'>
                            That is, until she plays her first game of chess. While working as a handyman in an old house, an ex-convict discovers countless horrors revolving around a town's twisted secrets.</p>
                            <button className='btn md:btn-md lg:btn-lg text-white font-bold rounded-none border-[#e90101] bg-[#e90101] hover:bg-transparent hover:border-2 hover:border-[#e90101]'>DISCOVER NOW</button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;