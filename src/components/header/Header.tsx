import React from 'react';
import { Link } from 'react-router-dom';
import Owen from '../../assets/images/owensmall.png';

const Header = () => {
    return (
        <header className='flex mb-12 bg-header-gray border-b-4 border-header-accent text-white'>
            <div className='center flex justify-between items-end md:pb-4 pb-2'>
                <Link to='/' className='flex flex-col items-center md:mt-6 mt-2 '>
                    <img className='md:max-w-14 max-w-12' src={Owen} alt='' />
                    <h1 className='text-white md:block hidden text-2xl text-[1.75rem]'>
                        Owen Waldron
                    </h1>
                </Link>
                <div className='flex md:gap-8 gap-4 text-2xl'>
                    <Link className='hover-underline' to={'/projects'} >
                        Projects
                    </Link>
                    <Link className='hover-underline' to={'/about'} >
                        About
                    </Link>
                    <Link className='hover-underline' to={'/logbook'} >
                        Logbook
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;