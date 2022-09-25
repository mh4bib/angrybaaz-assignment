import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import brand from '../../assets/brand.png';

const Navbar = () => {
    const [navTextColor, setnavTextColor] = useState("10rem");
    const [navColor, setnavColor] = useState("transparent");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("#8F71FF") : setnavColor("transparent");
        window.scrollY > 10 ? setnavTextColor("white") : setnavTextColor("black");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    
    const menu = <>
        <li className='ml-[24px] inline'><Link to={'/'}>Home</Link></li>
        <li className='ml-[24px] inline'><Link to={'/'}>Portfolio</Link></li>
        <li className='ml-[24px] inline'><Link to={'/'}>About Us</Link></li>
        <li className='ml-[24px] inline'><Link to={'/'}>Pricing</Link></li>
    </>
    return (
        <div
            style={{
                backgroundColor: navColor,
                color: navTextColor,
                transition: "all 0.5s"
            }}
            className='flex justify-between items-end pt-[25px] bg-blue-200 px-[132px]'>
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