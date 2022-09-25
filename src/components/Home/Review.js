import React from 'react';
import user from '../../assets/charlie-green-3JmfENcL24M-unsplash.jpg';

const Review = () => {
    return (
        <div className='grid grid-cols-12 mx-[132px] my-[92px]'>
            <div className='my-auto col-span-5'>
                <h2 className='text-[36px] text-left'>What our Client's <br /> say about us ?</h2>
            </div>
            <div className='flex justify-end items-end col-span-7'>
                <div className='bg-[#31D0AA] w-[630px] p-[46px] rounded-t-[90px] rounded-l-[90px]'>
                    <p className='text-[18px] text-left'>Look no further. These guys are great to work with! VERY GOOD COMPANY &amp; GREAT TEAM SPIRIT! , strongly recommend them.</p>
                    <p className='text-[18px] font-extrabold text-left'>David</p>
                    <p className='text-[14px] text-left'>Jr. Manager at SUBROS, India</p>
                </div>
                <div className='ml-[37.5px]'><img className='h-[94px] w-[94px] object-cover rounded-t-[40px] rounded-r-[40px]' src={user} alt="" /></div>
            </div>
        </div>
    );
};

export default Review;