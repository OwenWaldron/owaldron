import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Owen from '../../assets/images/owen.png'
import styles from './HomePage.module.css';

const HomePage = () => {
    const [faded, setFaded] = useState(false);

    const navigate = useNavigate();

    const handleClick = (to: string) => {
        return () => {
            setFaded(true);
            setTimeout(() => {
                navigate(to, {state: {from: 'home'}})
            }, 1000)
        }
    }

    return (
        <div className={"flex flex-col items-center text-white martian-mono md:gap-24 gap-12 pt-24 " + (faded ? 'opacity-0 ' + styles['fade-out'] : '')}>
            <div className='flex flex-col items-center md:mt-8 mt-2 '>
                <img className='md:max-w-96 max-w-32 md:pb-2 pb-1' src={Owen} alt='' />
                <h1 className='text-3xl text-white'>Owen Waldron</h1>
            </div>
            <div className='flex md:text-2xl text-xl md:justify-between md:min-w-[800px] items-center md:flex-row flex-col min-w-full gap-6'>
                <button className="hover-underline text-3xl jersey-20" onClick={handleClick('/projects')} >
                    Projects
                </button>
                <button className="hover-underline text-3xl jersey-20" onClick={handleClick('/about')}>
                    About
                </button>
                <button className="hover-underline text-3xl jersey-20" onClick={handleClick('/blog')}>
                    Blog
                </button>
                <button className="hover-underline text-3xl jersey-20" onClick={handleClick('/logbook')}>
                    Logbook
                </button>
            </div>
        </div>
    );
}

export default HomePage;