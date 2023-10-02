import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='text-white w-full mt-20'>
            <div className='grid md:grid-cols-2'>
                <div className='space-y-1 text-center bg-slate-800 p-5'>
                    <h2 className='text-xl font-bold'>Contact Us</h2>
                    <p>123 ABS Street, Dhanmondi-1205</p>
                    <p>+880 1710-11 01 10</p>
                    <p>Mon-Fri: 08.00-22.00</p>
                    <p>Sat-Sun: 10.00-23.00</p>
                </div>
                <div className='space-y-2 text-center bg-gray-900 p-5'>
                    <h2 className='text-xl font-bold'>Follow us</h2>
                    <p>Join us on social media</p>
                    <div className='flex gap-3 justify-center pt-3'>
                        <a href="#"><FaFacebook className='text-3xl hover:text-gray-500' /></a>
                        <a href="#"><FaLinkedinIn className='text-3xl hover:text-gray-500' /></a>
                        <a href="#"><FaTwitter className='text-3xl hover:text-gray-500' /></a>
                        <a href="#"><FaYoutube className='text-3xl hover:text-gray-500' /></a>
                    </div>
                </div>
            </div>
            <div className='pt-3 pb-3 bg-gray-950'>
                <p className='text-center'><small>Copyright © 2023 All rights reserved.</small></p>
            </div>
        </div>
    );
};

export default Footer;