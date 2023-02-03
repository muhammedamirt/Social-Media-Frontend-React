import React from 'react'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import SpeakerNotesOffIcon from '@mui/icons-material/SpeakerNotesOff';


const Comments = ({ data, longPressed }) => {
const currUser = localStorage.getItem('id')
    return (
        <div>
            <div className='sticky py-2 px-3 font-bold text-heavy-metal-900'>
                <h2>Comments</h2>
            </div>
            <div className='border-snow-drift-400 border-2 py-3 rounded-lg  mt-3 px-2 max-h-72 overflow-y-scroll scrollbar-hide'>

                {data?.length !== 0 ?
                    data?.map((commentData) => {
                        return (
                            <div key={commentData?._id} className={longPressed ? 'border-snow-drift-400 border-b-2 py-3 rounded-lg bg-heavy-metal-300' : 'border-snow-drift-400 border-b-2 py-3 rounded-lg'}>
                                <div className='flex gap-2 px-2'>
                                    <div className='w-9 h-9 rounded-full overflow-hidden shadow-sm shadow-gray-500'>
                                        <img src={commentData?.userId?.picture} alt="avatars" />
                                    </div>
                                    <div className='flex justify-between px-2 w-full'>
                                        <Link to={currUser===commentData?.userId?._id?'/myprofile':`/profile/${commentData?.userId?._id}`}>
                                            <h2 className='font-bold text-sm hover:underline cursor-pointer'>{commentData?.userId?.username}</h2>
                                        </Link>
                                        <div>
                                            <Moment className="text-xs text-snow-drift-400" fromNow>{commentData?.createdAt}</Moment>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-5'>
                                    <p className='text-sm font-semibold pt-3'>{commentData?.comment}</p>
                                </div>
                                {longPressed &&
                                    <div className='flex justify-end px-2'>
                                        <span className='grid text-sm text-red-600'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </span>
                                    </div>
                                }
                            </div>
                        )
                    })
                    : <div className='grid justify-center'>
                        <div className='flex items-center px-8'>
                            <SpeakerNotesOffIcon  className='w-20'/>
                        </div>
                        <p>No comments</p>
                    </div>
                }

            </div>
        </div>
    )
}

export default Comments