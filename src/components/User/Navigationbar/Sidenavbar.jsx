import { Card } from "../Card/Card"
import { Link, useLocation } from 'react-router-dom'
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SearchIcon from '@mui/icons-material/Search';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';

const Sidebar = () => {
    const location = useLocation()
    const activeElement = 'flex md:gap-1 md:gap-3 py-3 text-sm md:text-md bg-heavy-metal-300 md:-mx-10 px-6 md:px-10 rounded-md  shadow-heavy-metal-100'
    const inActiveElement = 'flex md:gap-1 md:gap-3 py-3 text-sm md:text-md hover:bg-heavy-metal-100 md:-mx-10 px-6 md:px-10 rounded-md transition-all hover:scale-110'
    return (
        <Card>
            <div className="md:px-4 md:py-2 flex justify-between w-full md:block">
                <h2 className="text-heavy-metal-800 font-bold mb-3 hidden md:block">Menu Bar</h2>
                <Link to={'/'}>
                    <p className={location?.pathname === "/" ? activeElement : inActiveElement}>
                        <HomeIcon />
                        <span className="hidden md:block">Home</span>
                    </p>
                </Link>
                <Link to={'/chats'}>
                    <p className={location?.pathname === '/chats' || location?.pathname === '/message' ? activeElement : inActiveElement}>
                        <ChatIcon />
                        <span className="hidden md:block">Chats</span>
                    </p>
                </Link>
                <Link to={"/create"}>
                    <p className={location?.pathname === "/create" ? activeElement : inActiveElement}>
                       <AddBoxIcon />
                        <span className="hidden md:block">Create</span>
                    </p>
                </Link>
                <Link to={'/shortVideos'}>
                    <p className={location?.pathname === "/shortVideos" ? activeElement : inActiveElement}>
                       <SlowMotionVideoIcon />
                        <span className="hidden md:block">Shorts</span>
                    </p>
                </Link>
                <Link to={'/search'}>
                    <p className={location?.pathname === "/search" ? activeElement : inActiveElement}>
                        <SearchIcon />
                        <span className="hidden md:block">Search</span>
                    </p>
                </Link>
            </div>
        </Card>
    )
}

export default Sidebar