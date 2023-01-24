import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userChats } from '../../../api/chatRequist'
import { Card } from '../../../components/User/Card/Card'
import ChatContent from '../../../components/User/ChatItems/ChatContent'
import ChatHead from '../../../components/User/ChatItems/ChatHead'
import Layout from '../../../components/User/Layout/Layout'
import { routeChanged } from '../../../redux/topLoadingBar'
// import { io } from 'socket.io-client'
// import { useRef } from 'react'
// import { useSelector } from 'react-redux'
// import { sendMessage } from '../../../redux/sendMessageSlice'

const Chat = () => {
    const dispatch = useDispatch()
    // const message = useSelector(sendMessage)
    dispatch(routeChanged())

    const userId = localStorage.getItem('id')
    const [chats, setChats] = useState([])
    // const [onlineUsers, setOnlineUsers] = useState([])
//  const [sendMessage, setSendMessage] = useState(null)
//     const [receiveMessage, setReceiveMessage] = useState(null)
    // const socket = useRef()
    


    // useEffect(() => {
    //     socket.current = io('http://localhost:8800')
    //     socket.current.emit('new-user', userId)
    //     socket.current.on('get-users', (users) => {
    //         setOnlineUsers(users)
    //     })
    // }, [userId])

    useEffect(() => {
        const getChats = async () => {
            try {
                const { data } = await userChats(userId)
                console.log(data,'data');
                setChats(data)
            } catch (error) {
                console.log(error);
            }
        }
        getChats()
    }, [userId])
    
    // send message to the socket server

    // useEffect(() => {
    //     console.log(sendMessage);
    //     if (sendMessage !== null) {
    //         console.log(sendMessage,'message');
    //         socket.current.emit('send-message', sendMessage)
    //     }
    // }, [sendMessage])
    // // receive message from the socket server
    // useEffect(() => {
    //     socket.current.on('receive-message', (data) => {
    //         setReceiveMessage(data)
    //     })
    // }, [])

    return (
        <div>
            <Layout>
                <h2 className="hidden md:block text-2xl underline mb-4 text-heavy-metal-500 opacity-40">Chats</h2>
                <Card>
                    <div className='bg-white h-[400px] rounded-t-lg border-heavy-metal-700 border-2 '>
                        <ChatHead />
                        <div className='max-h-screen mb-1'>
                            <ChatContent chats={chats}   />
                        </div>
                    </div>
                </Card>
            </Layout>
        </div>
    )
}

export default Chat