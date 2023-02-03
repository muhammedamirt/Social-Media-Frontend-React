import { Card } from "../Card/Card"
import Groups2Icon from '@mui/icons-material/Groups2';
import { Link, NavLink } from "react-router-dom";

const Following = ({ followingData }) => {
    const myId = localStorage.getItem('id')
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
                                    {<NavLink to={myId !== following?.following?._id ? `/profile/${following?.following?._id}`:'/myprofile'}>
                                        <div className="border-b p-4 -mx-4 border-b-heavy-metal-300 hover:bg-heavy-metal-200 cursor-pointer">
                                            <div className="flex gap-3">
                                                <div className='w-12 rounded-full overflow-hidden shadow-sm shadow-gray-500'>
                                                    <img src={following?.following?.picture} alt="avatars" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg">{following?.following?.first_name} {following?.following?.last_name}</h3>
                                                    <h4 className="text-sm leading-3">{following?.following?.username}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                    }
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