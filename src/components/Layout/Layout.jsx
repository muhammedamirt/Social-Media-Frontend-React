import React from 'react'
import Sidebar from '../Navigationbar/Sidenavbar'



const Layout = ({children}) => {
    return (
        <div className="flex max-w-6xl mt-4 mx-auto gap-6">
            <div className="w-3/12">
                <Sidebar />
            </div>
            <div className="w-8/12">
                {children}
            </div>
        </div>
    )
}

export default Layout