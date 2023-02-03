import { useState } from 'react'
import Avatars from '../Avathar/Avathar'
import { Card } from '../Card/Card'
import ViewStory from './ViewStory'
import { tempData } from '../../../utils/sotrytempdata'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Story = () => {
    const [showStory, setShowStory] = useState(false)
    const handleFollowOnClose = () => {
        setShowStory(false)
    }

    return (
        <Card>
            <div className='flex gap-2'>
                <div className='px-1 relative'>
                    <div className='w-16 h-16 rounded-full overflow-hidden border-2  shadow-sm shadow-gray-500 '>
                        <img src="https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg" alt="avatars" />
                    </div>
                    <div className='absolute ml-10 -mt-5 text-orange-600 bg-white rounded-full border items-center'>
                        <AddCircleOutlineIcon />
                    </div>
                </div>
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
                onClose={handleFollowOnClose}
            />
        </ Card>

    )
}

export default Story