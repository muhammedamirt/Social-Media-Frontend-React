import { useState } from 'react'
import Avatars from '../Avathar/Avathar'
import { Card } from '../Card/Card'
import ViewStory from './ViewStory'
import { tempData } from '../../../utils/sotrytempdata'

const Story = () => {
    const [showStory, setShowStory] = useState(false)
    const handleFollowOnClose = () => {
        setShowStory(false)
    }

    return (
        <Card>
            <div className=''>
                <div className='overflow-x-scroll flex gap-3 scrollbar-hide'>
                    {
                        tempData.map((data) => {
                            return (
                                <div onClick={() => setShowStory(true)}>
                                    <Avatars />
                                </div>
                            )
                        })

                    }

                </div>
            </div>
            <ViewStory
                visible={showStory}
                // value={modal}
                // userId={user.userId}
                onClose={handleFollowOnClose}
            />
        </ Card>

    )
}

export default Story