import React from 'react';
import { Link } from 'react-router-dom';
import Owen from '../../assets/images/owensmall.png';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className='flex mb-12 bg-header-gray border-b-4 border-header-accent-gray text-white martian-mono'>
            <div className='center flex justify-between items-end md:pb-4 pb-2'>
                <Link to='/' className='flex flex-col items-center md:mt-8 mt-2'>
                    <img className='md:max-w-16 max-w-12 md:pb-2 pb-1' src={Owen} alt='' />
                    <h1 className='text-white md:block hidden'>Owen Waldron</h1>
                </Link>
                <div className='flex gap-8'>
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