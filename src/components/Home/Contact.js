import React from 'react';
import '../../css/contact.css';
import { FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';
import contactus from '../../assets/113015-contact-us.gif';

const Contact = () => {
    return (
        <div className='grid grid-cols-2 mx-[132px]'>
            <div className='text-left'>
                <h3 className='text-[24px] font-extrabold'>Let's Buid Something <br /> AWESOME !</h3>
                <p>One of the Tech Experts will reach out to you within next <br /> 48 business hours.</p>
                <div><img src={contactus} alt="" /></div>
                <div>
                    <h2 className='text-[24px] font-extrabold'>Follow us on</h2>
                    <div className='flex text-[28px] mt-[16px]'>
                        <FaInstagramSquare></FaInstagramSquare>
                        <FaTwitter className='mx-[34px]'></FaTwitter>
                        <FaLinkedin></FaLinkedin>
                    </div>
                </div>
            </div>
            <div className='contact-bg p-[42px] text-white text-left'>
                <h3 className='text-[24px] font-extrabold ml-6'>Drop us a message</h3>
                <p className='text-[16px] mb-[34px] ml-6'>We would love to hear everything from you</p>
                
                <form className='px-6 py-4'>
                    <label>Name</label><br />
                    <input type="text" name="user_name" required className='w-full p-[5px] pl-2 my-[12px] focus:outline-none rounded' /><br />
                    <label>Email</label><br />
                    <input type="email" name="user_email" required className='w-full p-[5px] pl-2 my-[12px] focus:outline-none rounded' /><br />
                    <label>Contact Number</label><br />
                    <input type="number" name="user_number" required className='w-full p-[5px] pl-2 my-[12px] focus:outline-none rounded' /><br />
                    <label>Subject</label><br />
                    <input type="text" name="subject" required className='w-full p-[5px] pl-2 my-[12px] focus:outline-none rounded' /><br />
                    <label>Message</label><br />
                    <textarea name="message" rows={5} required className='w-full p-[5px] pl-2 my-[12px] focus:outline-none rounded' /><br />
                    <input className='px-[102px] py-[18px] bg-black mt-[36px]' type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;