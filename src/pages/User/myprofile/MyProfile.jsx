import { useEffect, useState } from "react"
import Layout from "../../../components/User/Layout/Layout"
import { Card } from "../../../components/User/Card/Card"
import { fetchFollowers, fetchFollowing, fetchOneUserProfile, userDataToProfile } from '../../../api/user'
import { useDispatch } from "react-redux"
import { routeChanged } from '../../../redux/topLoadingBar'
import ProtectedRoute from "../../../components/User/ProtectedRout/ProtectedRoute"
import { addUserData } from '../../../redux/userDataSlice'
import MyAboutTab from "../../../components/User/MyProfileTabs/MyAboutTab"
import MyPosts from "../../../components/User/MyProfileTabs/MyPosts"
import MyFollowing from "../../../components/User/MyProfileTabs/MyFollowing"
import MyFollowers from "../../../components/User/MyProfileTabs/MyFollowers"
import EditProfileModal from "../../../components/User/EditProfileModal/EditProfileModal"



const MyProfile = () => {

    const dispatch = useDispatch()
    dispatch(routeChanged())
    const [showModal, setShowModal] = useState(false)
    const [postTab, setPostTab] = useState(false)
    const [followingTab, setFollowingTab] = useState(false)
    const [followersTab, setFollowersTab] = useState(false)
    const [aboutTab, setAboutTab] = useState(true)
    const [userData, setUserData] = useState([])
    const [followingData, setFollowingData] = useState([])
    const [followersData, setFollowersData] = useState([])
    const userId = localStorage.getItem('id')
    const fetchUserProfile = async () => {
        const data = await fetchOneUserProfile(userId)
        setUserData(data)
    }

    useEffect(() => {
        fetchUserProfile()
        // const user = fetchUserProfile()
        // setUserData(user)
    }, [])


    const handleClose = () => {
        setShowModal(false)
    }


    const managePostTab = () => {
        setFollowingTab(false)
        setFollowersTab(false)
        setAboutTab(false)
        setPostTab(true)
    }
    const manageFollowingTab = async () => {
        setFollowersTab(false)
        setPostTab(false)
        setAboutTab(false)
        setFollowingTab(true)
        let data = await fetchFollowing(userId)
        if (data) {
            setFollowingData(data)
        }
    }
    const manageFollowersTab = async () => {
        setPostTab(false)
        setFollowingTab(false)
        setAboutTab(false)
        setFollowersTab(true)
        let data = await fetchFollowers(userId)
        if (data?.length !== 0) {
            setFollowersData(data)
        }
    }
    const manageAboutTab = () => {
        setPostTab(false)
        setFollowingTab(false)
        setFollowersTab(false)
        setAboutTab(true)
    }

    const fetchUserData = async (userId) => {
        const getUserData = await userDataToProfile(userId)
        dispatch(addUserData(getUserData))
    }

    useEffect(() => {
        let userId = localStorage.getItem('id')
        fetchUserData(userId)
    }, [])


    let activeRoute = 'flex gap-2 items-center border-b-4 border-heavy-metal-800 bg-heavy-metal-400 cursor-pointer text-heavy-metal-500 bg-opacity-20 rounded-t-md'
    let inActiveRoute = 'flex gap-2 items-center hover:underline hover:font-bold cursor-pointer'
    return (
        <ProtectedRoute>
            <Layout>
                {userData.length !== 0 ?
                    <div>
                        <Card>
                            <div className="relative">
                                <div className="h-40 overflow-hidden flex rounded-md justify-center items-center">
                                    <img src={userData?.cover} alt="cover" />
                                </div>
                                <div className="flex absolute w-full justify-center md:justify-start  top-14 md:left-4">
                                    <div className='w-36 h-36 rounded-full overflow-hidden object-cover shadow-sm shadow-gray-500'>
                                        <img src={userData?.picture} alt="avatars" className="w-full h-full object-cover " />
                                    </div>
                                </div>
                                <div className="flex justify-center md:px-14">
                                    <div>
                                        <h2 className="mt-10 sm:mt-10 md:mt-0 text-center text-md sm:text-3xl font-bold text-heavy-metal-800">
                                            {userData?.first_name}  {userData?.last_name === undefined ? "" : userData?.last_name}
                                        </h2>
                                        <div className="text-center text-heavy-metal-500 leading-4">{userData?.place},{userData?.country}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-around md:px-40 mt-10 gap-4">
                                <span onClick={managePostTab} className="bg-snow-drift-50 rounded-lg shadow-md w-28 shadow-heavy-metal-800 px-5 py-1 cursor-pointer hover:bg-snow-drift-300">
                                    <p className="text-lg font-bold text-center">{userData?.Posts?.length}</p>
                                    <p className="text-center">Posts</p>
                                </span>
                                <span onClick={manageFollowersTab} className="bg-snow-drift-50 rounded-lg shadow-md w-28 shadow-heavy-metal-800 px-5 py-1 cursor-pointer hover:bg-snow-drift-300">
                                    <p className="text-lg font-bold text-center">{userData?.followers?.length}</p>
                                    <p className="text-center">Followers</p>
                                </span>
                                <span onClick={manageFollowingTab} className="bg-snow-drift-50 rounded-lg shadow-md w-28 shadow-heavy-metal-800 px-5 py-1 cursor-pointer hover:bg-snow-drift-300">
                                    <p className="text-lg font-bold text-center">{userData?.following?.length}</p>
                                    <p className="text-center">Following</p>
                                </span>
                            </div>
                            <div className="mt-10 flex gap-5 justify-center">
                                <div>
                                    <button onClick={() => setShowModal(true)} className="flex gap-2 items-center bg-heavy-metal-800 rounded-xl shadow-md shadow-gray-500">
                                        <p className="text-white text-sm font-bold my-1 mx-7 ">Edit Profile</p>
                                    </button>
                                </div>
                                <span onClick={manageAboutTab} className={aboutTab ? activeRoute : inActiveRoute}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    <span className="hidden sm:block">About</span>
                                </span>
                                <span onClick={managePostTab} className={postTab ? activeRoute : inActiveRoute}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                                    </svg>
                                    <span className="hidden sm:block">Posts</span>
                                </span>
                                <span onClick={manageFollowersTab} className={followersTab ? activeRoute : inActiveRoute}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                    </svg>
                                    <span className="hidden sm:block">Followers</span>
                                </span>
                                <span onClick={manageFollowingTab} className={followingTab ? activeRoute : inActiveRoute}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                    </svg>
                                    <span className="hidden sm:block">Following</span>
                                </span>

                            </div>

                            <EditProfileModal visible={showModal} onClose={handleClose} user={userData} setUser={setUserData} />

                        </Card>
                        {aboutTab && <MyAboutTab />}
                        {postTab && <MyPosts />}
                        {followingTab && <MyFollowing followingData={followingData} />}
                        {followersTab && <MyFollowers followersData={followersData} />}
                    </div>
                    :
                    //  <Card>
                    <div class="flex items-center justify-center">
                        <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                        </div>
                    </div>
                    // {/* </Card> */}
                }
            </Layout>
        </ProtectedRoute>
    )
}

export default MyProfile