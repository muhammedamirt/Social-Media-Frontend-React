import Layout from "../../../components/User/Layout/Layout"
import Story from "../../../components/User/Story/Story"
import PostCard from "../../../components/User/PostCard/PostCard"
import { routeChanged } from '../../../redux/topLoadingBar'
import { useDispatch } from "react-redux"
import { fetchFollowersPosts, handleLikePost } from "../../../api/user"
import { useEffect, useState } from "react"
import ProtectedRoute from "../../../components/User/ProtectedRout/ProtectedRoute"



const Home = () => {
  const [userPosts, setUserPosts] = useState([])
  const followersPosts = async () => {
    const data = await fetchFollowersPosts()
    setUserPosts(...userPosts, data)
  }
  useEffect(() => {
    followersPosts()
  }, [])



  const currUser = localStorage.getItem("id")
  useEffect(() => {
    followersPosts()
  }, [])

  const dispatch = useDispatch()
  dispatch(routeChanged())


  return (
    <ProtectedRoute>
      <Layout>
        <Story />
        {
          userPosts?.map((post) => (<PostCard post={post} />))
        }
      </Layout>
    </ProtectedRoute>
  )
}

export default Home