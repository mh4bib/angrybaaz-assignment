import React from 'react';
import '../../css/services.css';
import serviceImg from '../../assets/117909-meditation-man.gif'

const Services = () => {
    return (
        <div className='bg-[#FFFAFD]  pt-[52px]'>
            <hr className='w-[116px] mx-auto bg-[#F050BE] h-[4px]' />
            <h3 className='text-[24px] font-extrabold pt-[15px]'>Services we provide</h3>
            <p className='pb-10'>We serve the users in different categories with latest tools</p>
            <div className='relative'>
                <div className='service-bg py-10 mt-[106px] z-10'>
                    <img className='w-[348px] rounded-full mx-auto' src={serviceImg} alt="" />
                </div>
                {/* lines */}
                
                <img className='scale-y-[-1] z-0 absolute top-[140px] left-[345px]' src={require('../../assets/Dotted line.png')} alt="" />
                <img className='z-0 absolute top-[260px] left-[345px]' src={require('../../assets/Dotted line.png')} alt="" />
                <img className='scale-x-[-1] scale-y-[-1] z-0 absolute top-[140px] left-[935px]' src={require('../../assets/Dotted line.png')} alt="" />
                <img className='scale-x-[-1] z-0 absolute top-[260px] left-[935px]' src={require('../../assets/Dotted line.png')} alt="" />
                <img className='z-0 absolute top-[-60px] left-[625px]' src={require('../../assets/upperDotted.png')} alt="" />
                <img className='scale-x-[-1] z-0 absolute top-[-60px] left-[855px]' src={require('../../assets/upperDotted.png')} alt="" />
                <img className='z-0 absolute top-[-65px] left-[755px]' src={require('../../assets/straigtDotted.png')} alt="" />
                
                {/* pins */}
                <img className='absolute top-[162px] left-[565px]' src={require('../../assets/indicatorPin.png')} alt="" />
                <img className='absolute top-[252px] left-[565px]' src={require('../../assets/indicatorPin.png')} alt="" />
                <img className='absolute top-[162px] left-[935px]' src={require('../../assets/indicatorPin.png')} alt="" />
                <img className='absolute top-[251px] left-[935px]' src={require('../../assets/indicatorPin.png')} alt="" />
                <img className='absolute top-[43px] left-[648px]' src={require('../../assets/indicatorPin.png')} alt="" />
                <img className='absolute top-[38px] left-[848px]' src={require('../../assets/indicatorPin.png')} alt="" />
                <img className='absolute top-[13px] left-[747px]' src={require('../../assets/indicatorPin.png')} alt="" />

                {/* service tags */}
                <h3 className='absolute text-[24px] top-[116px] left-[255px]'>Website</h3>
                <h3 className='absolute text-[24px] top-[279px] left-[204px]'>Mobile Apps</h3>
                <h3 className='absolute text-[24px] top-[115px] left-[1173px]'>AI/ML</h3>
                <h3 className='absolute text-[24px] top-[286px] left-[1173px]'>Blockchain</h3>
                <h3 className='absolute text-[24px] top-[-85px] left-[576px]'>CMS</h3>
                <h3 className='absolute text-[24px] top-[-85px] left-[888px]'>SaaS</h3>
                <h3 className='absolute text-[24px] top-[-93px] left-[727px]'>UI/UX</h3>
            </div>
        </div>
    );
};

export default Services;