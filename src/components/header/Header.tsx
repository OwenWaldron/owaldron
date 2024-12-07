import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Owen from '../../assets/images/owensmall.png';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className='flex min-h-36 mb-12 bg-header-gray border-b-4 border-header-accent-gray text-white martian-mono'>
            <div className='flex justify-between mx-auto lg:min-w-[1024px] min-w-full pb-4'>
                <Link to='/' className='flex flex-col items-center mt-auto'>
                    <img className='max-w-16 pb-2' src={Owen} alt='' />
                    <h1 className='text-white'>Owen Waldron</h1>
                </Link>
                <div className='flex gap-8 mt-auto'>
                    <Link className={styles['hover-underline']} to={'/projects'} >
                        Projects
                    </Link>
                    <Link className={styles['hover-underline']} to={'/about'} >
                        About
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;