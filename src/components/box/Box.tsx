import React, { FC, ReactNode } from "react";

type BoxProps = {
    children: ReactNode;
    className?: string;
    manualPadding?: boolean;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const Box: FC<BoxProps> = ({ 
    children, 
    className,
    manualPadding = false,
    onClick
}) => {
    return <div onClick={onClick} className={"w-full bg-card-bg border-card-border border-[2px] p-2 " + className} >
        <div className="w-full h-full border-card-border border-[2px]">
            {children}
        </div>
    </div>
};

export default Box;
