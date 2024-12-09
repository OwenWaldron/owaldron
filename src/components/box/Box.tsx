import React, { FC, ReactNode } from "react";

type BoxProps = {
    children: ReactNode;
    className?: string;
    manualPadding?: boolean;
};

const Box: FC<BoxProps> = ({ 
    children, 
    className,
    manualPadding = false
}) => {
    const paddingClass = " py-10 md:px-16 px-8 ";
    const baseClass = "w-full bg-card-gray rounded-md border-card-border-gray border-[3px] " 
    return <div className={baseClass + (manualPadding ? '' : paddingClass) + className} >
        {children}
    </div>
};

export default Box;
