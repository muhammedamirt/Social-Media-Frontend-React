import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getMessages } from '../../../api/messageReq'
import { userDataToProfile } from '../../../api/user'
import { Card } from '../../../components/User/Card/Card'
import MessageContent from '../../../components/User/ChatItems/MessageContent'
import MessageHead from '../../../components/User/ChatItems/MessageHead'
import Layout from '../../../components/User/Layout/Layout'
import { routeChanged } from '../../../redux/topLoadingBar'
import { io } from 'socket.io-client'


const Message = () => {
    const socket = useRef()
    const dispatch = useDispatch()
    dispatch(routeChanged())
    const [onlineUsers, setOnlineUsers] = useState([])
    const [userData, setUserData] = useState(null)
    const [messages, setMessages] = useState([])
    const [sendMessage, setSendMessage] = useState(null)
    const [receiveMessage, setReceiveMessage] = useState({})
    const location = useLocation()
    const { chat, currentUser } = location.state

    useEffect(() => {
        socket.current = io('http://localhost:8800')
        socket.current.emit('new-user', currentUser)
        socket.current.on('get-users', (users) => {
            setOnlineUsers(users)
        })
    }, [currentUser])



    useEffect(() => {
        if (sendMessage !== null) {
            console.log(sendMessage, 'send message');
            socket.current.emit('send-message', sendMessage)
        }
    }, [sendMessage])
    // receive message from the socket server
    useEffect(() => {
        socket.current.on('receive-message', (data) => {
            console.log(data, 'recieve data');
            setReceiveMessage(data)
        })
    }, [receiveMessage])

    // useEffect(() => {
    //     console.log(receiveMessage !== null && receiveMessage.chatId === chat._id);
    //     if (receiveMessage !== null && receiveMessage.chatId === chat._id) {
    //         setMessages([...messages, receiveMessage])
    //     }
    // }, [receiveMessage, messages, chat._id])

    useEffect(() => {
        try {
            let userId = chat?.members?.find((id) => id !== currentUser)
            const getUserData = async () => {
                const data = await userDataToProfile(userId)
                setUserData(data)
            }
            if (chat !== null) getUserData()
        } catch (error) {
            console.log(error);
        }
    }, [chat, currentUser])
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const { data } = await getMessages(chat._id)
                setMessages(data)
            } catch (error) {
                console.log(error);
            }
        }
        if (chat !== null) fetchMessages()
    }, [chat])

    const checkOnlineStatus = (chat) => {
        const chatMembers = chat.members.find((member) => member !== currentUser)
        const online = onlineUsers.find((user) => user.userId === chatMembers)
        return online ? true : false
    }
    return (
        <div>
            <div>
                <Layout>
                    <h2 className="hidden md:block text-2xl underline mb-4 text-heavy-metal-500 opacity-40">Chats</h2>
                    <Card>
                        <MessageHead user={userData} online={checkOnlineStatus(chat)} />
                        <MessageContent receiveMessage={receiveMessage} messages={messages} setSendMessage={setSendMessage} setMessages={setMessages} chat={chat} />
                    </Card>
                </Layout>
            </div>
        </div>
    )
}

export default Message 