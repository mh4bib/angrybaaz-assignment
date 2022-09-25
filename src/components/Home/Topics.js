import React, { useEffect, useState } from 'react';
import Topic from './Topic';

const Topics = () => {
    const [stacks, setStacks] = useState([]);

    useEffect(() => {
        fetch('stacks.json')
            .then(res => res.json())
            .then(data => setStacks(data))
    }, [])
    return (
        <div className='mx-[132px]'>
            <h3 className='text-[24px] font-black text-left'>See popular tags <br /> and browse differnt topics</h3>
            <div className='grid grid-cols-2 mt-[53px]'>
                <div className='flex justify-center bg-yellow-400'>
                    <div className='mt-[50px]'><img src={require("../../assets/topics.png")} alt="" srcset="" /></div>
                </div>
                <div className='grid grid-cols-2 gap-4 bg-red-300'>
                    {
                        stacks.map((stack, index)=><Topic
                        key={index}
                        stack={stack}
                        ></Topic>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Topics;