import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchSavedPostsAPI } from '../../../api/user'
import { Card } from '../../../components/User/Card/Card'
import Layout from '../../../components/User/Layout/Layout'



const SavedPosts = () => {
    const userId = localStorage.getItem('id')
    const [savedPost, setSavedPost] = useState([])
    useEffect(() => {
        const fetchSavedPost = async () => {
            const response = await fetchSavedPostsAPI(userId)
            setSavedPost(response)
        }
        fetchSavedPost()
    }, [])
    return (
        <div>
            <Layout>
                <h2 className="text-3xl mb-4 underline text-heavy-metal-500 opacity-40">Saved</h2>
                <div>
                    <Card>
                        <div className="grid md:pl-10 grid-cols-3 gap-2 w-full">
                            {savedPost?.saved?.length !== 0 ?
                                savedPost.map((saved, i) => {
                                    return (<div key={saved?.saved?._id}>
                                        <Link to={'/singlePost'} state={{ postId: saved?.saved?._id }}>
                                            <img className="hover:shadow-lg shadow-snow-drift-300 rounded-md overflow-hidden h-20 w-20 md:h-44 md:w-44 flex items-center cursor-pointer object-cover" src={saved?.saved?.image} alt="posts" />
                                        </Link>
                                    </div>)
                                }) :
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                    </svg>
                                </div>
                            }
                        </div>
                    </Card>
                </div>
            </Layout>
        </div>
    )
}

export default SavedPosts