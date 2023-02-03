import React from 'react'
import ChatSide from '../../../components/User/ChatUi/ChatSide'
import Header from '../../../components/User/Header/Header'

const ChatPage = () => {
    return (
        <div className="">
            <Header />
            <div className="flex ">
                <div className="w-full max-sm:w-full max-md:w-full max-lg:w-full">
                    <ChatSide />
                </div>
            </div>
        </div>
    )
}

export default ChatPage