import { Link } from "react-router-dom"
import { Card } from "../Card/Card"
import Groups2Icon from '@mui/icons-material/Groups2';

const Followers = ({ followersData }) => {
    const myId = localStorage.getItem('id')
    return (
        <div>
            <div>
                <Card>
                    <div>
                        <h2 className="font-bold text-xl mb-4">Followers</h2>
                    </div>
                    <div>
                        {followersData?.length !==0?
                         followersData.map((follower) => {
                            return (
                                <Link to={myId !== follower?.followers?._id ? `/profile/${follower?.followers?._id}` : '/myprofile'}>
                                    <div key={follower?.followers?._id} className="border-b p-4 -mx-4 border-b-heavy-metal-300 hover:bg-snow-drift-100">
                                        <div className="flex gap-3">
                                            <div className='w-12 h-12 rounded-full overflow-hidden shadow-sm shadow-gray-500'>
                                                <img src={follower?.followers?.picture} alt="avatars" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg">{follower?.followers?.first_name} {follower?.followers?.last_name}</h3>
                                                <h4 className="text-sm leading-3">{follower?.followers?.username}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                        :<div className='grid justify-center'>
                        <div className='flex items-center px-8'>
                            <Groups2Icon />
                        </div>
                        <p className="font-bold">No Followers</p>
                    </div>
                        }
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Followers