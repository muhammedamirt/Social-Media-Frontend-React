import Layout from "../../components/Layout/Layout"
import Story from "../../components/Story/Story"
import PostCard from "../../components/PostCard/PostCard"
import {routeChanged} from '../../redux/topLoadingBar'
import { useDispatch } from "react-redux"


const Home = () => {
  const dispatch = useDispatch()
  dispatch(routeChanged())
  return (
    <Layout>
      <Story />
      <PostCard />
    </Layout>
  )
}

export default Home