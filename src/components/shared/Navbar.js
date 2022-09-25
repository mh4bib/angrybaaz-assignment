import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import brand from '../../assets/brand.png';

const Navbar = () => {
    const menu = <>
        <li className='ml-[24px] inline'><Link to={'/'}>Home</Link></li>
        <li className='ml-[24px] inline'><Link to={'/'}>Portfolio</Link></li>
        <li className='ml-[24px] inline'><Link to={'/'}>About Us</Link></li>
        <li className='ml-[24px] inline'><Link to={'/'}>Pricing</Link></li>
    </>
    return (
        <div className='flex justify-between items-end pt-[25px] px-[132px]'>
            <div>
                <img className='' src={brand} alt="brand" />
            </div>
            <div className='my-auto'>
                <ul className='list-none font-bold uppercase'>
                    {menu}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;