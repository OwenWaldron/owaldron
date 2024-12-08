import React, { FC, ReactNode } from "react";

type BoxProps = {
    children: ReactNode;
    className?: string;
};

const Box: FC<BoxProps> = ({ children, className }) => {
    return <div className={"w-full bg-card-gray py-10 md:px-16 px-8 rounded-md border-card-border-gray border-[3px]" + (className ?? '')} >
        {children}
    </div>
};

export default Box;
