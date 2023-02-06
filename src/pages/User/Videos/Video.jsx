import React, { useEffect, useState } from 'react'
import { getAllVideoAPI } from '../../../api/user'
import Layout from '../../../components/User/Layout/Layout'
import VideoCard from '../../../components/User/VideoCard/VideoCard'


const Video = () => {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        const getVideoData = async () => {
            const response = await getAllVideoAPI()
            setVideos(response)
        }
        getVideoData()
    }, [])

    return (
        <div>
            <Layout>
                <h2 className="text-2xl underline mb-4 text-heavy-metal-500 opacity-40">Settings</h2>
                {videos.length !== 0 ?
                videos.map((video)=>{
                    return (
                        <VideoCard video={video} />
                    )
                })
                    : null}
            </Layout>
        </div>
    )
}

export default Video