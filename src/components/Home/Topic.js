import React from 'react';
// '../../assets/Application stacks.png'

const Topic = ({stack}) => {
    const {img, title, desc} = stack;
    console.log(img);
    return (
        <div className='text-left p-5'>
            <img src={img} alt="" />
            <p className='font-extrabold border-b-4 border-red-300 mb-[22px] py-[16px] w-[116px] whitespace-nowrap'>{title}</p>
            <p>{desc}</p>
        </div>
    );
};

export default Topic;