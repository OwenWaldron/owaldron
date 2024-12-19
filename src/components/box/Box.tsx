import React, { FC, ReactNode } from "react";
import styles from './Box.module.css';

type BoxProps = {
    children: ReactNode;
    label?: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const Box: FC<BoxProps> = ({ 
    children, 
    label,
    className,
    onClick
}) => {
    const hline = <hr className="border-[1px] border-card-border" />;

    return <div onClick={onClick} className={styles['boxy-shadow'] + " flex flex-col w-full bg-card-bg border-card-border border-[2px] p-2 pt-0 " + className} >
        <div className="py-1 flex w-full items-center gap-2">
            <div className="flex gap-[2px] flex-col w-full">
                {hline}
                {hline}
                {hline}
            </div>
            {label && <h2 className="my-[-2px] text-card-border whitespace-nowrap">{label}</h2>}
        </div>
        <div className="w-full border-card-border border-[2px] flex-1">
            {children}
        </div>
    </div>
};

export default Box;
