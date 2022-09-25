import React from 'react';
import '../../css/carousel.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../../assets/Rectangle 9476.png';
import img2 from '../../assets/Rectangle 9477.png';
import img3 from '../../assets/Rectangle 9478.png';
import img4 from '../../assets/Rectangle 9478 (1).png';
import img5 from '../../assets/Rectangle 9478 (2).png';

const Carousels = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        }
    }
    return (
        <div className='mx-[170px] carousel-bg  pt-[40px]'>
            <hr className='w-[116px] mx-auto bg-[#F050BE] h-[4px] mb-[15px]' />
                <h3 className='text-[24px] font-extrabold'>Still have a doubt ?</h3>
                <p className='mb-[68px] mt-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Carousel
                    // showDots={true}
                    partialVisible={true}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    className='mx-auto' >
                    <div className='flex items-center'>
                        <img src={img1} alt="" />
                        <h3 className='text-[24px] font-extrabold ml-3 text-left pb-[14px] border-b-4 w-[116px] border-[#F050BE] whitespace-nowrap'>About Infenito,<br /> insights about us</h3>
                    </div>
                    <div className='flex items-center'>
                        <img src={img2} alt="" />
                        <h3 className='text-[24px] font-extrabold ml-3 text-left pb-[14px] border-b-4 w-[116px] border-[#F050BE] whitespace-nowrap'>See our latest blogs <br /> about stacks</h3>
                    </div>
                    <div className='flex items-center'>
                        <img src={img3} alt="" />
                        <h3 className='text-[24px] font-extrabold ml-3 text-left pb-[14px] border-b-4 w-[116px] border-[#F050BE] whitespace-nowrap'>See our latest project <br /> on healthcare</h3>
                    </div>
                    <div className='flex items-center'>
                        <img src={img4} alt="" />
                        <h3 className='text-[24px] font-extrabold ml-3 text-left pb-[14px] border-b-4 w-[116px] border-[#F050BE] whitespace-nowrap'>Unlock new metaverse <br /> in the design system</h3>
                    </div>
                    <div className='flex items-center'>
                        <img src={img5} alt="" />
                        <h3 className='text-[24px] font-extrabold ml-3 text-left pb-[14px] border-b-4 w-[116px] border-[#F050BE] whitespace-nowrap'>Get insights of some <br /> websites</h3>
                    </div>
                </Carousel>
            </div>
    );
};

export default Carousels;