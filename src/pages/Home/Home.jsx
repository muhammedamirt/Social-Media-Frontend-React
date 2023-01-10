import Layout from "../../components/Layout/Layout"
import Story from "../../components/Story/Story"
import PostCard from "../../components/PostCard/PostCard"
import { routeChanged } from '../../redux/topLoadingBar'
import { useDispatch } from "react-redux"
import { fetchFollowersPosts } from "../../api/user"
import { useEffect, useState } from "react"
import ProtectedRoute from "../../components/ProtectedRout/ProtectedRoute"



const Home = () => {

  const dispatch = useDispatch()
  dispatch(routeChanged())


  return (
    <ProtectedRoute>
      <Layout>
        <Story />
        <PostCard />
      </Layout>
    </ProtectedRoute>
  )
}

export default Home