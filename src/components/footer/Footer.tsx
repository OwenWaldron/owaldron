import React from 'react';
import Github from '../../assets/images/Github.svg';
import LinkedIn from '../../assets/images/Linkedin.svg';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='w-full flex justify-center py-12 gap-4'>
            <a className='bg-owaldron-blue' href='https://github.com/OwenWaldron' >
                <img src={Github} alt='Github' className=' invert-1' />
            </a>
            <a className='bg-owaldron-blue' href='https://www.linkedin.com/in/owaldron/' >
                <img src={LinkedIn} alt='LinkedIn' />
            </a>
        </footer>
    )
}

export default Footer;
