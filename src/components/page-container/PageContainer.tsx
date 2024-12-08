import React, { FC, ReactNode } from "react";
import Header from "../header/Header";
import { useLocation } from "react-router-dom";
import styles from './PageContainer.module.css';

type ContainerProps = {
    children: ReactNode;
};

const PageContainer: FC<ContainerProps> = ({ children }) => {
    const location = useLocation();
    const from = location.state && location.state['from'];

    const fromHome = from === 'home';
    
    return (
        <article className={fromHome? styles['fade-in'] : ''}>
            <Header />
            <div className="center" >
                {children}
            </div>
        </article>
    );
};

export default PageContainer;
