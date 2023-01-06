import { Card } from "../Card/Card"
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
    const location = useLocation()
    const activeElement = 'flex md:gap-1 md:gap-3 py-3 text-sm md:text-md bg-heavy-metal-300 md:-mx-10 px-6 md:px-10 rounded-md  shadow-heavy-metal-100'
    const inActiveElement = 'flex md:gap-1 md:gap-3 py-3 text-sm md:text-md hover:bg-heavy-metal-100 md:-mx-10 px-6 md:px-10 rounded-md transition-all hover:scale-110'
    return (
            <Card>
                <div className="md:px-4 md:py-2 flex justify-between w-full md:block">
                    <h2 className="text-heavy-metal-800 font-bold mb-3 hidden md:block">Navigation</h2>
                    <Link to={'/'}>
                        <p className={location?.pathname === "/" ? activeElement : inActiveElement}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <span className="hidden md:block">Home</span>
                        </p>
                    </Link>
                    <Link to={'/messages'}>
                        <p className={location?.pathname === "/messages" ? activeElement : inActiveElement}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
                            </svg>
                            <span className="hidden md:block">Messages</span>
                        </p>
                    </Link>
                    <Link to={"/create"}>
                        <p className={location?.pathname === "/create" ? activeElement : inActiveElement}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="hidden md:block">Create</span>
                        </p>
                    </Link>
                    <Link to={'/notifications'}>
                        <p className={location?.pathname === "/notifications" ? activeElement : inActiveElement}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                            </svg>
                            <span className="hidden md:block">Notification</span>
                        </p>
                    </Link>
                    <Link to={'/search'}>
                        <p className={location?.pathname === "/search" ? activeElement : inActiveElement}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            <span className="hidden md:block">Search</span>
                        </p>
                    </Link>
                </div>
            </Card>
    )
}

export default Sidebar