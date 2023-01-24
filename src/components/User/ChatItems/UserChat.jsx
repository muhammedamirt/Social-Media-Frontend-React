import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { userDataToProfile } from '../../../api/user'

const UserChat = ({ chat }) => {
    const [userData, setUserData] = useState(null)
    const currentUserId = localStorage.getItem('id')
    useEffect(() => {
        try {
            let userId = chat?.members?.find((id) => id !== currentUserId)
            const getUserData = async () => {
                const data = await userDataToProfile(userId)
                setUserData(data)
            }
            getUserData()
        } catch (error) {
            console.log(error);
        }

    }, [])

    // const chatHandle = {
    //     chat: chat,
    //     currentUser:{
    //         currentUser:currentUserId,  
    //         setSendMessage,
    //         receiveMessage
    //     },

    // }
    // useEffect(()=>{
    //     setImportant(chatHandle)
    // },[])

    return (

        <Link Link to={'/message'} state={{ chat: chat, currentUser: currentUserId }} >
            <div className='  border-heavy-metal-900 bg-snow-drift-50 hover:bg-snow-drift-300'>
                <div className='flex gap-4 px-2 py-2'>
                    <Link to={'/profile'}>
                        <div className='w-12 h-12 rounded-full overflow-hidden shadow-sm shadow-gray-500 cursor-pointer'>
                            <img src={userData?.picture} alt="avatars" />
                        </div>
                    </Link>
                    <div className='flex justify-between w-full'>
                        <div>
                            <p className='font-bold'>{userData?.first_name} {userData?.last_name}</p>
                            <p className='text-sm opacity-70'>{userData?.username}</p>
                        </div>                                            <div>
                            <p className='text-sm'>11:00 pm</p>
                            <div className='rounded-full h-5 w-5 bg-red-600 ml-3'>
                                <p className='text-center text-sm text-white font-bold'>1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link >


    )
}

export default UserChat