import { useState } from "react"
import { useDispatch } from "react-redux"
import { Card } from "../Card/Card"
import { routeChanged } from '../../../redux/topLoadingBar'
import CameraTab from "../CreatePostTabs/CameraTab"
import FileTab from "../CreatePostTabs/FileTab"
import StoryTab from "../CreatePostTabs/StoryTab"
import Layout from "../Layout/Layout"
import VideoTab from "../CreatePostTabs/VideoTab"


const CreatePost = () => {
    const dispatch = useDispatch()
    dispatch(routeChanged())
    const [cameraTab, setCameraTab] = useState(true)
    const [fileTab, setFileTab] = useState(false)
    const [storyTab, setStoryTab] = useState(false)
    const [videoTab, setVideoTab] = useState(false)
    const handleCameraTab = () => {
        setVideoTab(false)
        setStoryTab(false)
        setFileTab(false)
        setCameraTab(true)
    }
    const handleFileTab = () => {
        setVideoTab(false)
        setStoryTab(false)
        setCameraTab(false)
        setFileTab(true)
    }

    const handleStoryTab = () => {
        setVideoTab(false)
        setCameraTab(false)
        setFileTab(false)
        setStoryTab(true)
    }

    const handleVideoTab = () => {
        setVideoTab(true)
        setCameraTab(false)
        setFileTab(false)
        setStoryTab(false)
    }

    const activeTab = "flex gap-2 bg-heavy-metal-200 rounded-t py-2 px-3 border-b-4 border-heavy-metal-500 font-bold cursor-pointer"
    const inActiveTab = "hover:bg-heavy-metal-300 rounded py-2 px-5 font-bold flex gap-2 cursor-pointer"
    return (
        <Layout>
            <Card>
                <div className="flex justify-between px-6 ">
                    <span className={cameraTab ? activeTab : inActiveTab} onClick={handleCameraTab}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                        </svg>
                        <p className="hidden md:block">Camera</p>
                    </span>
                    <span className={fileTab ? activeTab : inActiveTab} onClick={handleFileTab}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 13.5H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                        </svg>

                        <p className="hidden md:block">Photos</p>
                    </span>
                    <span className={videoTab ? activeTab : inActiveTab} onClick={handleVideoTab}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <p className="hidden md:block">Videos</p>
                    </span>
                    <span className={storyTab ? activeTab : inActiveTab} onClick={handleStoryTab}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="hidden md:block">Story</p>
                    </span>

                </div>
            </Card>
            <div>
                {cameraTab && <CameraTab />}
                {fileTab && <FileTab />}
                {videoTab && <VideoTab />}
                {storyTab && <StoryTab />}
            </div>
        </Layout>
    )
}

export default CreatePost