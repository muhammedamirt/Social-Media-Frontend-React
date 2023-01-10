import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchUserPosts } from "../../api/user"
import { Card } from "../Card/Card"

const Posts = () => {
    const [userPosts, setUserPosts] = useState([])
    // const userData = useSelector((state) => state.userData.userData)
    const {userId} = useParams()
    const fetchUserData = async () => {
        let data = await fetchUserPosts(userId)
        setUserPosts(data)
    }

    useEffect(() => {
        fetchUserData()
    }, [])
    return (
        <div>
            <Card>
                <div className="grid grid-cols-3 gap-2">
                {userPosts.length !== 0 ? userPosts.map((obj) => {
                        return (<div key={obj?.posts?._id}>
                           <Link to={'/viewPosts'}>
                            <img className="rounded-md overflow-hidden h-44 w-44 flex items-center cursor-pointer object-cover" src={obj?.posts?.image} alt="posts" />
                            </Link>
                        </div>)
                    }) :
                        <div>
                            <p>No posts</p>
                        </div>
                    }
                </div>
            </Card>
        </div>
    )
}

export default Posts