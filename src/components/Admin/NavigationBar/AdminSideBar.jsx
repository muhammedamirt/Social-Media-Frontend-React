import React from 'react'
import { Link, useParams } from 'react-router-dom'
import AdminCard from '../Card/AdminCard'
import LineAxisOutlinedIcon from '@mui/icons-material/LineAxisOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
// import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import SpatialAudioOffOutlinedIcon from '@mui/icons-material/SpatialAudioOffOutlined';

const AdminSideBar = () => {
    const location = useParams()
    const activeElement = 'flex md:gap-1 md:gap-3 py-3 text-sm md:text-md bg-heavy-metal-300 md:-mx-10 px-6 md:px-10 rounded-md  shadow-heavy-metal-100'
    const inActiveElement = 'flex md:gap-1 md:gap-3 py-3 text-sm md:text-md hover:bg-heavy-metal-100 md:-mx-10 px-6 md:px-10 rounded-md transition-all hover:scale-110'
    return (
        <div>
            <AdminCard>
                <div className="md:px-4 md:py-2 flex justify-between w-full md:block">
                    <h2 className="text-heavy-metal-800 font-bold mb-3 hidden md:block">Navigation</h2>
                    <Link to={'/admin'}>
                        <p className={location?.pathname === "/admin" ? activeElement : inActiveElement}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <span className="hidden md:block">Home</span>
                        </p>
                    </Link>
                    <Link to={'/admin'}>
                        <p className={location?.pathname === '/admin/' || location?.pathname === '/message' ? activeElement : inActiveElement}>
                        <LineAxisOutlinedIcon/>
                            <span className="hidden md:block">Dashboard</span>
                        </p>
                    </Link>
                    <Link to={"/admin/users"}>
                        <p className={location?.pathname === "/admin/" ? activeElement : inActiveElement}>
                        <Groups2OutlinedIcon/>
                            <span className="hidden md:block">Users</span>
                        </p>
                    </Link>
                    <Link to={'/admin'}>
                        <p className={location?.pathname === "/admin/" ? activeElement : inActiveElement}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                            </svg>
                            <span className="hidden md:block">Notification</span>
                        </p>
                    </Link>
                    <Link to={'/admin'}>
                        <p className={location?.pathname === "/admin/" ? activeElement : inActiveElement}>
                            <SpatialAudioOffOutlinedIcon />
                            <span className="hidden md:block">Reports</span>
                        </p>
                    </Link>
                </div>
            </AdminCard>
        </div>
    )
}

export default AdminSideBar