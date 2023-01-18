import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getMessages } from '../../../api/messageReq'
import { userDataToProfile } from '../../../api/user'
import { Card } from '../../../components/User/Card/Card'
import MessageContent from '../../../components/User/ChatItems/MessageContent'
import MessageHead from '../../../components/User/ChatItems/MessageHead'
import Layout from '../../../components/User/Layout/Layout'
import { routeChanged } from '../../../redux/topLoadingBar'

const Message = () => {
    const dispatch = useDispatch()
    dispatch(routeChanged())
    const [userData, setUserData] = useState(null)
    const [messages, setMessages] = useState([])
    const {state} = useLocation()
    console.log(state,'ddddddddddddddddd');
    const {chatHandle, messageHandle} = state
    const {setSendMessage, receiveMessage} = messageHandle
    const { chat, currentUser } = chatHandle
    useEffect(()=>{
        if(receiveMessage !== null && receiveMessage.chatId === chat._id){
            setMessages([...messages,receiveMessage])
        }
    },[receiveMessage])

    useEffect(() => {
        try {
            let userId = chat?.members?.find((id) => id !== currentUser)
            console.log(userId, 'id');
            const getUserData = async () => {
                const data = await userDataToProfile(userId)
                setUserData(data)
                console.log(data, 'userData');
            }
           if(chat !== null) getUserData()
        } catch (error) {
            console.log(error);
        }
    }, [chat,currentUser])
    useEffect(()=>{
        const fetchMessages = async ()=>{
            try {
               const {data} = await getMessages(chat._id) 
               setMessages(data)
               console.log(data,'messages');
            } catch (error) {
               console.log(error); 
            }
        }
        console.log(chat,'oooooo');
        if(chat !== null) fetchMessages()
    },[chat])

    
    return (
        <div>
            <div>
                <Layout>
                    <h2 className="hidden md:block text-2xl underline mb-4 text-heavy-metal-500 opacity-40">Chats</h2>
                    <Card>
                        <MessageHead user={userData}/>
                        <MessageContent messages={messages} setMessages={setMessages} chat={chat} setSendMessage={setSendMessage} />
                    </Card>
                </Layout>
            </div>
        </div>
    )
}

export default Message 