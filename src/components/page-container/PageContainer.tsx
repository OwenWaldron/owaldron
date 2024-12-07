import React, { ReactNode } from "react";
import Header from "../header/Header";

type ContainerProps = {
    children: ReactNode;
};

const PageContainer: React.FC<ContainerProps> = ({ children }) => {
    return (<>
        <Header />
        <div className="mx-auto max-w-[1120px]" >
            {children}
        </div>
    </>);
};

export default PageContainer;
