import { Card } from "../Card/Card"
// import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

const MyFollowers = ({ followersData }) => {
    // const userData = useSelector((state) => state.userData.userData)
    return (
        <div>
            <div>
                <Card>
                    <div>
                        <h2 className="font-bold text-xl mb-4">Followers</h2>
                    </div>
                    <div>
                        {followersData.length !== 0 ?
                            followersData.map((follower) => {
                                return <Link className="" to={`/profile/${follower?.followers?._id}`}>
                                <div key={follower.followers?._id} className="border-b p-4 -mx-4 hover:bg-heavy-metal-100 border-b-heavy-metal-300 flex justify-between">
                                    <div className="flex gap-3">
                                        <div className='w-12 rounded-full overflow-hidden shadow-sm shadow-gray-500'>
                                            <img src={follower?.followers?.picture} alt="avatars" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">{follower?.followers?.first_name} {follower?.followers?.last_name}</h3>
                                            <h4 className="text-sm leading-3">{follower?.followers?.username}</h4>
                                        </div>
                                    </div>
                                    {/* <button className="text-heavy-metal-800 px-6 rounded-xl font-bold text-md border-heavy-metal-800 border-4 hover:bg-heavy-metal-800 hover:text-snow-drift-50">
                                        Remove
                                    </button> */}
                                </div>
                                </Link>
                            })     
                        :<p>nop</p>}
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default MyFollowers