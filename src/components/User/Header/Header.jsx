import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';


const Header = () => {
    const userData = useSelector((state) => state.userData.userData)
    return (
        <div className="flex justify-between bg-heavy-metal-800 shadow-md w-full h-16 shadow-heavy-metal-400 p-4 mb-5 sticky top-0 z-50">
            <div>
                <Link to={'/'}>
                    <h2 className="ml-5 font-bold text-snow-drift-200 text-xl md:text-2xl">WouldDo Media</h2>
                </Link>
            </div>
            <div className="flex gap-2 mr-2">
                <span className="text-left mt-1 text-white">
                    <Link to={'/notifications'}>
                        <NotificationsIcon />
                    </Link>
                </span>
                <span className="text-left mt-1 text-white hover:animate-spin">
                    <Link to={'/settings'}>
                        <SettingsIcon />
                    </Link>
                </span>
                <Link to={'/myprofile'} >
                    <div className='w-8 h-8 rounded-full border-white border overflow-hidden shadow-sm shadow-gray-500'>
                        <img src={userData?.picture} alt="avatars" />
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default Header