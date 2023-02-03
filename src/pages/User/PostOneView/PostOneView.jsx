import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { onePostDataAPI } from '../../../api/postReq'
import Layout from '../../../components/User/Layout/Layout'
import PostCard from "../../../components/User/PostCard/PostCard"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const PostOneView = () => {
    const { state } = useLocation()
    const [postData, setPostData] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        try {
            const getOnePostData = async () => {
                const response = await onePostDataAPI(state?.postId)
                setPostData(response)
            }
            getOnePostData()
        } catch (e) {
            console.log(e);
        }
    }, [state])
    const handleBackButton = () => {
        navigate(-1)
    }
    return (
        <div>
            <Layout>
                <button className='bg-snow-drift-100 shadow-md hover:bg-snow-drift-200 shadow-heavy-metal-500 text-heavy-metal-900 py-1 px-4 my-5 rounded-xl'>
                    <div className='flex gap-2' onClick={handleBackButton}>
                        <KeyboardArrowLeftIcon />
                        back
                    </div>
                </button>
                {Object.keys(postData).length !== 0 ?
                    <div>
                        <PostCard post={postData} />
                    </div>
                    : null}
            </Layout>
        </div>
    )
}

export default PostOneView