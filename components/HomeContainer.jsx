import React, { useState } from 'react'
import ColorPalette from './ColorPalette';
import Header from './Header';
import Sidebar from './SideBar';
import MainContent from './MainContent';

const HomeContainer = ({ children }) => {

    const [sidebarVisible, setSidebarVisible] = useState(false);

    return (
        <>

            <div className={`${sidebarVisible ? 'toggle-sidebar' : ''}`}>


                <Header sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />


                <Sidebar sidebarVisible={sidebarVisible} />

                {/* {children} */}

                <MainContent children={children} />



                <ColorPalette />


            </div>

        </>
    )
}

export default HomeContainer