import React from 'react';

const HowItWorks = () => {
    const items = [
        {
            img:"https://i.ibb.co/YBMQ0QN/Vector.png",
            text:"QUERY SENT"
        },
        {
            img:"https://i.ibb.co/cYv81jw/Vector-1.png",
            text:"Designing"
        },
        {
            img:"https://i.ibb.co/p1ZJCw2/Group.png",
            text:"Development"
        },
        {
            img:"https://i.ibb.co/b2RQWDZ/category-black-24dp-2.png",
            text:"Production"
        }
    ]

    return (
        <div className='mx-[132px] mt-[48px]'>
            <hr className='w-[116px] bg-[#F050BE] h-[5px] mb-[15px]' />
            <h3 className='mb-[90px] text-left text-[24px] font-extrabold'>Let's See <br /> how it works</h3>
            <div className='flex justify-center items-center'>
            {
                items.map(item=><div
                className='flex flex-col ml-[100px]'>
                <div className='border-[10px] p-[40px] rounded-full'><img className='w-[45px]' src={item.img} alt="" /></div>
                <p className='uppercase font-extrabold mt-[24px]'>{item.text}</p>
                </div>)
            }
            </div>
        </div>
    );
};

export default HowItWorks;