import React, { FC, ReactNode } from "react";
import Header from "../header/Header";

type ContainerProps = {
    children: ReactNode;
};

const PageContainer: FC<ContainerProps> = ({ children }) => {
    return (<>
        <Header />
        <div className="center" >
            {children}
        </div>
    </>);
};

export default PageContainer;
