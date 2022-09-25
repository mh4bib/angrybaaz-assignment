import React from 'react';
import '../../css/Banner.css';
import BannerImg from '../../assets/Banner-img.png';

const Banner = () => {
    return (
        <div className='flex justify-between banner-bg h-[622px] mt-[-75px]'>
            <div className='ml-[132px] text-left mt-[182px] text-white'>
                <h3 className='text-[24px] font-bold'>Welcome to Infenito</h3>
                <h1 className='text-[64px] font-extrabold leading-[75px]'>We power <br />
                    brands to build <br />
                    big!
                </h1>
                <button className=' uppercase bg-transparent border-[3.5px] rounded border-white mt-[45px] px-[104.5px] py-[18.5px]'>join</button>
            </div>
            <div className='mr-[132px]'>
                <div className='mt-[85px]'><img className='w-[607px]' src={BannerImg} alt="" srcset="" /></div>
                
            </div>
        </div>
    );
};

export default Banner;