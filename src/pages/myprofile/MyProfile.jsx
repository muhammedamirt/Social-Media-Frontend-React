import Layout from "../../components/Layout/Layout"
import Posts from "../../components/profileTabs/Posts"
import Followers from "../../components/profileTabs/Followers"
import Following from "../../components/profileTabs/Following"
import AboutTab from "../../components/profileTabs/AboutTab"
import { Card } from "../../components/Card/Card"
import { useDispatch } from "react-redux"
import { routeChanged } from '../../redux/topLoadingBar'
import { useState } from "react"
import ProtectedRoute from "../../components/ProtectedRout/ProtectedRoute"


const MyProfile = () => {
    const dispatch = useDispatch()
    dispatch(routeChanged())
    const [postTab, setPostTab] = useState(false)
    const [followingTab, setFollowingTab] = useState(false)
    const [followersTab, setFollowersTab] = useState(false)
    const [aboutTab, setAboutTab] = useState(true)


    const managePostTab = () => {
        setFollowingTab(false)
        setFollowersTab(false)
        setAboutTab(false)
        setPostTab(true)
    }
    const manageFollowingTab = () => {
        setFollowersTab(false)
        setPostTab(false)
        setAboutTab(false)
        setFollowingTab(true)
    }
    const manageFollowersTab = () => {
        setPostTab(false)
        setFollowingTab(false)
        setAboutTab(false)
        setFollowersTab(true)
    }
    const manageAboutTab = () => {
        setPostTab(false)
        setFollowingTab(false)
        setFollowersTab(false)
        setAboutTab(true)
    }


    let activeRoute = 'flex gap-2 items-center border-b-4 border-heavy-metal-800 bg-heavy-metal-400 cursor-pointer text-heavy-metal-500 bg-opacity-20 rounded-t-md'
    let inActiveRoute = 'flex gap-2 items-center hover:underline hover:font-bold cursor-pointer'
    return (
        <ProtectedRoute>
            <Layout>
                <Card>
                    <div className="relative">
                        <div className="h-40 overflow-hidden flex rounded-md justify-center items-center">
                            <img src="https://www.lonelyplanet.fr/sites/lonelyplanet/files/styles/manual_crop/public/media/destination/slider/mobile/gettyrf_461358497.jpg?itok=m-6c7QZ0" alt="cover" />
                        </div>
                        <div className="absolute top-14 left-4">
                            <div className='w-36 rounded-full overflow-hidden shadow-sm shadow-gray-500'>
                                <img src="https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg" alt="avatars" />
                            </div>
                        </div>
                        <div className="ml-40">

                            <h2 className="text-3xl font-bold text-heavy-metal-800">
                                Christopher
                            </h2>
                            <div className="text-heavy-metal-500 leading-4">place,country</div>
                        </div>
                        <div className="mt-10 flex gap-5 justify-center">
                            <div>
                                <button className="flex gap-2 items-center bg-heavy-metal-800 rounded-xl shadow-md shadow-gray-500">
                                    <p className="text-white font-bold my-1 mx-7 ">Edit Profile</p>
                                </button>
                            </div>
                            <span onClick={manageAboutTab} className={aboutTab ? activeRoute : inActiveRoute}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                About
                            </span>
                            <span onClick={managePostTab} className={postTab ? activeRoute : inActiveRoute}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                                </svg>

                                posts
                            </span>
                            <span onClick={manageFollowersTab} className={followersTab ? activeRoute : inActiveRoute}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                </svg>

                                followers
                            </span>
                            <span onClick={manageFollowingTab} className={followingTab ? activeRoute : inActiveRoute}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                </svg>
                                following
                            </span>

                        </div>
                    </div>
                </Card>
                {aboutTab && <AboutTab />}
                {postTab && <Posts />}
                {followingTab && <Following />}
                {followersTab && <Followers />}
            </Layout>
        </ProtectedRoute>
    )
}

export default MyProfile