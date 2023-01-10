import React from 'react'
import { useDispatch } from 'react-redux'
import { Card } from '../../components/Card/Card'
import ChatContent from '../../components/ChatItems/ChatContent'
import ChatHead from '../../components/ChatItems/ChatHead'
import Layout from '../../components/Layout/Layout'
import { routeChanged } from '../../redux/topLoadingBar'

const Chat = () => {
    const dispatch = useDispatch()
    dispatch(routeChanged())
    return (
        <div>
            <Layout>
                <h2 className="hidden md:block text-6xl mb-4 text-heavy-metal-500 opacity-40">Chats</h2>
                <Card>
                    <div className='bg-white rounded-t-lg border-heavy-metal-700 border-2'>
                        <ChatHead />
                        <ChatContent />
                    </div>
                </Card>
            </Layout>
        </div>
    )
}

export default Chat