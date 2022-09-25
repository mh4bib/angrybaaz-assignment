import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#0E0E2C] footer-bg text-white py-[55px] mt-[30px]'>
            <div className='flex justify-start items-start'>
                <div className='text-left ml-[109px]'>
                    <h3 className='text-[24px] mb-[30px]'>Company</h3>
                    <ul className='list-none'>
                        <li className='mb-[20px]'>About us</li>
                        <li className='mb-[20px]'>Portfolio</li>
                        <li className='mb-[20px]'>Pricing</li>
                        <li className='mb-[20px]'>Contact</li>
                    </ul>
                </div>
                <div className='text-left ml-[109px]'>
                    <h3 className='text-[24px] mb-[30px]'>Contact</h3>
                    <ul className='list-none'>
                        <li className='mb-[20px]'>Quote</li>
                        <li className='mb-[20px]'>infenito@gmail.com</li>
                        <li className='mb-[20px]'>9843753330</li>
                    </ul>
                </div>
                <div className='text-left ml-[109px]'>
                    <h3 className='text-[24px] mb-[30px]'>More</h3>
                    <ul className='list-none'>
                        <li className='mb-[20px]'>Instagram</li>
                        <li className='mb-[20px]'>FaceboInstagramok</li>
                        <li className='mb-[20px]'>Linkedin</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;