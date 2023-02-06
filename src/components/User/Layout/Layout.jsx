import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Sidebar from '../Navigationbar/Sidenavbar'



const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="md:flex max-w-6xl mt-4 mx-auto gap-6">
                <div className="fixed md:static w-full bottom-0 mx-4 md:w-3/12 -mb-5 -ml-0 pt-5 z-40">
                    <Sidebar />
                </div>
                <div className="md:mx-0 mx-2 mt-5 md:w-8/12">
                    {children}
                </div>
            </div>
            <div className='mt-10'>
                <Footer />
            </div>
        </div>
    )
}

export default Layout