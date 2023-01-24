import React, { useEffect, useRef, useState } from 'react'
import Moment from 'react-moment';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../../api/messageReq';
import { addSendMessage } from '../../../redux/sendMessageSlice';



const MessageContent = ({ messages, setSendMessage, setMessages, chat, receiveMessage }) => {

    useEffect(() => {
        console.log(receiveMessage !== null && receiveMessage.chatId === chat._id);
        if (receiveMessage !== null && receiveMessage.chatId === chat._id) {
            setMessages([...messages, receiveMessage])
        }
    },[receiveMessage])

    // const dispatch = useDispatch()
    const currentUserId = localStorage.getItem('id')
    const [newMessages, setNewMessages] = useState('')
    const scroll = useRef()

    const handleChange = (e) => {
        setNewMessages(e.target.value)
    }

    const handleSend = async (e) => {
        e.preventDefault()
        if (newMessages.length > 0) {
            const message = {
                senderId: currentUserId,
                text: newMessages,
                chatId: chat._id
            }
            // send message to database
            try {
                const { data } = await addMessage(message)
                setMessages([...messages, data])
                setNewMessages('')
            } catch (error) {
                console.log(error);
            }
            // send message to socket  server
            const receiverId = chat?.members?.find((id) => id !== currentUserId)
            setSendMessage({ ...message, receiverId })
            // dispatch(addSendMessage({ ...message, receiverId }))
        } else {

        }

    }
    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: 'smooth' })
    })
    return (
        <div className='h-96 border-2 bg-white px-5 relative'>
            <div className='h-80 overflow-y-scroll scrollbar-hide'>
                {messages?.map((message) => {
                    return (
                        <div className={message?.senderId !== currentUserId ? 'flex gap-3 mt-3' : 'flex gap-3 mt-3 justify-end'}>
                            {/* <div className='w-10 h-10 rounded-full overflow-hidden shadow-sm shadow-gray-500 cursor-pointer'>
                            <img src="https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg" alt="avatars" />
                        </div> */}
                            <div>
                                <div ref={scroll} className={message?.senderId !== currentUserId ? 'py-2 rounded-lg inline-block rounded-bl-none px-3 bg-blue-100 max-w-xl' :
                                    'py-2 rounded-lg inline-block rounded-br-none px-3 bg-snow-drift-200 max-w-xl'}>
                                    <p>
                                        {message?.text}
                                    </p>
                                    <p className='text-xs text-blue-600 text-end font-thin'>
                                        <Moment className={message?.senderId === currentUserId ? "text-[9px] text-blue-600 text-end font-thin" : 'text-[9px] text-blue-600 text-start font-thin'} fromNow>{message?.createdAt}</Moment>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <div className='absolute inset-x-0 bottom-0 py-2 px-2'>
                <div className='flex gap-2'>
                    <div className='w-5/6 border-2 rounded-l-2xl px-4 py-2 '>
                        <input value={newMessages} onChange={handleChange} className='w-full outline-none border-b-2 border-l-2 px-2' placeholder='Text message...' type="text" />
                    </div>
                    <div className='w-1/6'>
                        <button onClick={handleSend} className='bg-heavy-metal-800 text-white px-5 py-3 rounded-r-2xl'>
                            send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageContent