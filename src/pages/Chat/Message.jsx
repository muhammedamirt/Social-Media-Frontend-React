import React from 'react'
import { useDispatch } from 'react-redux'
import { Card } from '../../components/Card/Card'
import MessageContent from '../../components/ChatItems/MessageContent'
import MessageHead from '../../components/ChatItems/MessageHead'
import Layout from '../../components/Layout/Layout'
import { routeChanged } from '../../redux/topLoadingBar'

const Message = () => {
    const dispatch = useDispatch()
    dispatch(routeChanged())
    return (
        <div>
            <div>
                <Layout>
                    <h2 className="hidden md:block text-6xl mb-4 text-heavy-metal-500 opacity-40">Chats</h2>
                    <Card>
                        <MessageHead />
                        <MessageContent />
                    </Card>
                </Layout>
            </div>
        </div>
    )
}

export default Message