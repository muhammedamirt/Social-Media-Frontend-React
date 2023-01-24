import React, { useState } from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useSelector } from 'react-redux';
import { savePostAPI } from '../../../api/postReq';

const PostSettings = ({ postData }) => {
    const userId = localStorage.getItem('id')
    const currUser = useSelector((state) => state.userData.userData)
    const [savedStatus, setSavedStatus] = useState(currUser.saved.includes(postData._id))
    console.log(currUser, 'currUser');
    const handleSavePost = () => {
        setSavedStatus(!savedStatus)
        savePostAPI(userId, postData?._id)
    }
    return (
        <div>
            {userId !== postData?.userId?._id ?
                <div className="absolute right-6 w-52 bg-white shadow-md shadow-gray-500 p-3 rounded-md">
                    <div onClick={handleSavePost}>
                        {savedStatus ?
                            <p className="flex py-2 gap-2  hover:bg-heavy-metal-100 -mx-3 px-10 rounded-md transition-all hover:scale-110">
                                <BookmarkIcon />
                                Saved
                            </p>
                            : <p className="flex py-2 gap-2  hover:bg-heavy-metal-100 -mx-3 px-10 rounded-md transition-all hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                </svg>
                                Save
                            </p>}
                    </div>
                    <p className="flex py-2 gap-2  hover:bg-heavy-metal-100 -mx-3 px-10 rounded-md transition-all hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                        Report</p>
                    <p className="flex py-2 gap-2 hover:bg-heavy-metal-100 -mx-3 px-10 rounded-md transition-all hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                        Hide</p>
                    <p className="flex py-2 gap-2 hover:bg-heavy-metal-100 -mx-3 px-10 rounded-md transition-all hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        Copy link</p>
                </div>
                : <div className="absolute right-6 w-52 bg-white shadow-md shadow-gray-500 p-3 rounded-md">
                    <div onClick={handleSavePost}>
                        <p className="flex py-2 gap-2  hover:bg-heavy-metal-100 -mx-3 px-10 rounded-md transition-all hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>
                            Save
                        </p>
                    </div>
                    <p className="flex py-2 gap-2  hover:bg-heavy-metal-100 -mx-3 px-10 rounded-md transition-all hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                        Edit</p>
                    <p className="flex py-2 gap-2 hover:bg-heavy-metal-100 -mx-3 px-10 rounded-md transition-all hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                        Delete</p>
                    <p className="flex py-2 gap-2 hover:bg-heavy-metal-100 -mx-3 px-10 rounded-md transition-all hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        Copy link</p>
                </div>}
        </div>
    )
}

export default PostSettings