import React, { useState } from 'react'
import UserChat from './UserChat'


const ChatContent = ({ chats }) => {
    
    // const [currentChat, setCurrentChat] = useState(null)
    return (
        <div className='w-full overflow-y-scroll scrollbar-hide'>
            <div className='grid  max-h-screen'>
                {chats.map((chat) => {
                    return (
                        <UserChat key={chat.id} chat={chat} />
                    )
                })}
            </div>
        </div>
    )
}

export default ChatContent