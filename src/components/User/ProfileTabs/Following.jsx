import { Card } from "../Card/Card"
import Groups2Icon from '@mui/icons-material/Groups2';

const Following = ({ followingData }) => {
    return (
        <div>
            <div>
                <Card>
                    <div>
                        <h2 className="font-bold text-xl mb-4">Following</h2>
                    </div>
                    {followingData?.length !== 0 ?
                        followingData.map((following) => {
                            return (
                                <div key={following?.following?._id} >
                                    <div className="border-b p-4 -mx-4 border-b-heavy-metal-300">
                                        <div className="flex gap-3">
                                            <div className='w-12 rounded-full overflow-hidden shadow-sm shadow-gray-500'>
                                                <img src="https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg" alt="avatars" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg">{following?.following?.first_name} {following?.following?.last_name}</h3>
                                                <h4 className="text-sm leading-3">{following?.following?.username}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        : <div className='grid justify-center'>
                            <div className='flex items-center px-8'>
                                <Groups2Icon />
                            </div>
                            <p className="font-bold">No Followers</p>
                        </div>
                    }
                </Card>
            </div >
        </div >
    )
}

export default Following