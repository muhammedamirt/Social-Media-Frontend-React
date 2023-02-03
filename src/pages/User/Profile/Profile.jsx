import Layout from "../../../components/User/Layout/Layout"
import Posts from "../../../components/User/ProfileTabs/Posts"
import Followers from "../../../components/User/ProfileTabs/Followers"
import Following from "../../../components/User/ProfileTabs/Following"
import AboutTab from "../../../components/User/ProfileTabs/AboutTab"
import { Card } from "../../../components/User/Card/Card"
import { useDispatch } from "react-redux"
import { routeChanged } from '../../../redux/topLoadingBar'
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { fetchFollowers, fetchFollowing, fetchOneUserProfile, followUser } from "../../../api/user"
import { createChat } from "../../../api/chatRequist"


const Profile = () => {


    const dispatch = useDispatch()
    const { userId } = useParams()
    const [specificUser, setSpecificUser] = useState({})
    const [isFollowed, setIsFollowed] = useState(null)
    const [followersCount, setFollowersCount] = useState(0)
    const [followersData, setFollowersData] = useState([])
    const [followingData, setFollowingData] = useState([])
    const fetchUserProfile = async () => {
        const data = await fetchOneUserProfile(userId)
        setIsFollowed(data?.followers?.includes(myId))
        setFollowersCount(data?.followers?.length)
        setSpecificUser(data)
    }

    useEffect(() => {
        fetchUserProfile()
    }, [userId])

    const myId = localStorage.getItem('id')
    dispatch(routeChanged())
    const navigate = useNavigate()
    const [postTab, setPostTab] = useState(false)
    const [followingTab, setFollowingTab] = useState(false)
    const [followersTab, setFollowersTab] = useState(false)
    const [aboutTab, setAboutTab] = useState(true)

    const handleClickOnFollowButton = async (userId) => {
        try {
            setIsFollowed(!isFollowed)
            await followUser(userId, myId)
            if (isFollowed) {
                setFollowersCount(followersCount - 1)
            } else {
                setFollowersCount(followersCount + 1)
            }
        } catch (err) {
            console.log(err);
        }
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
        setFollowingData(data)

    }
    const manageFollowersTab = async () => {
        setPostTab(false)
        setFollowingTab(false)
        setAboutTab(false)
        setFollowersTab(true)
        let data = await fetchFollowers(userId)
        setFollowersData(data)

    }
    const manageAboutTab = () => {
        setPostTab(false)
        setFollowingTab(false)
        setFollowersTab(false)
        setAboutTab(true)
    }

    const createMessage = async () => {
        const senderId = localStorage.getItem('id')
        const response = await createChat({ senderId, receiverId: userId });
        console.log(response);
        if (response.status === 200) {
            navigate('/chats')
        }else{
            console.log('llo');
            // navigate('/chats')
        }
    };

    let activeRoute = 'flex gap-2 items-center border-b-4 border-heavy-metal-800 bg-heavy-metal-400 cursor-pointer text-heavy-metal-500 bg-opacity-20 rounded-t-md'
    let inActiveRoute = 'flex gap-2 items-center hover:underline hover:font-bold cursor-pointer'
    return (
        <Layout>
            <h2 className="text-6xl mb-4 text-heavy-metal-500 opacity-40">Profile</h2>
            {Object.keys(specificUser).length !== 0 ?
                <div>
                    <Card>
                        <div className="relative">
                            <div className="h-40 overflow-hidden flex rounded-md justify-center items-center">
                                <img src={specificUser?.cover} alt="cover" />
                            </div>
                            <div className="flex absolute w-full justify-center md:justify-start  top-14 md:left-4">
                                <div className='w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover overflow-hidden shadow-sm shadow-gray-500'>
                                    <img src={specificUser?.picture} alt="avatars" className="w-full h-full" />
                                </div>
                            </div>
                            <div className="flex justify-center md:px-14">
                                <div>
                                    <h2 className="mt-8 sm:mt-10 md:mt-0 text-center text-md sm:text-3xl font-bold text-heavy-metal-800">
                                        {specificUser?.first_name} {specificUser?.last_name}
                                    </h2>
                                    <div className="text-center text-heavy-metal-500 leading-4">{specificUser?.place},{specificUser?.country}</div>
                                </div>
                            </div>
                            <div className="flex justify-around md:px-40 mt-10 gap-4">
                                <span onClick={managePostTab} className="bg-snow-drift-50 rounded-lg shadow-md w-28 shadow-heavy-metal-800 px-5 py-1 cursor-pointer hover:bg-snow-drift-300">
                                    <p className="text-lg font-bold text-center">{specificUser?.Posts?.length}</p>
                                    <p className="text-center">Posts</p>
                                </span>
                                <span onClick={manageFollowersTab} className="bg-snow-drift-50 rounded-lg shadow-md w-28 shadow-heavy-metal-800 px-5 py-1 cursor-pointer hover:bg-snow-drift-300">
                                    <p className="text-lg font-bold text-center">{followersCount}</p>
                                    <p className="text-center">Followers</p>
                                </span>
                                <span onClick={manageFollowingTab} className="bg-snow-drift-50 rounded-lg shadow-md w-28 shadow-heavy-metal-800 px-5 py-1 cursor-pointer hover:bg-snow-drift-300">
                                    <p className="text-lg font-bold text-center">{specificUser?.following?.length}</p>
                                    <p className="text-center">Following</p>
                                </span>
                            </div>
                            <div className="flex gap-3 mt-5 justify-center">
                                <div>
                                    {!isFollowed ?
                                        <button onClick={() => handleClickOnFollowButton(specificUser?._id)} className="hover:shadow-md hover:shadow-black flex gap-2 items-center bg-heavy-metal-800 rounded-xl shadow-md shadow-gray-500">
                                            <p className="text-white font-bold my-1 mx-7  ">Follow</p>
                                        </button> :
                                        <button onClick={() => handleClickOnFollowButton(specificUser?._id)} className="hover:shadow-md hover:shadow-black flex gap-2 items-center border-4 border-heavy-metal-800 rounded-xl shadow-md shadow-gray-500">
                                            <p className="text-heavy-metal-800 font-bold mx-7">Unfollow</p>
                                        </button>
                                    }
                                </div>
                                <div>
                                    <button onClick={createMessage} className="hover:shadow-md hover:shadow-black flex gap-2 items-center bg-heavy-metal-800 rounded-xl shadow-md shadow-gray-500">
                                        <p className="text-white font-bold my-1 mx-7 ">message</p>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-10 flex gap-5 justify-center">

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
                                    <span className="hidden sm:block">posts</span>
                                </span>
                                <span onClick={manageFollowersTab} className={followersTab ? activeRoute : inActiveRoute}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                    </svg>

                                    <span className="hidden sm:block">followers</span>
                                </span>
                                <span onClick={manageFollowingTab} className={followingTab ? activeRoute : inActiveRoute}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                    </svg>
                                    <span className="hidden sm:block">following</span>
                                </span>

                            </div>
                        </div>

                    </Card>
                    <div>
                        {aboutTab && <AboutTab />}
                        {postTab && <Posts />}
                        {followingTab && <Following followingData={followingData} />}
                        {followersTab && <Followers followersData={followersData} />}
                    </div>
                </div>
                :
                <Card>
                    <div className="py-4 rounded shadow-md w-full animate-pulse bg-snow-drift-50">
                        <div className="flex p-4 space-x-4 sm:px-8">
                            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-snow-drift-200"></div>
                            <div className="flex-1 py-2 space-y-4">
                                <div className="w-full h-3 rounded bg-snow-drift-200"></div>
                                <div className="w-5/6 h-3 rounded bg-snow-drift-200"></div>
                            </div>
                        </div>
                        <div className="p-4 space-y-4 sm:px-8">
                            <div className="w-full h-4 rounded bg-snow-drift-200"></div>
                            <div className="w-full h-4 rounded bg-snow-drift-200"></div>
                            <div className="w-3/4 h-4 rounded bg-snow-drift-200"></div>
                        </div>
                    </div>
                </Card>
            }
        </Layout>
    )
}

export default Profile