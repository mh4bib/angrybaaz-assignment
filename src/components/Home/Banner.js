import React from 'react';
import '../../css/Banner.css';
import BannerImg from '../../assets/Banner-img.png';

const Banner = () => {
    return (
        <div className='flex justify-between banner-bg h-[622px] mt-[-70px] bg-slate-600'>
            <div className=''>
                <h3 className='text-[24px] font-bold'>Welcome to Infenito</h3>
                <h1 className='text-left text-[64px] font-bold'>We power <br />
                    brands to build <br />
                    big!
                </h1>
            </div>
            <div className='bg-red-200'>
                <div className='mt-[120px]'><img className='w-[607px]' src={BannerImg} alt="" srcset="" /></div>
                
            </div>
        </div>
    );
};

export default Banner;