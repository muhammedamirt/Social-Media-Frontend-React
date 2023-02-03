import { Card } from "../Card/Card"
// import { useSelector } from 'react-redux'
import { fetchUserPosts } from "../../../api/user"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

const MyPosts = () => {
    const [userPosts, setUserPosts] = useState([])
    // const userData = useSelector((state) => state.userData.userData)
    const userId = localStorage.getItem('id')
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
                            <Link to={'/singlePost'} state={{ postId: obj?.posts?._id }}>
                                <img className="rounded-md overflow-hidden h-20 w-20 md:h-44 md:w-44 flex items-center cursor-pointer object-cover" src={obj?.posts?.image} alt="posts" />
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

export default MyPosts