import React from 'react';
import tick from '../../assets/tick.png';
import support from '../../assets/45155-support-system.gif';

const Besides = () => {
    return (
        <div className='mx-[132px] grid grid-cols-3'>
            <div className='flex items-center'>
                <h2 className='text-[36px] text-left'>What you get besides <br /> the above things</h2>
            </div>
            <div className='flex justify-center items-center'>
                <img className='w-[36px] h-[36px]' src={tick} alt="" />
                <p className='text-[18px]'>24/7 Support</p>
            </div>
            <div className='flex justify-end'>
                <img className='w-[555px]' src={support} alt="" />
            </div>
        </div>
    );
};

export default Besides;